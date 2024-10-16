import React from "react";
import bnDicas from "../../../images/bnDicas.png";

const Banner = () => {
  return (
    <div>
      <div className="relative">
        <img
          className="w-full h-auto brightness-50"
          src={bnDicas}
          alt="Pessoa cozinhando"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-bgWhite text-6xl font-semibold">
            Dicas essenciais para sua cozinha!
          </h1>
          <p className="text-lg pt-2 text-bgWhite">
            Descubra truques e técnicas que vão facilitar seu dia a dia na
            cozinha
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
