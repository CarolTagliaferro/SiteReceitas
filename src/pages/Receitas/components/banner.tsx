import React from "react";
import bnReceitas from "../../../images/bnReceitas.png";
const Banner = () => {
  return (
    <div>
      <div className="relative">
        <img
          className="w-full h-auto brightness-50"
          src={bnReceitas}
          alt="Pessoa cozinhando"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-bgWhite text-5xl font-semibold">
            Nossas Receitas Deliciosas!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
