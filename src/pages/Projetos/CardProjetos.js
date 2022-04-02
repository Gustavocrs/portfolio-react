import './Projetos.css'

export default function CardProjetos({itens}) {
  return (
    <>
      {itens.map((item, index) => (
        <div key={index}>
          <div className="divCards">
            <div className="card">
              <img src={item.imagem} className="card-img-top" alt="Logo HTML" />
              <div className="card-body">
                <h5 className="card-title">{item.nome}</h5>
                <p className="card-text">{item.descricao}</p>
                <div className="divBtn">
                  <a href={item.link_github} className="botao" target="_blank">
                    Github
                  </a>
                  <a href={item.link_deploy} className="botao" target="_blank">
                    Projeto
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
