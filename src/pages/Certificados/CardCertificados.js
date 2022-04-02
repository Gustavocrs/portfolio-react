import './Certificados.css'

export default function CardCertificados({ itens }) {
  
  return (
    <>
    { 
      itens.map((item, index)=>(  
        <a
        className="linkCertificados"
        href={item.endereco}
        target="_blank"
        rel="noreferrer"
        key={index}
      >
        <p className="listaCertificados">{item.curso}</p>
      </a>
      ))
    }
    </>
  )
}
