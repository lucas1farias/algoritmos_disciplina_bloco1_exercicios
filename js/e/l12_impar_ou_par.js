

// 12. Leia 1 (um) número inteiro e escreva se este número é par ou impar.

import * as functionDb from "../../functions.js"

function main() {
  // Entradas
  const number = functionDb.numericInput("Informe um número qualquer acima de 0 ---> ")
  // const number = 12013

  // Processamento
  const numberOddOrEven = getNumberType(number)
  const report = `O número ${number} é: ${numberOddOrEven}`

  // Saída
  functionDb.title("RELATÓRIO")
  functionDb.content(report)
  functionDb.footer("FIM DA EXECUÇÃO")
}

function getNumberType(n) {
  if (n % 2 == 0) {
    return 'par'
  } else {
    return 'ímpar'
  }
}

main()
