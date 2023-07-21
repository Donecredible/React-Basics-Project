import { Center, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { RecipeChoice } from "./components/RecipeChoice";
import { RecipeSearch } from "./components/RecipeSearch";

export const App = () => {
  const [userRecipe, setuserRecipe] = useState();

  const greeting = "Recepten Loep";

  return (
    <Center bgColor="blue.200" h="100%" flexDir="column">
      {userRecipe ? (
        <RecipeChoice recipe={userRecipe} onClick={setuserRecipe} />
      ) : (
        <>
          <Heading size="2xl" mb={8}>
            {greeting}
          </Heading>
          <RecipeSearch onClick={setuserRecipe} />
        </>
      )}
    </Center>
  );
};
