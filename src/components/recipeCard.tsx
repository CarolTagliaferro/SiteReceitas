import React from "react";

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
    <div className="bg-bgWhite w-80 rounded-lg shadow-md p-2">
      <img
        src={recipes.image}
        alt={recipes.name}
        className="w-96 h-48 object-cover rounded-t-lg"
      />
      <h2 className="mt-2 text-lg text-title font-semibold">{recipes.name}</h2>
    </div>
  );
};

export default RecipeCard;
