import React from "react";
import kids from "../images/kids.png";
import RecipeCard from "./recipeCard";
import recipes from "../services/recipes.json";

interface Recipe {
  id: number;
  name: string;
  tags: string[];
  image: string;
}

const KidsRecipes: React.FC = () => {
  const kidsRecipes = recipes.recipes.filter((recipe: Recipe) =>
    recipe.tags.includes("Kids")
  );

  return (
    <div className="mx-20 my-10">
      <div className="flex justify-between">
        <div className="w-3/5">
          <h1 className="text-3xl text-title font-bold pb-3">
            Receitas Fáceis e Divertidas para Cozinhar com Crianças
          </h1>
          <p className="text-gray-700">
            Cozinhar com crianças não é apenas uma atividade divertida, mas
            também uma oportunidade para ensinar sobre alimentação saudável e
            habilidades na cozinha. Envolver os pequenos no preparo das
            refeições pode despertar o interesse por novos sabores e
            ingredientes. Por isso, preparamos uma seleção de receitas fáceis e
            práticas, perfeitas para que as crianças possam participar
            ativamente no processo. Desde a escolha dos ingredientes até o
            preparo, essas receitas foram pensadas para serem simples e seguras,
            incentivando a criatividade e autonomia na cozinha.
            <br /> <br /> É importante lembrar que, além da diversão, cozinhar
            juntos é uma forma de criar momentos especiais em família,
            promovendo hábitos saudáveis e um relacionamento positivo com a
            comida. As receitas que sugerimos incluem opções coloridas e
            nutritivas, com ingredientes que agradam o paladar infantil, mas
            também fornecem os nutrientes necessários para o crescimento e
            desenvolvimento. E claro, tudo isso de forma simples e
            descomplicada, para que as crianças possam colocar a mão na massa,
            literalmente, com o mínimo de ajuda dos adultos.
            <br /> <br /> Ao preparar essas receitas com as crianças, além de
            saborear pratos deliciosos, vocês vão fortalecer laços e criar
            memórias inesquecíveis. Experimente essas ideias e aproveite cada
            momento na cozinha!
          </p>
          <h2 className="font-semibold text-xl py-5 text-bgDark">
            Confira abaixo algumas receitas:
          </h2>
          <div className="grid grid-cols-2 gap-y-3">
            {kidsRecipes.map((recipes: Recipe) => (
              <RecipeCard key={recipes.id} recipes={recipes} />
            ))}
          </div>
        </div>
        <div>
          <img
            src={kids}
            alt="Criança cozinhando"
            className="w-11/12 rounded-xl brightness-75"
          />
        </div>
      </div>
    </div>
  );
};

export default KidsRecipes;
