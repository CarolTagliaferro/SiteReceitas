import React from "react";
import recipes from "../../../services/recipes.json";
import RecipeCard from "../../../components/recipeCard";

const Fit = () => {
  const salgadasReceitas = recipes.recipes.filter((recipes) =>
    recipes.tags.includes("fit")
  );

  return (
    <div className="my-5 mx-5">
      <div className="my-3">
        <h1 className="font-semibold text-title text-2xl text-center">
          Confira abaixo:
        </h1>
      </div>
      <div className="grid grid-cols-5 gap-5 justify-items-center mx-10 my-5">
        {salgadasReceitas.map((recipes) => (
          <RecipeCard key={recipes.id} recipes={recipes} />
        ))}
      </div>
    </div>
  );
};

export default Fit;
