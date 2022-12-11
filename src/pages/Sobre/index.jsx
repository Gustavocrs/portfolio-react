import './Sobre.css'
import FotoPerfil from '../../img/Eu.jpg'

export default function Sobre() {
  return (
    <section className="divSobre" id="sobremim">
      <img className="fotoPerfil" src={FotoPerfil} alt="Foto de perfil" />

      <div>
        <h1 className="tituloSobre">Um pouco sobre mim...</h1>

        <p className="textoSobre">
          Olá! Me chamo Gustavo Silva, sou formado em Análise e Desenvolvimento
          de Sistemas, com ênfase em Desenvolvimento Front-end. 
          Trabalho com:</p>
          <p className='textoSobre'><mark>Front-end:</mark> React, Styled-Components, Hooks, Routes, Axios, JavaScript, HTML5, CSS3, Bootstrap, Flexbox, Grid e Sass.</p>
          <p className='textoSobre'><mark>Outros conhecimentos:</mark> Figma, SQL, Postgres e Oracle; Git e GitHub. </p>
          <p className='textoSobre'>Busco diariamente aperfeiçoar meus conhecimentos, seja com
          pesquisas ou cursos de especialização, como pode ser visto na seção de Certificados. 
          Atualmente sou gestor em uma empresa do ramo de Metrologia, onde atuo desde 2008, passando 
          por todos os cargos administrativos até o atual, respondendo diretamente a direção.
        </p>

        <p className="textoSobre">
          Considero-me dinâmico e tenho bastante facilidade em aprender, 
          possuo boa capacidade de abstração, o que me ajuda a traduzir a necessidade
          do cliente em código.
        </p>
      </div>
    </section>
  )
}
