import React from "react";
import bn from "../../../images/bnLimpeza.png";
import mofo from "../../../images/limpaMofo.png";
import fogao from "../../../images/limpaFogao.png";

const Limpeza = () => {
  return (
    <div>
      <div className="relative">
        <img className="w-full h-auto brightness-50" src={bn} alt="Limpeza" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-bgWhite text-5xl font-semibold">
            Limpeza Prática: dicas infalíveis para organizar sua cozinha!
          </h1>
        </div>
      </div>
      <div className="mx-20 my-10 flex flex-col gap-5">
        <div className="pb-8">
          <h1 className="text-3xl font-bold">Limpeza</h1>
          <p className="w-2/3 text-gray-700">
            Depois de cozinhar pratos deliciosos, a bagunça na cozinha é
            inevitável! Mas não se preocupe: aprenda a limpar sua cozinha de
            forma simples e prática! Confira diversas dicas incríveis para
            tornar a limpeza mais fácil!
          </p>
        </div>
        <div className="bg-slate-100 w-auto h-auto rounded-lg shadow-lg p-4 flex gap-10">
          <img
            src={mofo}
            alt="Papel alumínio"
            className="w-80 h-auto rounded-xl"
          />
          <div className="w-3/4">
            <h2 className="font-bold text-title text-xl pb-2">
              Limpeza eficaz de manchas de umidade na parede com apenas dois
              ingredientes!
            </h2>
            <p className="text-gray-700">
              Para limpar manchas de umidade na parede, misture partes iguais de
              vinagre branco e água em um borrifador. Pulverize a mistura nas
              áreas afetadas e deixe agir por 10 a 15 minutos. O vinagre, com
              suas propriedades antifúngicas e antimicrobianas, elimina mofo e
              manchas. Após o tempo de espera, esfregue com uma escova ou
              esponja para remover os resíduos, enxágue com água limpa e seque
              bem para evitar o retorno do mofo.
            </p>
          </div>
        </div>
        <div className="bg-slate-100 w-auto h-60 rounded-lg shadow-lg p-4 flex gap-10">
          <img
            src={fogao}
            alt="Colheres de silicone"
            className="w-80 h-auto rounded-xl"
          />
          <div className="w-3/4">
            <h2 className="font-bold text-title text-xl pb-2">
              Mistura caseira para limpar a gordura sem manchar trempes e
              acendedores do fogão.
            </h2>
            <p className="text-gray-700">
              O acúmulo de gordura no fogão pode entupir as bocas do aparelho,
              tornando a limpeza das trempes e acendedores essencial. Para
              facilitar esse processo, uma mistura caseira de apenas dois
              ingredientes comuns pode deixar seu fogão brilhando! Para preparar
              a solução, você precisará de uma colher de sopa de bicarbonato de
              sódio e uma colher de sopa de detergente. Esses ingredientes são
              simples, baratos e provavelmente você já os tem em casa. Use um
              pincel para aplicar a mistura nas trempes e acendedores, criando
              uma pasta ao combinar os dois ingredientes. Deixe agir por cinco
              minutos e, em seguida, lave normalmente, sem a necessidade de
              esfregar com esponja.
              <br />O bicarbonato é levemente abrasivo, ideal para remover
              manchas sem arranhar superfícies delicadas. Quando combinado com o
              detergente, ele ajuda a dissolver a gordura, facilitando a remoção
              de resíduos. Essa combinação aumenta a eficácia na limpeza, sendo
              especialmente útil em superfícies oleosas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Limpeza;
