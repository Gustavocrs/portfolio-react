import styles from "../Certificados/Certificados.module.css";

export default function CardCertificados(props) {
  return (
    <a className={styles.linkCertificados} href={props.href} target="_blank">
      <p className={styles.listaCertificados}>{props.nome}</p>
    </a>
  );
}
