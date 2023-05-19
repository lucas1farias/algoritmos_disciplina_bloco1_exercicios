

/* 
5. Leia 3 (três) números e escreva-os em ordem crescente.
*/

import { question } from "readline-sync"

function main() {
  // Entradas
  // const firstNum = -2
  // const secondNum = 12
  // const thirdNum = 0
  const firstNum = numericInput("Informe um primeiro número ---> ")
  const secondNum = numericInput("Informe um segundo número ---> ")
  const thirdNum = numericInput("Informe um terceiro número ---> ")

  // Processamento
  const numbersOrder = ascendingOrder(firstNum, secondNum, thirdNum)
  const report = `Os dados [${firstNum}, ${secondNum}, ${thirdNum}] em ordem crescente, ficam: ${numbersOrder}`

  // Saída
  title("RELATÓRIO")
  content(report)
  footer("FIM DA EXECUÇÃO")
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
