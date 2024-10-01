import React from "react";
import salgadas_bn from "../../../images/salgadas-bn.png";

const BannerDoce = () => {
  return (
    <div>
      <div className="relative">
        <img
          className="w-full h-auto brightness-50"
          src={salgadas_bn}
          alt="Doces"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-bgWhite z-10">
        <h1 className="text-5xl font-bold">
          Explore o sabor das nossas receitas salgadas!
        </h1>
      </div>
    </div>
  );
};

export default BannerDoce;
