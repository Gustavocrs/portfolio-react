import styles from "../Navbar/Navbar.module.css";

import "../../App.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
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
    </nav>
  );
}
export default Navbar;
