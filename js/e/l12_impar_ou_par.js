

/* 
12. Leia 1 (um) número inteiro e escreva se este número é par ou impar.
*/

import { question } from "readline-sync"

function main() {
  // Entradas
  // const number = 12013
  const number = numericInput("Informe um número qualquer acima de 0 ---> ")

  // Processamento
  const numberOddOrEven = getNumberType(number)
  const report = `O número ${number} é: ${numberOddOrEven}`

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

function getNumberType(n) {
  if (n % 2 == 0) {
    return 'par'
  } else {
    return 'ímpar'
  }
}

main()
