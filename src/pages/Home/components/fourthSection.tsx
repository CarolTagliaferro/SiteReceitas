import React from "react";

const FourthSection = () => {
  return (
    <div className="my-10 flex justify-center items-center">
      <div className="bg-bgDark w-3/4 h-auto rounded-3xl px-16 py-10 flex items-center justify-between">
        <div>
          <h1 className="text-bgWhite text-3xl font-semibold">
            Se inscreva para novidades!
          </h1>
          <p className="text-bgWhite font-light pt-10">
            Se inscreva no nosso canal para receber dicas <br /> e novidades
            sobre nosso site.
          </p>
        </div>
        <div className="">
          <form>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              required
              className="rounded-lg w-96 h-12 px-3 outline-none"
            />
            <button
              type="submit"
              className="rounded-lg bg-bgLight py-3 px-6 text-bgWhite ml-1 hover:shadow-lg"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
