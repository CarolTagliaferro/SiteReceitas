import React from "react";
import { useParams } from "react-router-dom";
import recipes from "../services/recipes.json";
import { Classes } from "../utils/tailwindPredefs";

const RecipeDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const recipeId = id ? parseInt(id) : null;

  const recipe =
    recipeId !== null ? recipes.recipes.find((r) => r.id === recipeId) : null;

  if (!recipe) {
    return <div>Receita não encontrada!</div>;
  }

  return (
    <div className="m-20 font-sans">
      <div className="flex items-center">
        <div>
          <h1 className="text-3xl font-bold text-title">{recipe.name}</h1>
          <img
            className="my-4 object-cover w-4/5 rounded-xl"
            src={recipe.image}
            alt={recipe.name}
          />
        </div>
        <div>
          <h2 className={Classes.rdH2}>Ingredientes</h2>
          <ul className="list-disc ml-6 mt-3">
            {recipe.ingredients.map((ingredients, index) => (
              <li key={index}>{ingredients}</li>
            ))}
          </ul>
          <div className="mt-6 w-3/4">
            <h2 className={Classes.rdH2}>Modo de Preparo</h2>
            <ol className="list-decimal ml-6">
              {recipe.preparation.map((step, index) => (
                <li className="mt-2" key={index}>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
