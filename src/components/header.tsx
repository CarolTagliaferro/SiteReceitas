import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import profile from "../images/profile.png";
import { Classes } from "../utils/tailwindPredefs";

const Header: React.FC = () => {
  return (
    <header className="bg-bgDark z-20">
      <nav className="flex items-center justify-between py-2 px-6 ">
        <div className="flex items-center">
          <NavLink to="/">
            <img className="" src={logo} alt="Logo da página" />
          </NavLink>
        </div>
        <div className="hidden md:flex flex-grow justify-center font-medium">
          <ul className="flex space-x-20 text-lg text-bgWhite">
            <NavLink to="/">
              <li className={Classes.hoverMenu}>Home</li>
            </NavLink>
            <NavLink to="/doces">
              <li className={Classes.hoverMenu}>Doces</li>
            </NavLink>
            <NavLink to="/salgadas">
              <li className={Classes.hoverMenu}>Salgados</li>
            </NavLink>
            <NavLink to="/fit">
              <li className={Classes.hoverMenu}>Fit</li>
            </NavLink>
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
