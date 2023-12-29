import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const PET_TYPES: {
  value: string;
  label: string;
  icon: React.ReactNode;
}[] = [
  {
    value: "dog",
    label: "Dog",
    icon: <FontAwesome5 name="dog" size={24} color="black" />,
  },
  {
    value: "cat",
    label: "Cat",
    icon: <FontAwesome5 name="cat" size={24} color="black" />,
  },
  {
    value: "fish",
    label: "Fish",
    icon: <FontAwesome5 name="fish" size={24} color="black" />,
  },
  {
    value: "bird",
    label: "Bird",
    icon: <MaterialCommunityIcons name="bird" size={24} color="black" />,
  },
  {
    value: "snake",
    label: "Snake",
    icon: <FontAwesome5 name="python" size={24} color="black" />,
  },
  {
    value: "frog",
    label: "Frog",
    icon: <FontAwesome5 name="frog" size={24} color="black" />,
  },
  {
    value: "spider",
    label: "Spider",
    icon: <FontAwesome5 name="spider" size={24} color="black" />,
  },
];

export const PET_BREEDS: { value: string; label: string; pet_type: string }[] =
  [
    {
      value: "labrador_retriever",
      label: "Labrador Retriever",
      pet_type: "dog",
    },
    { value: "german_shepherd", label: "German Shepherd", pet_type: "dog" },
    { value: "golden_retriever", label: "Golden Retriever", pet_type: "dog" },
    { value: "french_bulldog", label: "French Bulldog", pet_type: "dog" },

    { value: "persian", label: "Persian", pet_type: "cat" },
    { value: "maine_coon", label: "Maine Coon", pet_type: "cat" },
    { value: "siamese", label: "Siamese", pet_type: "cat" },
    { value: "ragdoll", label: "Ragdoll", pet_type: "cat" },

    { value: "goldfish", label: "Goldfish", pet_type: "fish" },
    { value: "betta", label: "Betta", pet_type: "fish" },
    { value: "guppy", label: "Guppy", pet_type: "fish" },
    { value: "angelfish", label: "Angelfish", pet_type: "fish" },

    { value: "parakeet", label: "Parakeet", pet_type: "bird" },
    { value: "canary", label: "Canary", pet_type: "bird" },
    { value: "lovebird", label: "Lovebird", pet_type: "bird" },
    {
      value: "african_grey_parrot",
      label: "African Grey Parrot",
      pet_type: "bird",
    },

    { value: "corn_snake", label: "Corn Snake", pet_type: "snake" },
    { value: "ball_python", label: "Ball Python", pet_type: "snake" },
    { value: "king_snake", label: "King Snake", pet_type: "snake" },
    { value: "boa_constrictor", label: "Boa Constrictor", pet_type: "snake" },

    {
      value: "dwarf_clawed_frog",
      label: "Dwarf Clawed Frog",
      pet_type: "frog",
    },
    { value: "pacman_frog", label: "Pacman Frog", pet_type: "frog" },
    {
      value: "red_eyed_tree_frog",
      label: "Red-Eyed Tree Frog",
      pet_type: "frog",
    },
    { value: "african_bullfrog", label: "African Bullfrog", pet_type: "frog" },

    { value: "tarantula", label: "Tarantula", pet_type: "spider" },
    { value: "jumping_spider", label: "Jumping Spider", pet_type: "spider" },
    { value: "wolf_spider", label: "Wolf Spider", pet_type: "spider" },
    {
      value: "orb_weaver_spider",
      label: "Orb Weaver Spider",
      pet_type: "spider",
    },
  ];
