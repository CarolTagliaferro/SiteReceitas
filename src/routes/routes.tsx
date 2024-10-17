import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/home";
import Receitas from "../pages/Receitas/receitas";
import RecipeDetails from "../components/recipeDetails";
import SobreNos from "../pages/Sobre nós/sobreNos";
import Dicas from "../pages/Dicas/dicas";
import KidsRecipes from "../components/kidsRecipes";
import ImunidadeAlimentos from "../components/imunidadeAlimentos";
import Utensilios from "../pages/Dicas/components/utensilios";
import Truques from "../pages/Dicas/components/truques";
import Limpeza from "../pages/Dicas/components/limpeza";
import RendaExtra from "../pages/Dicas/components/rendaExtra";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/receitas" element={<Receitas />} />
      <Route path="/dicas" element={<Dicas />} />
      <Route path="/us" element={<SobreNos />} />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
      <Route path="/kids" element={<KidsRecipes />} />
      <Route path="/imuni" element={<ImunidadeAlimentos />} />
      <Route path="/utensilios" element={<Utensilios />} />
      <Route path="/truques" element={<Truques />} />
      <Route path="/limpeza" element={<Limpeza />} />
      <Route path="/renda" element={<RendaExtra />} />
    </Routes>
  );
}

export default Router;
