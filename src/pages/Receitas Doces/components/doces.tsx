import React from "react";
import RecipeCard from "../../../components/recipeCard";
import recipes from "../../../services/recipes.json";

const Doces = () => {
  const docesReceitas = recipes.recipes.filter((recipes) =>
    recipes.tags.includes("doce")
  );

  return (
    <div className="my-5 mx-5">
      <div className="my-3">
        <h1 className="font-semibold text-title text-2xl text-center">
          Confira abaixo:
        </h1>
      </div>
      <div className="grid grid-cols-5 gap-5 justify-items-center mx-10 my-5">
        {docesReceitas.map((recipes) => (
          <RecipeCard key={recipes.id} recipes={recipes} />
        ))}
      </div>
    </div>
  );
};

export default Doces;
