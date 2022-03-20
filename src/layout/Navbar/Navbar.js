import styles from "../Navbar/Navbar.module.css";
import Container from "../Container/Container";
import "../../App.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a href="#sobremim"> Sobre mim</a>
          </li>
          <li className={styles.item}>
            <a href="#tecnologias"> Tecnologias </a>
          </li>
          <li className={styles.item}>
            <a href="#certificados"> Certificados </a>
          </li>
          <li className={styles.item}>
            <a href="#projetos"> Projetos </a>
          </li>
          <li className={styles.item}>
            <a href="#falecomigo"> Fale Conosco </a>
          </li>
        </ul>
      </Container>
    </nav>
  );
}
export default Navbar;
