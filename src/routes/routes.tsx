import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/home";
import ReceitasDoces from "../pages/Receitas Doces/receitasDoces";
import ReceitasSalgadas from "../pages/Receitas Salgadas/receitasSalgadas";
import ReceitasFit from "../pages/Receitas Fit/receitasFit";
import RecipeDetails from "../components/recipeDetails";
import SobreNos from "../pages/Sobre nós/sobreNos";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/doces" element={<ReceitasDoces />} />
      <Route path="/salgadas" element={<ReceitasSalgadas />} />
      <Route path="/fit" element={<ReceitasFit />} />
      <Route path="/us" element={<SobreNos />} />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
    </Routes>
  );
}

export default Router;
