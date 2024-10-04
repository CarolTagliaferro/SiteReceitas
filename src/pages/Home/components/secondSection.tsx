import React from "react";
import RecipeCard from "../../../components/recipeCard";
import recipes from "../../../services/recipes.json";
import { NavLink } from "react-router-dom";

interface Recipe {
  id: number;
  name: string;
  tags: string[];
  image: string;
}

const SecondSection: React.FC = () => {
  return (
    <div className="my-5">
      <div>
        <h1 className="text-center font-semibold text-3xl text-title">
          Nossas receitas:
        </h1>
      </div>
      <div>
        <div className="flex justify-center gap-14 my-5">
          {recipes.recipes.slice(0, 4).map((recipes: Recipe) => (
            <RecipeCard key={recipes.id} recipes={recipes} />
          ))}
        </div>
        <div className="text-center">
          <NavLink to="/receitas">
            <button className="bg-bgDark py-3 px-4 rounded-xl text-bgWhite font-medium text-lg hover:bg-bgLight transition-all">
              Veja mais
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default SecondSection;
