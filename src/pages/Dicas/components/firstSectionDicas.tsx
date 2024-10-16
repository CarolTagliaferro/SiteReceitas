import React from "react";
import utensilios from "../../../images/utensilios.png";
import truques from "../../../images/truques.png";
import limpeza from "../../../images/limpeza.png";
import rendaExtra from "../../../images/rendaExtra.png";

const FirstSectionDicas = () => {
  return (
    <div className="mx-20 my-10">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-title">Dicas de cozinha</h1>
        <p className="text-gray-600 w-1/2 pt-2">
          Confira truques incríveis para tornar sua vida na cozinha mais prática
          e descomplicada! Vamos compartilhar segredos de culinária, ensinar a
          usar utensílios de forma inteligente, dar dicas de limpeza eficientes,
          e mostrar formas de otimizar sua rotina. Além disso, descubra como
          ganhar uma renda extra com a sua paixão pela cozinha. Não perca essas
          ideias que vão transformar o seu dia a dia!
        </p>
      </div>
      <div className="flex gap-4">
        <div className="bg-bgWhite font-poppins w-72 rounded-lg shadow-md p-2 hover:brightness-90 transition-all">
          <img
            src={utensilios}
            alt="Utensílios"
            className="w-80 h-48 object-cover rounded-t-lg"
          />
          <h2 className="mt-2 text-lg text-title font-semibold">Utensilios</h2>
        </div>
        <div className="bg-bgWhite font-poppins w-72 rounded-lg shadow-md p-2 hover:brightness-90 transition-all">
          <img
            src={truques}
            alt="Truques"
            className="w-80 h-48 object-cover rounded-t-lg"
          />
          <h2 className="mt-2 text-lg text-title font-semibold">Truques</h2>
        </div>
        <div className="bg-bgWhite font-poppins w-72 rounded-lg shadow-md p-2 hover:brightness-90 transition-all">
          <img
            src={limpeza}
            alt="Limpeza"
            className="w-80 h-48 object-cover rounded-t-lg"
          />
          <h2 className="mt-2 text-lg text-title font-semibold">Limpeza</h2>
        </div>
        <div className="bg-bgWhite font-poppins w-72 rounded-lg shadow-md p-2 hover:brightness-90 transition-all">
          <img
            src={rendaExtra}
            alt="Utensílios"
            className="w-80 h-48 object-cover rounded-t-lg"
          />
          <h2 className="mt-2 text-lg text-title font-semibold">Renda extra</h2>
        </div>
      </div>
    </div>
  );
};

export default FirstSectionDicas;
