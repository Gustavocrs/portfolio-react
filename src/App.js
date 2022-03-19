import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './estilo/App.css'
import Sobre from "./pages/Sobre";
import Tecnologias from "./pages/Tecnologias";
import Projetos from "./pages/Projetos";
import Certificados from "./pages/Certificados";
import FaleConosco from "./pages/FaleConosco";

import Navbar from "./layout/Navbar";

function App() {
  return (
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route exact path="/" element={<Sobre/>} />
        <Route path="/tecnologias" element={<Tecnologias/>} />
        <Route path="/projetos" element={<Projetos/>} />
        <Route path="/certificados" element={<Certificados/>} />
        <Route path="/faleconosco" element={<FaleConosco/>} />
      </Routes>
      {/* Footer */}
    </BrowserRouter>
  );
}

export default App;
