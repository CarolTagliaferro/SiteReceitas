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
        <h1 className="font-semibold text-title text-3xl text-center">
          Nossas receitas:
        </h1>
      </div>
      <div className="grid grid-cols-5 gap-5 justify-items-center mx-10 my-5">
        {recipes.recipes.map((receita: Recipe) => (
          <RecipeCard key={receita.id} recipes={receita} />
        ))}
      </div>
    </div>
  );
};
export default SecondSection;
