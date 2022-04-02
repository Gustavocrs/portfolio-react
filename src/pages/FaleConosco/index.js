import './falecomigo.css'

import Logolinkedin from '../../img/sociais/linkedin.png'
import Logogithub from '../../img/sociais/github.png'

export default function FaleConosco() {
  return (
    <section className="divFaleComigo" id="falecomigo">
      <p className="tituloFalecomigo">Vamos bater um papo?!</p>
      <div className="divContato">
        <div className="divContatoItens">
          <p className="tituloContato">
            Que tal me enviar uma mensagem?
          </p>
          <form
            className="divContatoItens"
            method="post"
            action="https://formsubmit.co/6b6a117405788d60e6e9f5e7fd379e48"
          >
            <input
              className="inputContato"
              id="name"
              type="text"
              placeholder="Nome"
              name="name"
              required
            />
            <input
              className="inputContato"
              id="email"
              type="email"
              placeholder="seuemail@dominio.com.br"
              name="email"
              required
            />
            <textarea
              className="inputContatoText"
              id="message"
              placeholder="Mensagem"
              name="message"
              required
            ></textarea>
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="false" />
            <input type="hidden" name="_template" value="table" />
            <div>
            
              <button className="btn" type="submit">
                Enviar
              </button>
            </div>
          </form>
        </div>
        <div className="divPerfisSociais">
          <div className="divPerfisSociaisItens">
            <p className="tituloContato">Gustavo Silva</p>
            <p className="tituloContato">
              Desenvolvedor Front-end Júnior
            </p>
            <p className="tituloContato">
              gustavocrsilva.ti@gmail.com
            </p>
          </div>
          <div className="iconesPerfisSociais">
            <a
              href="https://www.linkedin.com/in/gustavocrsilva/"
              target="_blank"
              rel='noreferrer'
            >
              <img
                className="imagemSociais"
                src={Logolinkedin}
                alt="Link para o meu Linkedin"
              />
            </a>
            <a href="https://github.com/Gustavocrs" target="_blank" rel='noreferrer'>
              <img
                className="imagemSociais"
                src={Logogithub}
                alt="Link para o meu Github"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
