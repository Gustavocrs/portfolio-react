import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sobre from "./pages/Sobre";
import Tecnologias from "./pages/Tecnologias";
import Projetos from "./pages/Projetos";
import Certificados from "./pages/Certificados";
import FaleConosco from "./pages/FaleConosco";

export default function Rotas() {
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Sobre />} />
      <Route path="/pages/tecnologias" element={<Tecnologias />} />
      <Route path="/pages/certificados" element={<Certificados />} />
      <Route path="/pages/projetos" element={<Projetos />} />
      <Route path="/pages/faleconosco" element={<FaleConosco />} />
    </Routes>
  </BrowserRouter>;
}
