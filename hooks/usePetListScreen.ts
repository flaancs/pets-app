import { useCallback, useEffect, useState } from "react";
import { fetcher } from "../utils/fetcher";
import { Pet } from "../types/pet";
import { Alert } from "react-native";
import { debounce } from "lodash";

export interface usePetListScreenProps {
  refresh: boolean;
}

export const usePetListScreen = ({ refresh }: usePetListScreenProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Pet[]>([]);
  const [search, setSearch] = useState<string>("");
  const [totalCount, setTotalCount] = useState<number>(0);
  const [refreshData, setRefreshData] = useState<boolean>(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    setRefreshData(refresh);
  }, [refresh]);

  const fetchPets = useCallback(async () => {
    try {
      setLoading(true);
      setRefreshData(false);

      const params = new URLSearchParams();
      params.append("page", "1");
      params.append("pageSize", "100");
      search && params.append("name", search);

      await fetcher(`/pets?${params.toString()}`, {
        method: "GET",
      }).then((response: [Pet[], number]) => {
        const [pets, count] = response;
        setData(pets);
        setTotalCount(count);
        setLoading(false);
      });
    } catch (error: any) {
      console.log(error);
      setData([]);
      setTotalCount(0);
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  }, [search, refreshData]);

  useEffect(() => {
    const fetch = async () => fetchPets();
    fetch();
  }, [fetchPets, search]);

  const handleDebounceSearch = debounce((value) => {
    setSearch(value);
  }, 500);

  const onRefresh = () => {
    setIsRefreshing(true);
    fetchPets();
  };

  return {
    loading,
    data,
    search,
    setSearch,
    totalCount,
    fetchPets,
    handleDebounceSearch,
    onRefresh,
    isRefreshing,
  };
};
