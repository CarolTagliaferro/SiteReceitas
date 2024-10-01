import React from "react";
import fit_bn from "../../../images/fit_bn.png";

const BannerFit = () => {
  return (
    <div>
      <div className="relative">
        <img className="w-full h-auto brightness-50" src={fit_bn} alt="Doces" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-bgWhite z-10">
        <h1 className="text-5xl font-bold">
          Alimente seu corpo e sua alma com nossas receitas fit!
        </h1>
      </div>
    </div>
  );
};

export default BannerFit;
