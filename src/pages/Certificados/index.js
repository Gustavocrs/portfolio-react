import styles from "../Certificados/Certificados.module.css";

import CardCertificados from "../Certificados/CardCertificados";

import dbListaCertificados from "./dbListaCertificados.json";

export default function Certificados() {
  
  return (
    <section className={styles.divCertificados} id="certificados">
      <p className={styles.tituloCertificados}>Certificados</p>
      <div className={styles.certificadosItem}>
      <CardCertificados
        href={dbListaCertificados.endereco[1]}
        nome={dbListaCertificados.curso[1]}
      />
      <CardCertificados
        href={dbListaCertificados.endereco[2]}
        nome={dbListaCertificados.curso[2]}
      />
      <CardCertificados
        href={dbListaCertificados.endereco[3]}
        nome={dbListaCertificados.curso[3]}
      />
      <CardCertificados
        href={dbListaCertificados.endereco[4]}
        nome={dbListaCertificados.curso[4]}
      />
      <CardCertificados
        href={dbListaCertificados.endereco[5]}
        nome={dbListaCertificados.curso[5]}
      />
      <CardCertificados
        href={dbListaCertificados.endereco[6]}
        nome={dbListaCertificados.curso[6]}
      />
      <CardCertificados
        href={dbListaCertificados.endereco[7]}
        nome={dbListaCertificados.curso[7]}
      />
      <CardCertificados
        href={dbListaCertificados.endereco[8]}
        nome={dbListaCertificados.curso[8]}
      />
      <CardCertificados
        href={dbListaCertificados.endereco[9]}
        nome={dbListaCertificados.curso[9]}
      />
      <CardCertificados
        href={dbListaCertificados.endereco[10]}
        nome={dbListaCertificados.curso[10]}
      />
      <CardCertificados
        href={dbListaCertificados.endereco[11]}
        nome={dbListaCertificados.curso[11]}
      />
      <CardCertificados
        href={dbListaCertificados.endereco[12]}
        nome={dbListaCertificados.curso[12]}
      />
      <CardCertificados
        href={dbListaCertificados.endereco[13]}
        nome={dbListaCertificados.curso[13]}
      />
      <CardCertificados
        href={dbListaCertificados.endereco[14]}
        nome={dbListaCertificados.curso[14]}
      />
      <CardCertificados
        href={dbListaCertificados.endereco[15]}
        nome={dbListaCertificados.curso[15]}
      />
      <CardCertificados
        href={dbListaCertificados.endereco[16]}
        nome={dbListaCertificados.curso[16]}
      />
      <CardCertificados
        href={dbListaCertificados.endereco[17]}
        nome={dbListaCertificados.curso[17]}
      />
      <CardCertificados
        href={dbListaCertificados.endereco[18]}
        nome={dbListaCertificados.curso[18]}
      />
      <CardCertificados
        href={dbListaCertificados.endereco[19]}
        nome={dbListaCertificados.curso[19]}
      />
      </div>
    </section>
  );
}
