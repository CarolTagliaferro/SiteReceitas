import React from "react";
import doces_bn from "../../../images/doces_bn.png";

const BannerDoce = () => {
  return (
    <div>
      <div className="relative">
        <img
          className="w-full h-auto brightness-50"
          src={doces_bn}
          alt="Doces"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-bgWhite z-10">
        <h1 className="text-5xl font-bold">
          A doçura da vida: Receitas que encantam!
        </h1>
      </div>
    </div>
  );
};

export default BannerDoce;
