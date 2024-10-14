import React from "react";
import criancaCozinhando from "../../../images/criancaCozinha.png";
import imunidade from "../../../images/imunidade.png";
import { NavLink } from "react-router-dom";

const FourthSection = () => {
  return (
    <div className="mx-20 my-16">
      <div className="container">
        <div className="grid grid-cols-2 gap-8">
          <NavLink to="/kids" className="flex">
            <img
              src={criancaCozinhando}
              alt="Criança cozinhando"
              className="w-80 h-auto rounded-xl brightness-50 transition-all duration-300 hover:scale-105"
            />
            <div className="ml-3">
              <h2 className="font-semibold text-xl text-title">
                Receitas para crianças!
              </h2>
              <p className="pt-4 text-gray-800">
                Cozinhar com crianças pode ser uma atividade super divertida.
                Pensando nisso, criamos este conteúdo com receitas fáceis e
                práticas para que elas possam preparar em casa.
              </p>
            </div>
          </NavLink>

          <NavLink to="/imuni" className="flex">
            <img
              src={imunidade}
              alt="Alimentos saudáveis"
              className="w-80 h-auto rounded-xl brightness-50 transition-all duration-300 hover:scale-105"
            />
            <div className="ml-3">
              <h2 className="font-semibold text-xl text-title">
                Alimentos que aumentam a imunidade!
              </h2>
              <p className="pt-4 text-gray-800">
                Fortalecer a imunidade é essencial para proteger o corpo contra
                doenças. Alimentos nutritivos como legumes, verduras e frutas
                são ricos em vitaminas e ajudam a manter o organismo saudável e
                protegido.
              </p>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
