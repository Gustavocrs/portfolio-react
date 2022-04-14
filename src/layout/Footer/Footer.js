import './Footer.css'
import { BsLinkedin, BsGithub, BsWhatsapp, BsFillTelephoneForwardFill } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="divRodape">
       <div>
        <p className="rodape">Entre em contato</p>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/gustavocrsilva/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin className="iconContato" />
        </a>
        <a
          href="https://github.com/Gustavocrs"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub className="iconContato" />
        </a>
        <a href="mailto:gustavocrsilva.ti@gmail.com" rel="noreferrer">
          <FiMail className="iconContato" />
        </a>
        <a
        href="tel:21987384859" rel="noreferrer"/>
          <BsFillTelephoneForwardFill className="iconContato"/>
        </a>
       <a
        href="https://api.whatsapp.com/send/?phone=5521987384859&text&app_absent=0" rel="noreferrer"/>
          <BsWhatsapp className="iconContato"/>
       </a>    
      </div>
      <div>
        <p className="rodape">Copyright © - Gustavo Silva - Dev Front-end</p>
      </div>
    </footer>
  )
}
