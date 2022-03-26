import Imggithub from "../../img/github.png";
import Imgpreview from "../../img/preview.png";

export default function CardProjetos(props) {
  return (
    <section>
      <div className="divCards">
        <div className="divFrente">
          <h3 className="tituloItem">{props.titulo}</h3>
          <p className="data">{props.data}</p>
          <img className="imagem" src={props.imagem} alt="Teste"/>
          </div>
        <div className="divVerso">
          <h4 className="tituloItem">Descrição</h4>
          <p className="infos">{props.descricao}</p>
          <div className="divLogos">
            <img src={Imgpreview} className="logos" alt="Teste" />
            <img src={Imggithub} className="logos" alt="Teste" />
          </div>
          <div className="divMiniImg">
            <h4 className="tituloItem">Tecnologias</h4>
            <img src={props.srclogo} className="miniImg" alt="Teste" />
          </div>
        </div>
      </div>
    </section>
  );
}
