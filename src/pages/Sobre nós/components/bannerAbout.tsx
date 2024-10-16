import React from "react";
import bnAbout from "../../../images/bnAbout.png";

const BannerAbout = () => {
  return (
    <div>
      <div className="relative">
        <img
          className="w-full h-auto brightness-50"
          src={bnAbout}
          alt="Mesa de jantar"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-bgWhite text-6xl font-semibold">
            Quem somos nós?
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BannerAbout;
