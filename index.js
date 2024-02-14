const perguntas = [
    {
      pergunta: "Qual é a função principal do JavaScript?",
      respostas: [
        "Manipulação de banco de dados;",
        "Estilização de páginas;",
        "Programação do lado do cliente;"
      ],
      correta: 2
    },
    {
      pergunta: "Como se declara uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "variable myVar;",
        "v myVar;"
      ],
      correta: 0
    },
    {
      pergunta: "O que é um array em JavaScript?",
      respostas: [
        "Uma função especial;",
        "Uma estrutura de controle de fluxo;",
        "Um tipo de dado que armazena uma coleção ordenada de elementos;"
      ],
      correta: 2
    },
    {
      pergunta: "Qual operador é utilizado para comparar igualdade em valor e tipo?",
      respostas: [
        "==",
        "===",
        "="
      ],
      correta: 1
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Document Object Model - uma especificação para bancos de dados;",
        "Data Object Model - uma biblioteca gráfica;",
        "Document Object Model - uma interface que representa a estrutura de um documento HTML/XML e permite interagir com ele;"
      ],
      correta: 2
    },
    {
      pergunta: "Como você adiciona um comentário de uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário;",
        "# Este é um comentário;",
        "/* Este é um comentário */"
      ],
      correta: 0
    },
    {
      pergunta: "O que é um loop em JavaScript?",
      respostas: [
        "Um comando para interromper a execução do programa;",
        "Uma estrutura de controle de repetição;",
        "Um tipo de dado que armazena vários valores;"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do operador '&&' em JavaScript?",
      respostas: [
        "Concatenar strings;",
        "Realizar uma operação lógica 'E' entre duas expressões;",
        "Atribuição de valores;"
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um tipo de dado que armazena uma coleção de elementos;",
        "Um operador de comparação;",
        "Um bloco de código reutilizável que realiza uma tarefa específica;"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a forma correta de escrever um comentário de várias linhas em JavaScript?",
      respostas: [
        "// Este é um comentário;",
        "# Este é um comentário;",
        "/* Este é um comentário */"
      ],
      correta: 2
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for(const item of perguntas) {
    const quizItem=template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange =(event) => {
        const estaCorreta = event.target.value == item.correta
        corretas.delete(item)
        if (estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
     quizItem.querySelector('dl dt').remove()
    quiz.appendChild(quizItem)
  
   
  }