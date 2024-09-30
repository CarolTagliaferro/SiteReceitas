import React from "react";
import logo from "../images/logo.png";
import { FaInstagram } from "react-icons/fa";
import { AiFillTikTok, AiFillFacebook } from "react-icons/ai";
import { Classes } from "../utils/tailwindPredefs";

const Footer = () => {
  return (
    <footer className="bg-bgLight py-3">
      <div className="flex flex-col justify-center items-center text-center px-6">
        <div>
          <img className="" src={logo} alt="Logo da página" />
        </div>
        <h1 className="text-bgWhite font-medium text-xl pt-2">
          Siga nossas redes sociais:
        </h1>
        <div className="flex gap-4 pt-3">
          <a href="https://www.facebook.com/" target="blank">
            <AiFillFacebook className={Classes.iconClass} />
          </a>
          <a href="https://www.instagram.com/" target="blank">
            <FaInstagram className={Classes.iconClass} />
          </a>
          <a href="https://www.tiktok.com/" target="blank">
            <AiFillTikTok className={Classes.iconClass} />
          </a>
        </div>
      </div>
      <div className="border-t border-title mt-2">
        <p className="pt-3 text-center font-light text-bgWhite">
          Copyright ©2024. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
