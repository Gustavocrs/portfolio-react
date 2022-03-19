import { Link } from "react-router-dom";
import styles from "../estilo/Navbar.module.css";
import Container from "./Container";
import '../estilo/App.css'

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/"> Sobre </Link>
          </li>
          <li className={styles.item}>
            <Link to="/Tecnologias"> Tecnologias </Link>
          </li>
          <li className={styles.item}>
            <Link to="/Projetos"> Projetos </Link>
          </li>
          <li className={styles.item}>
            <Link to="/Certificados"> Certificados </Link>
          </li>
          <li className={styles.item}>
            <Link to="/FaleConosco"> Fale Conosco </Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}
export default Navbar;
