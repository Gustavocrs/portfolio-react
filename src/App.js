import React from "react";
import 'bootstrap';
import "./App.css";
import Sobre from "./pages/Sobre";
import Tecnologias from "./pages/Tecnologias";
import Projetos from "./pages/Projetos";
import Certificados from "./pages/Certificados";
import FaleConosco from "./pages/FaleConosco";

import Navbar from "./layout/Navbar/Navbar";
import Footer from "./layout/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Sobre />
      <Tecnologias />
      <Certificados />
      <Projetos />
      {/* <FaleConosco /> */}
      <Footer/>
    </>
  );
}

export default App;
