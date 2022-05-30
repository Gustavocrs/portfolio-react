import "./Tecnologias.css";

import Logohtml from "../../img/tecs/html.png";
import Logocss from "../../img/tecs/css.png";
import Logosass from "../../img/tecs/sass.png";
import Logobootstrap from "../../img/tecs/bootstrap.png";
import Logojs from "../../img/tecs/js.png";
import Logoreact from "../../img/tecs/react3.svg";
import Logostyled from "../../img/tecs/styled.png";

import CardTecnologias from "./CardTecnologias";

export default function Tecnologias() {
  return (
    <section className="divTecnologias" id="tecnologias">
      <p className="tituloTecnologias">Tecnologias Conhecidas</p>
      <div className="tecnologiasItem">
        <CardTecnologias src={Logohtml} alt="Logo HTML5" nomeTec="HTML 5" />
        <CardTecnologias src={Logocss} alt="Logo CSS3" nomeTec="CSS 3" />
        <CardTecnologias src={Logojs} alt="Logo Javascript" nomeTec="Javascript" />
        <CardTecnologias src={Logosass} alt="Logo SASS" nomeTec="SASS" />
        <CardTecnologias src={Logobootstrap} alt="Logo Bootstrap" nomeTec="Bootstrap" />
        <CardTecnologias src={Logoreact} alt="Logo React" nomeTec="React" />
        <CardTecnologias src={Logostyled} alt="Logo React" nomeTec="Styled Components" />
      </div>
    </section>
  );
}
