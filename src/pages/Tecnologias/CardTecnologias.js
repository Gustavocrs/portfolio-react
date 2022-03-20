import styles from '../Tecnologias/Tecnologias.module.css';

export default function cardTecnologias(props) {
  return (
    <div className={styles.divImgTecnologias}>
      <img
        className={styles.imagensTecnologias}
        src={props.src}
        alt={props.alt}
      />
      <p className={styles.nomeTecnologias}>{props.nomeTec}</p>
    </div>
  );
}
