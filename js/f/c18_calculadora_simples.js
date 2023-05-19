

/*
18. Leia dois valores e uma das seguintes operações a serem executadas (codificadas da seguinte forma: 1 –
Adição, 2 – Subtração, 3 – Multiplicação e 4 – Divisão). Calcule e escreva o resultado dessa operação
sobre os dois valores lidos.
*/

import { question } from "readline-sync"

function main() {
  // Entradas
  // const firstNumber = 8
  // const secondNumber = 18
  // const operator = '/'
  const firstNumber = numericInput("Informe um primeiro número ---> ")
  const secondNumber = numericInput("Informe um segundo número ---> ")
  const operator = textInput("Informe um dos operadores a seguir (+, -, *, /) ---> ")
  
  // Processamento
  const calculusResult = calculate(firstNumber, secondNumber, operator)
  const report = `Resultado da operação: ${calculusResult}`

  // Saída
  title("RELATÓRIO")
  content(report)
  footer("FIM DA EXECUÇÃO")
}

function textInput(content) {
  return question(content)
}

function numericInput(content) {
  return Number(question(content))
}

function title(this_content) {
  content(`\n========== ${this_content} ==========\n`)
}

function content(content) {
  console.log(content)
}

function footer(this_content) {
  content(`\n========== ${this_content} ==========\n`)
}

function calculate(v1, v2, operator) {
  if (operator == '+') {
    return v1 + v2
  } else if (operator == '-') {
    return v1 - v2
  } else if (operator == '*') {
    return v1 * v2
  } else {
    return (v1 / v2).toFixed(2)
  }
}

main()
