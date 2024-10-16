import React, { useState } from "react";
import RecipeCard from "../../../components/recipeCard";
import recipes from "../../../services/recipes.json";

interface Recipe {
  id: number;
  name: string;
  tags: string[];
  image: string;
}

const ReceitasAll: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>("");
  const [searchRecipe, setSearchRecipe] = useState("");

  const allTags = Array.from(
    new Set(recipes.recipes.flatMap((recipe) => recipe.tags))
  ).filter((tags) => tags !== "Kids");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchRecipe(event.target.value);
  };

  const filteredRecipes = recipes.recipes.filter((recipe: Recipe) => {
    const matchesTag = selectedTag ? recipe.tags.includes(selectedTag) : true;
    const matchesSearch = recipe.name
      .toLowerCase()
      .includes(searchRecipe.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <div>
      <div className="bg-bgLight py-2 my-2">
        <div className="mx-14 flex justify-center">
          <select
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            className="p-2 outline-none rounded-md mr-5"
          >
            <option value="">Todas</option>
            {allTags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Pesquise aqui"
            value={searchRecipe}
            onChange={handleSearchChange}
            className="p-2 rounded mx-2 outline-none"
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5 justify-items-center mx-10 my-5">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((receita: Recipe) => (
            <RecipeCard key={receita.id} recipes={receita} />
          ))
        ) : (
          <p className="text-center">Nenhuma receita encontrada!</p>
        )}
      </div>
    </div>
  );
};

export default ReceitasAll;
