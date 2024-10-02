import React from "react";
import { Link } from "react-router-dom";

interface Recipe {
  id: number;
  name: string;
  tags: string[];
  image: string;
}

interface RecipeCardProps {
  recipes: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipes }) => {
  return (
    <Link to={`/recipe/${recipes.id}`}>
      <div className="bg-bgWhite w-80 rounded-lg shadow-md p-2 hover:brightness-90">
        <img
          src={recipes.image}
          alt={recipes.name}
          className="w-96 h-48 object-cover rounded-t-lg"
        />
        <h2 className="mt-2 text-lg text-title font-semibold">
          {recipes.name}
        </h2>
      </div>
    </Link>
  );
};

export default RecipeCard;
