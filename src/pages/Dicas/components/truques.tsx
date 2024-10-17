import React from "react";
import bn from "../../../images/bnTruques.png";
import carne from "../../../images/carneCongelada.png";
import abacaxi from "../../../images/abacaxi.png";

const Truques = () => {
  return (
    <div>
      <div className="relative">
        <img
          className="w-full h-auto brightness-50"
          src={bn}
          alt="Pessoa cozinhando"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-bgWhite text-6xl font-semibold">
            Truques incríveis para arrasar na cozinha!
          </h1>
        </div>
      </div>
      <div className="mx-20 my-10 flex flex-col gap-5">
        <div className="pb-8">
          <h1 className="text-3xl font-bold">Truques</h1>
          <p className="w-2/3 text-gray-700">
            Descubra como ganhar mais agilidade na cozinha com nossos truques
            culinários! Aqui você encontra desde dicas básicas para quem está
            começando a se aventurar, até segredos que farão você parecer um
            verdadeiro chef!
          </p>
        </div>
        <div className="bg-slate-100 w-auto h-auto rounded-lg shadow-lg p-4 flex gap-10">
          <img
            src={carne}
            alt="Papel alumínio"
            className="w-80 h-auto rounded-xl"
          />
          <div className="w-3/4">
            <h2 className="font-bold text-title text-xl pb-2">
              Essa é a melhor dica pra congelar carne que você vai ver
            </h2>
            <p className="text-gray-700">
              Ao chegar do mercado, é importante armazenar a carne corretamente.
              As peças que serão consumidas em até dois dias devem ir para a
              geladeira, enquanto o restante precisa ser congelado. Planeje a
              quantidade para evitar desperdício. Para congelar, divida a carne
              em porções menores, não temperadas, e use potes bem vedados ou
              sacos abre e fecha. Mesmo pedaços prontos podem ser congelados,
              desde que estejam embalados de modo que o ar não entre em contato
              com o alimento.
              <br />
              Um truque que tem circulado nas redes sociais é amassar a carne
              dentro do saco até ficar bem fina e, com a ajuda de uma colher,
              separá-la em porções iguais dentro do plástico. Isso facilita a
              retirada apenas da quantidade necessária para cozinhar, otimizando
              o uso da carne ao longo da semana ou do mês.
            </p>
          </div>
        </div>
        <div className="bg-slate-100 w-auto h-60 rounded-lg shadow-lg p-4 flex gap-10">
          <img
            src={abacaxi}
            alt="Colheres de silicone"
            className="w-80 h-auto rounded-xl"
          />
          <div className="w-3/4">
            <h2 className="font-bold text-title text-xl pb-2">
              Você consegue abrir um abacaxi sem usar faca?
            </h2>
            <p className="text-gray-700">
              Para abrir um abacaxi sem usar faca, primeiro, certifique-se de
              que a fruta está madura, pois o truque não funciona com abacaxis
              verdes. Evite cascas muito esverdeadas ou resistentes. Um teste
              simples é puxar as folhas da coroa; se saírem facilmente, o
              abacaxi está no ponto.
              <br />
              Com o abacaxi maduro, torça a coroa para removê-la, depois role a
              fruta na bancada para soltar a polpa. Por fim, puxe os pedaços da
              casca com os dedos e aproveite!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Truques;
