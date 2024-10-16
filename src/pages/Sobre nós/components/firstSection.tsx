import React from "react";
import { PiCookingPotFill } from "react-icons/pi";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaPeopleRoof } from "react-icons/fa6";
import { GiFruitBowl } from "react-icons/gi";
import { Classes } from "../../../utils/tailwindPredefs";

const FirstSection = () => {
  return (
    <div>
      <div className="justify-center flex my-10 mx-20">
        <div className="w-2/3 text-center">
          <h2 className="text-gray-800">
            Somos apaixonados por culinária e criamos este espaço para
            compartilhar receitas, dicas e inspiração para todos que adoram
            cozinhar. Nosso objetivo é tornar o ato de cozinhar mais acessível e
            prazeroso para todos.
          </h2>
        </div>
      </div>
      <div className="bg-bgRandomHome h-auto py-10 px-20 my-5">
        <div className="flex justify-between mx-20">
          <div className={Classes.iconBox}>
            <PiCookingPotFill className={Classes.icon} />
            <p className={Classes.pIcon}>Alta qualidade</p>
          </div>
          <div className={Classes.iconBox}>
            <FaHandHoldingHeart className={Classes.icon} />
            <p className={Classes.pIcon}>Feito com amor</p>
          </div>
          <div className={Classes.iconBox}>
            <FaPeopleRoof className={Classes.icon} />
            <p className={Classes.pIcon}>Para comunidade</p>
          </div>
          <div className={Classes.iconBox}>
            <GiFruitBowl className={Classes.icon} />
            <p className={Classes.pIcon}>Para saúde</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
