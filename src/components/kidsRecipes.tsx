import React from "react";
import kids from "../images/kids.png";
import RecipeCard from "./recipeCard";
import recipes from "../services/recipes.json";
import bnKids from "../images/bg_kids.png";

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
    <div>
      <div className="relative">
        <img
          className="w-full h-auto brightness-50"
          src={bnKids}
          alt="Pessoa cozinhando"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-bgWhite z-10">
          <h1 className="text-5xl font-semibold">
            Receitas Fáceis e Divertidas para Cozinhar com Crianças
          </h1>
        </div>
      </div>
      <div className="mx-20 my-10">
        <div>
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
          <h2 className="font-semibold text-2xl py-5 text-title">
            Confira abaixo algumas receitas:
          </h2>
          <div className="flex justify-center gap-10">
            {kidsRecipes.map((recipes: Recipe) => (
              <RecipeCard key={recipes.id} recipes={recipes} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KidsRecipes;
