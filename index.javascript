  const perguntas = [
    {
      pergunta: "Qual é a sintaxe correta para se referir a um arquivo de script externo chamado 'script.js'?",
      respostas: [
        "<script src='script.js'>",
        "<script href='script.js'>",
        "<link rel='script' href='script.js'>",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método JavaScript é usado para remover espaços em branco do início e do fim de uma string?",
      respostas: [
        "strip()",
        "trim()",
        "removeWhitespace()",
      ],
      correta: 1
    },
    {
      pergunta: "Qual operador é usado para atribuição em JavaScript?",
      respostas: [
        "=>",
        "=",
        "==",
      ],
      correta: 1
    },
    {
      pergunta: "Qual função JavaScript é usada para imprimir algo no console?",
      respostas: [
        "console.print()",
        "print()",
        "console.log()",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função JavaScript que é usada para declarar uma variável?",
      respostas: [
        "var",
        "let",
        "declare",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a maneira correta de se escrever um comentário de uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "' Este é um comentário",
        "/* Este é um comentário */",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método JavaScript é usado para retornar o comprimento de uma string?",
      respostas: [
        "length()",
        "size()",
        "length",
      ],
      correta: 2
    },
    {
      pergunta: "Qual método JavaScript é usado para mudar o texto de um elemento HTML?",
      respostas: [
        "setText()",
        "innerHTML()",
        "textContent()",
      ],
      correta: 2
    },
    {
      pergunta: "Qual função JavaScript é usada para arredondar um número para o inteiro mais próximo?",
      respostas: [
        "round()",
        "floor()",
        "ceil()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método JavaScript é usado para converter uma string em um número inteiro?",
      respostas: [
        "parseInt()",
        "stringToInt()",
        "toInteger()",
      ],
      correta: 0
    }
  ];

  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')

  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

  //loop ou laço de repetição
  for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for(let resposta of item.respostas){
  const dt = quizItem.querySelector('dl  dt').cloneNode(true)
  dt.querySelector('span').textContent = resposta 
  dt.querySelector('input').setAttribute('name' , 'pergunta' + perguntas.indexOf(item))
  dt.querySelector('input').value = item.respostas.indexOf(resposta)

  dt.querySelector('input').onchange = (event) => {
    const estaCorreta = event.target.value == item.correta //true

    corretas.delete(item)
  if (estaCorreta) {
  corretas.add(item)
  }
  

mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  }




  quizItem.querySelector('dl').appendChild(dt)
  }

  //
  quizItem.querySelector('dl dt').remove()




  //Coloca comando na tela 
  quiz.appendChild(quizItem)
  } 


