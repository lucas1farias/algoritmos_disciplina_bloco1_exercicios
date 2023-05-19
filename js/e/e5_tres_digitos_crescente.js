

// 5. Leia 3 (três) números e escreva-os em ordem crescente.

import * as functionDb from "../../functions.js"

function main() {
  // Entradas
  const firstNum = functionDb.numericInput("Informe um primeiro número ---> ")
  const secondNum = functionDb.numericInput("Informe um segundo número ---> ")
  const thirdNum = functionDb.numericInput("Informe um terceiro número ---> ")
  // const firstNum = -2
  // const secondNum = 12
  // const thirdNum = 0

  // Processamento
  const numbersOrder = ascendingOrder(firstNum, secondNum, thirdNum)
  const report = `Os dados [${firstNum}, ${secondNum}, ${thirdNum}] em ordem crescente, ficam: ${numbersOrder}`

  // Saída
  functionDb.title("RELATÓRIO")
  functionDb.content(report)
  functionDb.footer("FIM DA EXECUÇÃO")
}

function ascendingOrder(a, b, c) {
  if (a > b && a > c) {
    if (b > c) {
      return `${c} ${b} ${a}`
    } else {
      return `${b} ${c} ${a}`
    }
  }
  if (b > a && b > c) {
    if (a > c) {
      return `${c} ${a} ${b}`
    } else {
      return `${a} ${c} ${b}`
    }
  }

  if (c > a && c > b) {
    if (a > b) {
      return `${b} ${a} ${c}`
    } else {
      return `${a} ${b} ${c}`
    }
  }
}

main()
