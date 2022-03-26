import Logohtml from "../../img/html.png";
import Tipcalculator from "../../img/tip-calculator-app.jpg";
import Logocss from "../../img/css.png";
import Logojs from "../../img/js.png";
// import Logosass from "../../img/sass.png";
// import Logobootstrap from "../../img/bootstrap.png";
// import Logoreact from "../../img/react3.svg";

import CardProjetos from "./CardProjetos";

import "./Projetos.css";

export default function Projetos() {
  return (
    <section className="divProjetos" id="projetos">
      <h2 className="titulo">Projetos Realizados</h2>
      <div
        id="carouselExampleControls"
        className="carousel"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            {
              <CardProjetos
                className="d-block"
                srclogo={Logohtml}
                descricao="Calculadora de gorgeta, projeto Tip-calculator-app do site Frontend Mentor."
                titulo="TIP CALCULATOR"
                data="11/2021"
                imagem={Tipcalculator}
              />
            }
          </div>
          <div className="carousel-item">
            {<CardProjetos className="d-block" srclogo={Logocss} />}
          </div>
          <div className="carousel-item">
            {<CardProjetos className="d-block" srclogo={Logojs} />}
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon cor"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon cor"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}
