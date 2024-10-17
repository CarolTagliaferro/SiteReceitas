import React from "react";
import verao from "../../../images/verao.png";
import bn from "../../../images/bnRenda.png";
import natal from "../../../images/natal.png";

const RendaExtra = () => {
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
            src={verao}
            alt="Papel alumínio"
            className="w-80 h-auto rounded-xl"
          />
          <div className="w-3/4">
            <h2 className="font-bold text-title text-xl pb-2">
              Aproveite o verão para aumentar sua renda: dicas e receitas
              refrescantes para vender e evitar o sufoco no fim do mês!
            </h2>
            <p className="text-gray-700">
              Vender comida pode ser uma ótima maneira de obter uma renda extra,
              especialmente no verão, quando pratos refrescantes fazem sucesso.
              Investir em receitas geladas, como picolés de frutas, sacolés e
              bolos gelados, é uma estratégia eficaz. Oferecer combos de comidas
              salgadas com bebidas refrescantes também pode atrair mais
              clientes. Escolher pontos de venda em áreas movimentadas, como
              praias e parques, é essencial, assim como garantir o armazenamento
              adequado para evitar contaminação.
              <br />
              Por outro lado, é importante evitar alimentos que não se adaptam
              bem ao calor, como pratos quentes e ingredientes sensíveis, como
              ovos e maionese. Ideias como sanduíches naturais podem funcionar
              bem, desde que sejam embalados corretamente. Algumas receitas
              criativas incluem picolés de melancia e geladinhos de frutas
              tropicais, que garantem a refrescância e o sabor que os clientes
              procuram durante a estação quente.
            </p>
          </div>
        </div>
        <div className="bg-slate-100 w-auto h-60 rounded-lg shadow-lg p-4 flex gap-10">
          <img
            src={natal}
            alt="Colheres de silicone"
            className="w-80 h-auto rounded-xl"
          />
          <div className="w-3/4">
            <h2 className="font-bold text-title text-xl pb-2">
              4 doces para vender no Natal
            </h2>
            <p className="text-gray-700">
              O Natal se aproxima e é uma ótima oportunidade para gerar uma
              renda extra vendendo delícias típicas da época, como doces. O
              TudoGostoso sugere quatro opções: cupcakes, brigadeiros, bolos de
              pote e cookies. Com uma embalagem natalina caprichada, esses doces
              têm grande potencial de venda.
              <br />
              Os cupcakes podem ser decorados com chantili ou buttercream, e as
              forminhas com temas natalinos são uma ótima escolha. Brigadeiros,
              sempre populares, podem ser feitos em diferentes sabores e
              vendidos em caixinhas decoradas. Os bolos de pote são versáteis e
              fáceis de fazer, ideais para a decoração natalina. Por fim, os
              cookies americanos podem ser embalados de forma criativa, como em
              saquinhos ou latas. Essas delícias certamente farão sucesso entre
              os clientes!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RendaExtra;
