import './Certificados.css'
import CardCertificados from './CardCertificados'
// import dbListaCertificados from "./dbListaCertificados.json"

export default function Certificados() {
  
  const lista = [
    {
      id: 1,
      curso: "React - Ciclo de vida dos componentes",
      endereco: "https://cursos.alura.com.br/certificate/91076841-5823-45b0-9b02-a1b79dc00fd0",
    },
    {
      id: 2,
      curso: "React - Entendendo como a biblioteca funciona",
      endereco: "https://cursos.alura.com.br/certificate/7f289932-3236-4889-9bd4-2326ef28fd50",
    },
    {
      id: 3,
      curso: "Mobile First - Layouts Responsivos",
      endereco: "https://cursos.alura.com.br/certificate/58ea8679-f628-49f4-8295-4dc110d57d06",
    },
    {
      id: 4,
      curso: "Expressões Regulares - Capturando textos de forma mágica",
      endereco: "https://cursos.alura.com.br/certificate/4322d2d4-ab62-4876-9fbb-1a6a4b0a83c7",
    },
    {
      id: 5,
      curso: "JavaScript - Interfaces e herança em orientação a objetos",
      endereco: "https://cursos.alura.com.br/certificate/5f1076e7-88b4-4491-b1a5-701bf0ccd6b9",
    },
    {
      id: 6,
      curso: "JavaScript - Programando a orientação a objetos",
      endereco: "https://cursos.alura.com.br/certificate/c6ab958e-4bc0-4aad-92c5-60fe90cbb759",
    },
    {
      id: 7,
      curso: "JavaScript - Primeiros passos com a linguagem",
      endereco: "https://cursos.alura.com.br/certificate/b4ecd338-e736-4df9-a3cb-a9c8a08f955f",
    },
    {
      id: 8,
      curso: "JavaScript - Programando na linguagem da web",
      endereco: "https://cursos.alura.com.br/certificate/af4ea9f6-6e3b-4bb4-a618-4ac9cf402690",
    },
    {
      id: 9,
      curso: "JavaScript - Criando páginas dinâmicas",
      endereco: "https://cursos.alura.com.br/certificate/db0edfcc-ee32-4ce6-8e71-f357740f03a0",
    },
    {
      id: 10,
      curso: "Bootstrap 4 - Criando uma landing page responsiva",
      endereco: "https://cursos.alura.com.br/certificate/2daedd00-ea32-42b4-8370-9dd5889991f5",
    },
    {
      id: 11,
      curso: "CSS GRID - Simplificando Layouts",
      endereco: "https://cursos.alura.com.br/certificate/c761dc22-5fbb-4491-badf-95edcca2423d",
    },
    {
      id: 12,
      curso: "Flexbox - Posicione elementos na tela",
      endereco: "https://cursos.alura.com.br/certificate/a165c79b-f7bd-4dcb-b9d3-2e4aa20095b5",
    },
    {
      id: 13,
      curso: "Sass e Compass - Descomplicando o CSS",
      endereco: "https://cursos.alura.com.br/certificate/a720cefb-4b8b-4d11-b370-eb975e86f29a",
    },
    {
      id: 14,
      curso: "Acessibilidade web",
      endereco: "https://cursos.alura.com.br/degree/certificate/559875dc-6475-4b5b-9af5-f3418ae6ebb2",
    },
    {
      id: 15,
      curso: "HTML5 e CSS",
      endereco: "https://cursos.alura.com.br/certificate/849b9406-8404-4fbb-9abb-d8cd1b067d42",
    },
   {
      id: 16,
      curso: "Engenharia de Requisitos - da demanda ao gerenciamento",
      endereco: "https://cursos.alura.com.br/certificate/15f552bb-0c45-403c-a79e-7c1f049678ed",
    },
   {
      id: 17,
      curso: "Engenharia de Requisitos - Como Levantar, Documentar e Validar",
      endereco: "https://cursos.alura.com.br/certificate/760a8349-cdde-4d63-814f-6d54ac19e304",
    },
   {
      id: 18,
      curso: "Scrum - Agilidade em seu projeto",
      endereco: "https://cursos.alura.com.br/certificate/57c85635-a63f-4cca-a0f6-b5a431201945",
    },
   {
      id: 19,
      curso: "Programação Orientada a Objetos",
      endereco: "/img/F_Bradesco_IPOO.pdf",
    }
  ]
  
  return (
    <section className="divCertificados" id="certificados">
      <p className="tituloCertificados">Certificados</p>
      <div className="certificadosItem">
        <CardCertificados itens={lista} />
      </div>
    </section>
  )
}
