import "./Certificados.css";
import CardCertificados from "./CardCertificados";
import dbListaCertificados from "./dbListaCertificados.json"

export default function Certificados() {

  const index = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]

  return (
    <section className="divCertificados" id="certificados">
      <p className="tituloCertificados">Certificados</p>
      <div className="certificadosItem">

        {index.map(x=>(
          <CardCertificados 
          key={x}
          name={dbListaCertificados.curso[x]}
          href={dbListaCertificados.endereco[x]}
          />
        ))}

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
