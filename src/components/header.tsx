import { NavLink } from "react-router-dom";
import { Classes } from "../utils/tailwindPredefs";
import { PiChefHatLight } from "react-icons/pi";
import { PiUserCircleLight } from "react-icons/pi";

const Header: React.FC = () => {
  return (
    <header className="bg-bgDark z-20">
      <nav className="flex items-center justify-between py-2 px-6 ">
        <div className="flex items-center">
          <NavLink to="/">
            <PiChefHatLight className="text-5xl text-bgWhite hover:text-title transition-all" />
          </NavLink>
        </div>
        <div className="hidden md:flex flex-grow justify-center font-medium">
          <ul className="flex space-x-20 text-lg text-bgWhite">
            <NavLink to="/">
              <li className={Classes.hoverMenu}>Home</li>
            </NavLink>
            <NavLink to="/receitas">
              <li className={Classes.hoverMenu}>Receitas</li>
            </NavLink>
            <NavLink to="/dicas">
              <li className={Classes.hoverMenu}>Dicas</li>
            </NavLink>
            <NavLink to="/us">
              <li className={Classes.hoverMenu}>Sobre nós</li>
            </NavLink>
          </ul>
        </div>
        <div>
          <PiUserCircleLight className="text-4xl text-bgWhite hover:text-title transition-all" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
