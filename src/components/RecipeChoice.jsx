import {
  Box,
  Center,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Button } from "./ui/Button";

export const RecipeChoice = ({ recipe, onClick }) => {
  return (
    <Box mt={30} mb={30} overflow="hidden" width={["full", "50%"]}>
      <Center flexDir="column">
        <Box
          borderTopRadius="md"
          boxShadow="md"
          overflow="hidden"
          width="100%"
          height="300px"
        >
          <Image
            src={recipe.image}
            alt={recipe.label}
            objectFit="cover"
            width="100%"
            height="100%"
          />
        </Box>

        <Grid templateColumns={["1fr", "1fr 1fr"]} width={["full", "full"]}>
          <VStack bg="white" spacing={4} align="start">
            <Heading fontSize="2xl" color="gray.600">
              {recipe.label}
            </Heading>
            <Text fontWeight="bold">Meal Type:</Text>
            <Text>{recipe.mealType.join(", ")}</Text>

            <Text fontWeight="bold">Dish Type:</Text>
            <Text>{recipe.dishType.join(", ")}</Text>

            <Text fontWeight="bold">Ingredients:</Text>
            {recipe.ingredientLines.map((ingredient, index) => (
              <Text key={index}>{ingredient}</Text>
            ))}

            <Text fontWeight="bold">Total Cooking Time:</Text>
            <Text>{recipe.totalTime} minutes</Text>
          </VStack>

          <VStack bg="gray.100" spacing={4} align="start">
            <Text fontWeight="bold">Diet Label:</Text>
            <Text>{recipe.dietLabels.join(", ")}</Text>

            <Text fontWeight="bold">Health Labels:</Text>
            <Text>{recipe.healthLabels.join(", ")}</Text>

            <Text fontWeight="bold">Cautions:</Text>
            <Text>{recipe.cautions.join(", ")}</Text>

            <Text fontWeight="bold">Servings:</Text>
            <Text>{recipe.yield} servings</Text>

            <Text fontWeight="bold">Total Nutrients:</Text>
            <Text>
              Energy: {recipe.totalNutrients.ENERC_KCAL.quantity}{" "}
              {recipe.totalNutrients.ENERC_KCAL.unit}
            </Text>
            <Text>
              Protein: {recipe.totalNutrients.PROCNT.quantity}{" "}
              {recipe.totalNutrients.PROCNT.unit}
            </Text>
            <Text>
              Fat: {recipe.totalNutrients.FAT.quantity}{" "}
              {recipe.totalNutrients.FAT.unit}
            </Text>
            <Text>
              Carbs: {recipe.totalNutrients.CHOCDF.quantity}{" "}
              {recipe.totalNutrients.CHOCDF.unit}
            </Text>
            <Text>
              Cholesterol: {recipe.totalNutrients.CHOLE.quantity}{" "}
              {recipe.totalNutrients.CHOLE.unit}
            </Text>
            <Text>
              Sodium: {recipe.totalNutrients.NA.quantity}{" "}
              {recipe.totalNutrients.NA.unit}
            </Text>
          </VStack>
        </Grid>

        <Flex mt={4}>
          <Button onClick={() => onClick()}>Go Back</Button>
        </Flex>
      </Center>
    </Box>
  );
};
