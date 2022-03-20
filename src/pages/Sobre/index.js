import styles from './Sobre.module.css'
import FotoPerfil from '../../img/gustavo.jpeg'

export default function Sobre() {
  return (
    <section className={styles.divSobre} id="sobremim">
      <img
        className={styles.fotoPerfil}
        src={FotoPerfil}
        alt="Foto de perfil"
      />

      <div>
        <h1 className={styles.tituloSobre}>Um pouco sobre mim...</h1>

        <p className={styles.textoSobre}>
          Olá! Me chamo Gustavo Silva, sou Gerente Administrativo em uma empresa
          do ramo de Metrologia, atuo na mesma empresa desde 2008, passando por
          todos os cargos administrativos até o atual como gestor. Sou formado
          em Análise e Desenvolvimento de Sistemas, e busco diariamente
          aperfeiçoar meus conhecimentos, seja com pesquisas ou com cursos.
        </p>

        <p className={styles.textoSobre}>
          Atualmente, direciono meu tempo para a área de Front-end, com HTML5 /
          CSS3 / JavaScript / React. Possuo conhecimento em programação
          orientada a objetos, com foco de aprendizado em Java SE. Considero me
          bastante dinâmico e tenho bastante facilidade em aprender, possuo uma
          boa capacidade de abstração, o que me ajuda a traduzir a necessidade
          do cliente em código.
        </p>
      </div>
    </section>
  );
}
