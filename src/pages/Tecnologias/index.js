import styles from "./Tecnologias.module.css";

import Logohtml from "../../img/html.png";
import Logocss from "../../img/css.png";
import Logosass from "../../img/sass.png";
import Logobootstrap from "../../img/bootstrap.png";
import Logojs from "../../img/js.png";
import Logoreact from "../../img/react3.svg";

import CardTecnologias from "../Tecnologias/CardTecnologias";

export default function Tecnologias() {
  return (
    <section className={styles.divTecnologias} id="tecnologias">
      <p className={styles.tituloTecnologias}>Tecnologias Conhecidas</p>
      <div className={styles.tecnologiasItem}>
        <CardTecnologias src={Logohtml} alt="Logo HTML5" nomeTec="HTML 5" />
        <CardTecnologias src={Logocss} alt="Logo CSS3" nomeTec="CSS 3" />
        <CardTecnologias src={Logosass} alt="Logo SASS" nomeTec="SASS" />
        <CardTecnologias src={Logobootstrap} alt="Logo Bootstrap" nomeTec="Bootstrap" />
        <CardTecnologias src={Logojs} alt="Logo Javascript" nomeTec="Javascript" />
        <CardTecnologias src={Logoreact} alt="Logo React" nomeTec="React" />
      </div>
    </section>
  );
}
