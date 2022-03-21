import { useState } from "react";
import styles from "../Certificados/Certificados.module.css";
import CardCertificados from "./CardCertificados";

export default function Certificados() {

  return (
    <section className={styles.divCertificados} id="certificados">
      <p className={styles.tituloCertificados}>Certificados</p>
      <div className={styles.certificadosItem}>

        {/* {lista.curso.map(x=>(
          <CardCertificados name={x}/>
        ))} */}

        {/* <CardCertificados
          href={dbListaCertificados.endereco[1]}
          name={dbListaCertificados.curso[1]}
        />
        <CardCertificados
          href={dbListaCertificados.endereco[2]}
          name={dbListaCertificados.curso[2]}
        />
        <CardCertificados
          href={dbListaCertificados.endereco[3]}
          name={dbListaCertificados.curso[3]}
        />
        <CardCertificados
          href={dbListaCertificados.endereco[4]}
          name={dbListaCertificados.curso[4]}
        />
        <CardCertificados
          href={dbListaCertificados.endereco[5]}
          name={dbListaCertificados.curso[5]}
        />
        <CardCertificados
          href={dbListaCertificados.endereco[6]}
          name={dbListaCertificados.curso[6]}
        />
        <CardCertificados
          href={dbListaCertificados.endereco[7]}
          name={dbListaCertificados.curso[7]}
        />
        <CardCertificados
          href={dbListaCertificados.endereco[8]}
          name={dbListaCertificados.curso[8]}
        />
        <CardCertificados
          href={dbListaCertificados.endereco[9]}
          name={dbListaCertificados.curso[9]}
        />
        <CardCertificados
          href={dbListaCertificados.endereco[10]}
          name={dbListaCertificados.curso[10]}
        />
        <CardCertificados
          href={dbListaCertificados.endereco[11]}
          name={dbListaCertificados.curso[11]}
        />
        <CardCertificados
          href={dbListaCertificados.endereco[12]}
          name={dbListaCertificados.curso[12]}
        />
        <CardCertificados
          href={dbListaCertificados.endereco[13]}
          name={dbListaCertificados.curso[13]}
        />
        <CardCertificados
          href={dbListaCertificados.endereco[14]}
          name={dbListaCertificados.curso[14]}
        />
        <CardCertificados
          href={dbListaCertificados.endereco[15]}
          name={dbListaCertificados.curso[15]}
        />
        <CardCertificados
          href={dbListaCertificados.endereco[16]}
          name={dbListaCertificados.curso[16]}
        />
        <CardCertificados
          href={dbListaCertificados.endereco[17]}
          name={dbListaCertificados.curso[17]}
        />
        <CardCertificados
          href={dbListaCertificados.endereco[18]}
          name={dbListaCertificados.curso[18]}
        />
        <CardCertificados
          href={dbListaCertificados.endereco[19]}
          name={dbListaCertificados.curso[19]}
        /> */}
      </div>
    </section>
  );
}
