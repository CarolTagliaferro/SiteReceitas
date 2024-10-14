import React, { useState } from "react";
import RecipeCard from "../../../components/recipeCard";
import recipes from "../../../services/recipes.json";

interface Recipe {
  id: number;
  name: string;
  tags: string[];
  image: string;
}

const ThirdSection: React.FC = () => {
  const [randomRecipe, setRandomRecipe] = useState<Recipe | null>(null);

  const getRandomRecipe = () => {
    const randomIndex = Math.floor(Math.random() * recipes.recipes.length);
    const selectedRecipe = recipes.recipes[randomIndex];
    setRandomRecipe(selectedRecipe);
  };

  return (
    <div className="flex flex-col items-center text-center bg-bgRandomHome py-6 my-10">
      <div className="mb-4">
        <h2 className="text-3xl font-bold text-titleRandom pb-1">
          Quer testar uma receita nova e não sabe qual?
        </h2>
        <h3 className="text-lg text-gray-700">
          Clique no botão abaixo e teste nosso gerador de receitas aleatórias!
        </h3>
      </div>
      <button
        onClick={getRandomRecipe}
        className="bg-titleRandom text-white px-4 py-3 mb-3 text-lg rounded-xl hover:bg-bgDark transition-all"
      >
        Gerar receita aleatória
      </button>

      {randomRecipe ? (
        <div>
          <RecipeCard key={randomRecipe.id} recipes={randomRecipe} />
        </div>
      ) : (
        <div className="pt-3">
          <div className="w-80 h-52 border-2 border-solid border-titleRandom bg-bgWhite flex flex-col justify-center items-center rounded-xl">
            <p className="text-titleRandom font-medium">
              Descubra sua receita!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThirdSection;
