import logo from "../images/logo.png";
import profile from "../images/profile.png";
import { Classes } from "../utils/tailwindPredefs";

const Header: React.FC = () => {
  return (
    <header className="bg-bgDark">
      <nav className="flex items-center justify-between py-2 px-6">
        <div className="flex items-center">
          <img className="" src={logo} alt="Logo da página" />
        </div>
        <div className="hidden md:flex flex-grow justify-center font-medium">
          <ul className="flex space-x-20 text-lg text-bgWhite">
            <li className={Classes.hoverMenu}>Home</li>
            <li className={Classes.hoverMenu}>Doces</li>
            <li className={Classes.hoverMenu}>Salgados</li>
            <li className={Classes.hoverMenu}>Fit</li>
            <li className={Classes.hoverMenu}>Sobre nós</li>
          </ul>
        </div>
        <div>
          <img className="w-7" src={profile} alt="Icone de perfil" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
