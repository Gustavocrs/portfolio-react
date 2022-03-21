import styles from "../Certificados/Certificados.module.css";

export default function CardCertificados(props) {
  return (
    <a
      className={styles.linkCertificados}
      href={props.href}
      target="_blank"
      rel="noreferrer"
    >
      <p className={styles.listaCertificados}>{props.name}</p>
    </a>
  );
}
