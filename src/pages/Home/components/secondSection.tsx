import React from "react";
import RecipeCard from "../../../components/recipeCard";
import recipes from "../../../services/recipes.json";

interface Recipe {
  id: number;
  name: string;
  tags: string[];
  image: string;
}

const SecondSection: React.FC = () => {
  return (
    <div>
      <div className="mt-5">
        <h1 className="font-semibold text-title text-2xl text-center">
          Nossas receitas:
        </h1>
      </div>
      <div className="flex gap-8 justify-center my-5">
        {recipes.recipes.map((receita: Recipe) => (
          <RecipeCard key={receita.id} recipes={receita} />
        ))}
      </div>
    </div>
  );
};
export default SecondSection;
