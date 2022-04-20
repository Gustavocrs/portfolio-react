import './Tecnologias.css';

export default function cardTecnologias(props) {
  return (
    <div className="divImgTecnologias">
      <img
        className="imagensTecnologias"
        src={props.src}
        alt={props.alt}
      />
      <p className="nomeTecnologias">{props.nomeTec}</p>
    </div>
  );
}
