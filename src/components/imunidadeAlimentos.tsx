import React from "react";
import health from "../images/health.png";
import { Classes } from "../utils/tailwindPredefs";

const ImunidadeAlimentos = () => {
  return (
    <div className="mx-20 my-10">
      <div className="flex justify-between">
        <div className="w-2/3">
          <h1 className="font-bold text-3xl pb-3 text-title">
            Fortaleça sua Imunidade com Alimentos Nutritivos
          </h1>
          <p className="text-gray-700 pb-5">
            Manter o sistema imunológico forte é essencial para proteger o corpo
            contra doenças e garantir mais energia e disposição. Uma alimentação
            balanceada, rica em legumes, verduras e frutas, é uma das melhores
            formas de fortalecer suas defesas naturais. Esses alimentos são
            ricos em vitaminas, minerais e antioxidantes que ajudam a combater
            infecções e manter o organismo saudável.
          </p>
          <h2 className={Classes.h2Imuni}>
            Dicas para Fortalecer sua Imunidade:
          </h2>
          <div className="w-2/3 pb-5">
            <li className={Classes.li}>
              Inclua alimentos ricos em vitamina C: Frutas como laranja, limão,
              kiwi e acerola são potentes reforços para o sistema imunológico. A
              vitamina C é conhecida por aumentar a produção de glóbulos
              brancos, responsáveis por combater infecções.
            </li>
            <li className={Classes.li}>
              Adicione alimentos com zinco: O zinco ajuda a regular o sistema
              imunológico. Alimentos como sementes de abóbora, grão-de-bico e
              castanhas são ótimas fontes desse mineral.
            </li>
            <li className={Classes.li}>
              Consuma fontes de vitamina D: Peixes como salmão, sardinha e atum,
              além de cogumelos e ovos, são excelentes fontes de vitamina D, que
              desempenha um papel crucial na modulação da resposta imune.
            </li>
            <li className={Classes.li}>
              Use temperos naturais: Alho, gengibre e cúrcuma são ótimos
              anti-inflamatórios e antimicrobianos naturais. Adicioná-los às
              suas refeições diárias pode contribuir para a saúde imunológica.
            </li>
            <li className={Classes.li}>
              Hidrate-se bem: A água é essencial para o bom funcionamento do
              organismo. Ela ajuda a transportar nutrientes e a eliminar
              toxinas, mantendo o corpo forte e saudável.
            </li>
          </div>
          <h2 className={Classes.h2Imuni}>
            Orientações para Melhorar sua Imunidade:
          </h2>
          <p className="text-gray-700">
            Além de manter uma alimentação equilibrada, rica em vitaminas e
            nutrientes, é importante adotar outros hábitos saudáveis para
            fortalecer a imunidade. Ter uma alimentação colorida, por exemplo,
            garante a ingestão de uma variedade de nutrientes essenciais para o
            funcionamento do organismo. Praticar atividades físicas regularmente
            também é fundamental, já que o exercício moderado contribui para a
            boa saúde do sistema imunológico. Outro ponto importante é dormir
            bem: o sono adequado permite que o corpo se regenere, fortalecendo
            as defesas naturais.
            <br />
            Cuidar da saúde mental também é essencial para manter a imunidade
            alta. Reduzir o estresse, seja através de práticas como meditação,
            yoga ou até caminhadas ao ar livre, ajuda a manter o corpo e a mente
            em equilíbrio, o que é fundamental para o bom funcionamento do
            sistema imunológico. Em resumo, um estilo de vida saudável, com bons
            hábitos alimentares, descanso adequado, atividade física e controle
            do estresse, é a melhor maneira de manter o corpo protegido contra
            doenças.
          </p>
        </div>
        <div>
          <img
            src={health}
            alt="Bowl de salada"
            className="w-3/4 rounded-xl brightness-75"
          />
        </div>
      </div>
    </div>
  );
};

export default ImunidadeAlimentos;
