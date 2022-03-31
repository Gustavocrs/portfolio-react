import Imggithub from "../../img/github.png";
import Imgpreview from "../../img/preview.png";
import Logohtml from '../../img/html.png'
import 'bootstrap'
import './Projetos.css'

export default function CardProjetos(props) {
  return (

    <section className="secPrincipal">
      <div>
        <h2 className="tituloProjetos" id="projetos">Projetos</h2>
      </div>
      <div>
        <div className="divCards">
          <div className="card">
            <img
              src={Logohtml}
              className="card-img-top"
              alt="Logo HTML"
            />
            <div className="card-body">
              <h5 className="card-title tituloCard">Nome do Projeto</h5>
              <p className="card-text">
               Breve descrição do projeto
              </p>
              <div className="center">
                <a href="#" className="btn">
                  Github
                </a>
                <a href="#" className="btn">
                  Projeto
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
