

/*
18. Leia dois valores e uma das seguintes operações a serem executadas (codificadas da seguinte forma: 1 –
Adição, 2 – Subtração, 3 – Multiplicação e 4 – Divisão). Calcule e escreva o resultado dessa operação
sobre os dois valores lidos.
*/

import * as functionDb from "../../functions.js"

function main() {
  // Entradas
  const firstNumber = functionDb.numericInput("Informe um primeiro número ---> ")
  const secondNumber = functionDb.numericInput("Informe um segundo número ---> ")
  const operator = functionDb.textInput("Informe um dos operadores a seguir (+, -, *, /) ---> ")
  // const firstNumber = 8
  // const secondNumber = 18
  // const operator = '/'

  // Processamento
  const calculusResult = calculate(firstNumber, secondNumber, operator)
  const report = `Resultado da operação: ${calculusResult}`

  // Saída
  functionDb.title("RELATÓRIO")
  functionDb.content(report)
  functionDb.footer("FIM DA EXECUÇÃO")
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
