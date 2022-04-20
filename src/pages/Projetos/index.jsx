import './Projetos.css'
import CardProjetos from './CardProjetos'

import React_Weather from '../../img/projetos/React_Weather_desktop.png'
import Webchat_React_Login from '../../img/projetos/Webchat_React_login_desktop.jpg'
import Tip_Calc from '../../img/projetos/tip_calculator.jpg'
import Huddle_Land_Page from '../../img/projetos/huddle-landing-page.jpg'
import Login_Cadastro from '../../img/projetos/lekas.jpg'
import Testimonials_Grid from '../../img/projetos/testimonials-grid.jpg'
import Single_Price_Grid from '../../img/projetos/single-price-grid.jpg'
import Column_Preview_Card from '../../img/projetos/column-preview-card.jpg'

export default function Projetos() {
  const projetos = [
    {
      imagem: React_Weather,
      nome: 'REACT WEATHER',
      descricao:
        'App de previsão de tempo, utilizando Axios para requisição de API externa, useState, useEffect e Geolocation.',
      link_github: 'https://github.com/Gustavocrs/tempo',
      link_deploy: 'https://gustavocrs.github.io/tempo/',
    },
    {
      imagem: Tip_Calc,
      nome: 'TIP CALCULATOR APP',
      descricao:
        'Calculadora de gorgetas, baseado no projeto do site Frontend Mentor para divisão de conta entre grupos, com o valor calculada automaticamente.',
      link_github: 'https://github.com/Gustavocrs/tip-calculator-app',
      link_deploy: 'https://gustavocrs.github.io/tip-calculator-app/',
    },
    {
      imagem: Webchat_React_Login,
      nome: 'WEBCHAT REACT',
      descricao:
        'Projeto realizado durante a imersão react da Alura - Fev 2022.',
      link_github: 'https://github.com/Gustavocrs/webchat-react/',
      link_deploy: 'https://webchat-react.vercel.app/',
    },
    {
      imagem: Huddle_Land_Page,
      nome: 'HUDDLE LANDING PAGE',
      descricao:
        'Projeto realizado como treinamento, utilizando como base o site Frontend Mentor.',
      link_github: 'https://github.com/Gustavocrs/huddle-landing-page',
      link_deploy: 'https://gustavocrs.github.io/huddle-landing-page/',
    },
    {
      imagem: Login_Cadastro,
      nome: 'Login / Cadastro',
      descricao:
        'Tela de login e tela de cadastro, realizado para treinamento.',
      link_github: 'https://github.com/Gustavocrs/lekas/',
      link_deploy: 'https://gustavocrs.github.io/lekas/',
    },
    {
      imagem: Testimonials_Grid,
      nome: 'Testimonials Grid',
      descricao:
        'Projeto realizado como treinamento, utilizando como base o site Frontend Mentor.',
      link_github: 'https://github.com/Gustavocrs/testimonials-grid/',
      link_deploy: 'https://gustavocrs.github.io/testimonials-grid/',
    },
    {
      imagem: Single_Price_Grid,
      nome: 'Single Price Grid',
      descricao:
        'Projeto realizado como treinamento, utilizando como base o site Frontend Mentor.',
      link_github: 'https://github.com/Gustavocrs/single-price-grid',
      link_deploy: 'https://gustavocrs.github.io/single-price-grid/',
    },
    {
      imagem: Column_Preview_Card,
      nome: 'Column Preview Card',
      descricao:
        'Projeto realizado como treinamento, utilizando como base o site Frontend Mentor.',
      link_github: 'https://github.com/Gustavocrs/column-preview-card',
      link_deploy: 'https://gustavocrs.github.io/column-preview-card/',
    },
  ]

  return (
    <section className="secPrincipal">
      <div>
        <h2 className="tituloProjetos" id="projetos">
          Projetos
        </h2>
      </div>
      <div className='divCardProjetos'>
        <CardProjetos itens={projetos} />
      </div>
    </section>
  )
}
