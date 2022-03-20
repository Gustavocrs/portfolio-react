import styles from './falecomigo.module.css'

import Logolinkedin from '../../img/linkedin.png'
import Logogithub from '../../img/github.png'

export default function FaleConosco() {
  return (
    <section className={styles.divFaleComigo} id="falecomigo">
      <p className={styles.tituloFalecomigo}>Vamos bater um papo?!</p>
      <div className={styles.divContato}>
        <div className={styles.divContatoItens}>
          <p className={styles.tituloContato}>
            Que tal me enviar uma mensagem?
          </p>
          <form
            className={styles.divContatoItens}
            method="post"
            action="https://formsubmit.co/6b6a117405788d60e6e9f5e7fd379e48"
          >
            <input
              className={styles.inputContato}
              id="name"
              type="text"
              placeholder="Nome"
              name="name"
              required
            />
            <input
              className={styles.inputContato}
              id="email"
              type="email"
              placeholder="seuemail@dominio.com.br"
              name="email"
              required
            />
            <textarea
              className={styles.inputContatoText}
              id="message"
              placeholder="Mensagem"
              name="message"
              required
            ></textarea>
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="false" />
            <input type="hidden" name="_template" value="table" />
            <div>
            
              <button className={styles.btn} type="submit">
                Enviar
              </button>
            </div>
          </form>
        </div>
        <div className={styles.divPerfisSociais}>
          <div className={styles.divPerfisSociaisItens}>
            <p className={styles.faleComigo, styles.perfisSociaisItens}>Gustavo Silva</p>
            <p className={styles.faleComigo, styles.perfisSociaisItens}>
              Desenvolvedor Front-end Júnior
            </p>
            <p className={styles.faleComigo, styles.perfisSociaisItens}>
              gustavocrsilva.ti@gmail.com
            </p>
          </div>
          <div className={styles.iconesPerfisSociais}>
            <a
              href="https://www.linkedin.com/in/gustavocrsilva/"
              target="_blank"
              rel='noreferrer'
            >
              <img
                className={styles.imagemSociais}
                src={Logolinkedin}
                alt="Link para o meu Linkedin"
              />
            </a>
            <a href="https://github.com/Gustavocrs" target="_blank" rel='noreferrer'>
              <img
                className={styles.imagemSociais}
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
