export default function cursos(request, response){
  const listaCursos = [
    "Teste1", "Teste2"
  ]

  response.json({
    nomeCurso: listaCursos
  })
}