import { Flex, Box } from "@chakra-ui/react";
import { RecipeItem } from "./RecipeItem";

export const RecipeItems = ({ recipes, onClick }) => {
  return (
    <Flex
      gap={16}
      w={["100%", "90%", "80%", "70%"]}
      flexWrap="wrap"
      justify="center"
      m="4"
    >
      {recipes.map((recipe) => (
        <Box key={recipe.label} w={["100%", "45%", "30%"]}>
          <RecipeItem recipe={recipe} onClick={onClick} />
        </Box>
      ))}
    </Flex>
  );
};
