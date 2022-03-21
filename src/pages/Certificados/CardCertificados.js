import "./Certificados.css";

export default function CardCertificados(props) {
  return (
    <a
      className="linkCertificados"
      href={props.href}
      target="_blank"
      rel="noreferrer"
    >
      <p className="listaCertificados">{props.name}</p>
    </a>
  );
}
