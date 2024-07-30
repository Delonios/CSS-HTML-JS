Trilha CSS+HTML+js

AULA 1

HTML
- Hypertext
- Markup
- tags, elementos 
- Language 

JS.
// arrow function 

const NomeDafunção = () => {}

exemplo.

// Object

Const atividade = {
  nome: "Almoço",
  data: new Date("2024-07-08 10:00"),
  finalizada: true
}

// arrow funcion

cont criarItemDeAtividade = (atividade) => {
  let input = '<input type="checkbox" '

  if(atividade.finalizada) {
    input = input + 'checked'

  }
  input = input + '>'

  return `
  <div>
    ${input}
    <span>${atividade.nome}</span>
    <time>${atividade.data}</time>
    </div>`
}


// lista, array, vetor []

const atividades = [
  atividades,
  {
    nome: 'academia'
    data: new Data("2024-07-09 12:00"),
    finalizada: false
  },
]

estrutura de repetição


