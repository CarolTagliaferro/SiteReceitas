import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/home";
import Receitas from "../pages/Receitas/receitas";
import RecipeDetails from "../components/recipeDetails";
import SobreNos from "../pages/Sobre nós/sobreNos";
import Dicas from "../pages/Dicas/dicas";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/receitas" element={<Receitas />} />
      <Route path="/dicas" element={<Dicas />} />
      <Route path="/us" element={<SobreNos />} />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
    </Routes>
  );
}

export default Router;
