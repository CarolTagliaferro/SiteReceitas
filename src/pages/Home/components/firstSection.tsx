import React from "react";
import banner_home from "../../../images/banner_home.png";

const FirstSection = () => {
  return (
    <div>
      <div className="relative">
        <img
          className="w-full h-auto brightness-50"
          src={banner_home}
          alt="Pessoa cozinhando"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-bgWhite z-10">
        <h1 className="text-6xl font-bold">Bem-vindo à Nossa Cozinha!</h1>
        <p className="mt-2 text-lg text-bgWhite">
          Descubra receitas deliciosas e fáceis de preparar
        </p>
      </div>
    </div>
  );
};

export default FirstSection;
