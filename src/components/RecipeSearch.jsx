import { useState } from "react";
import { data } from "../utils/data";
import { RecipeItems } from "./RecipeItems";
import { TextInput } from "./ui/TextInput";
import { Select } from "@chakra-ui/react";
export const RecipeSearch = ({ onClick }) => {
  const [searchField, setSearchField] = useState("");
  const [selectedLabel, setSelectedLabel] = useState("");

  const recipes = data.hits.map((hit) => hit.recipe);

  const matchedRecipes = recipes.filter((recipe) => {
    const lowerCaseSearchField = searchField.toLowerCase();
    const lowerCaseLabel = recipe.label.toLowerCase();
    const hasMatchingName = lowerCaseLabel.includes(lowerCaseSearchField);

    const hasMatchingLabel =
      !selectedLabel || recipe.healthLabels.includes(selectedLabel);

    return hasMatchingName && hasMatchingLabel;
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  const handleLabelChange = (event) => {
    setSelectedLabel(event.target.value);
  };

  return (
    <>
      <label>Search for recipes:</label>
      <TextInput onChange={handleChange} w={200} mb={8} />

      <div>
        <label>Filter by health labels:</label>
        <Select
          bgColor="white"
          value={selectedLabel}
          onChange={handleLabelChange}
        >
          <option value="">All</option>
          <option value="Vegan">Vegan</option>
          <option value="Vegetarian">Vegetarian</option>
        </Select>
      </div>

      <RecipeItems onClick={onClick} recipes={matchedRecipes} />
    </>
  );
};
