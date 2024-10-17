import React from "react";
import aluminio from "../../../images/aluminio.png";
import colher from "../../../images/colherSilicone.png";
import bn from "../../../images/bnUtensilios.png";

const Utensilios = () => {
  return (
    <div className="">
      <div className="relative">
        <img
          className="w-full h-auto brightness-50"
          src={bn}
          alt="Pessoa cozinhando"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-bgWhite text-6xl font-semibold">
            Utensílios indispensáveis para sua cozinha!
          </h1>
        </div>
      </div>
      <div className="mx-20 my-10 flex flex-col gap-5">
        <div className="pb-8">
          <h1 className="text-3xl font-bold">Utensílios</h1>
          <p className="w-2/3 text-gray-700">
            Descubra os utensílios essenciais que não podem faltar na sua
            cozinha e conheça as últimas novidades em equipamentos modernos! Com
            as nossas sugestões, preparar suas receitas ficará muito mais fácil
            e prático!
          </p>
        </div>
        <div className="bg-slate-100 w-auto h-auto rounded-lg shadow-lg p-4 flex gap-10">
          <img
            src={aluminio}
            alt="Papel alumínio"
            className="w-80 h-auto rounded-xl"
          />
          <div className="w-3/4">
            <h2 className="font-bold text-title text-xl pb-2">
              Por que um lado da folha de alumínio é brilhante e o outro fosco:
              muitas pessoas utilizam do lado errado!
            </h2>
            <p className="text-gray-700">
              O papel-alumínio é um item essencial na cozinha, mas seu uso
              correto ainda gera dúvidas. Muitas pessoas se questionam sobre
              qual lado deve entrar em contato com os alimentos: o fosco ou o
              brilhante?
              <br />
              Na realidade, ambos os lados da folha de alumínio têm a mesma
              eficácia em termos de preservação e distribuição de calor. No
              entanto, alguns fabricantes recomendam o uso do lado fosco para
              evitar que o papel grude em alimentos delicados, como bolos ou
              doces. Embora isso não afete a funcionalidade, seguir essa dica
              pode evitar pequenos transtornos no preparo.
            </p>
          </div>
        </div>
        <div className="bg-slate-100 w-auto h-60 rounded-lg shadow-lg p-4 flex gap-10">
          <img
            src={colher}
            alt="Colheres de silicone"
            className="w-80 h-auto rounded-xl"
          />
          <div className="w-3/4">
            <h2 className="font-bold text-title text-xl pb-2">
              Descobri os benefícios da colher de silicone e agora não consigo
              mais viver sem!
            </h2>
            <p className="text-gray-700">
              A colher de silicone, apesar de dividir opiniões, é muito útil na
              cozinha e tem diversas vantagens em relação a opções de madeira ou
              alumínio. Por ser antiaderente, ela não arranha panelas e é fácil
              de limpar, sem deixar alimentos grudarem. Sua durabilidade também
              é um ponto forte, já que não descasca nem quebra facilmente. Além
              disso, a colher de silicone é resistente ao calor, suportando
              altas temperaturas sem esquentar o cabo. E, segundo a FDA, é um
              material seguro para uso alimentar, sem risco de contaminação.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Utensilios;
