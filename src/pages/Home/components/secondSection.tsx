import React from "react";
import RecipeCard from "../../../components/recipeCard";
import recipes from "../../../services/recipes.json";
import { NavLink } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const SecondSection: React.FC = () => {
  return (
    <div className="my-10 mx-20">
      <h1 className="text-center font-semibold text-3xl text-title">
        Nossas receitas:
      </h1>
      <Splide
        options={{
          type: "loop",
          perPage: 5,
          drag: "free",
        }}
        className="my-10 h-72"
      >
        {recipes.recipes.slice(0, 6).map((recipe) => (
          <SplideSlide key={recipe.id}>
            <RecipeCard recipes={recipe} />
          </SplideSlide>
        ))}
      </Splide>

      <div className="text-center">
        <NavLink to="/receitas">
          <button className="bg-bgDark py-3 px-4 rounded-xl text-bgWhite font-medium text-lg hover:bg-bgLight transition-all">
            Veja mais
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default SecondSection;
