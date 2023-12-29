import * as SecureStore from "expo-secure-store";
import { BACKEND_API_URL } from "@env";
import { capitalize } from "./capitalize";

export const fetcher = async (
  url: string,
  config?: Record<string, any>
): Promise<any> => {
  try {
    const token = await SecureStore.getItemAsync("token");
    const res = await fetch(`${BACKEND_API_URL}${url}`, {
      ...config,
      headers: {
        ...config?.headers,
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    });
    const data = await res.json();
    if (!res.ok) {
      const backendError = data?.message;
      if (backendError) {
        let errorMessage = "";
        if (Array.isArray(backendError)) {
          errorMessage = backendError
            .map((error) => capitalize(error))
            .join("\n\n");
        } else {
          errorMessage = backendError;
        }
        throw new Error(errorMessage);
      }
      throw new Error("Something went wrong");
    }
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
