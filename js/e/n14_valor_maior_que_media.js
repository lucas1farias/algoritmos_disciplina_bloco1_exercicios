

// 14. Leia 5 (cinco) números inteiros, calcule a sua média e escreva os que são maiores que a média.

import * as functionDb from "../../functions.js"

function main() {
  // Entradas
  const firstInt = functionDb.numericInput("Informe um número inteiro ---> ")
  const secondInt = functionDb.numericInput("Informe um próximo número inteiro ---> ")
  const thirdInt = functionDb.numericInput("Informe mais um número inteiro ---> ")
  const fourthInt = functionDb.numericInput("Informe outro número inteiro ---> ")
  const fifthInt = functionDb.numericInput("Informe apenas mais um número inteiro ---> ")
  // const firstInt = 10
  // const secondInt = 10
  // const thirdInt = 10
  // const fourthInt = 15
  // const fifthInt = 20

  // Processamento
  const meanCalculus = mean(firstInt, secondInt, thirdInt, fourthInt, fifthInt)
  const firstIntVsMean = compare(meanCalculus, firstInt)
  const secondIntVsMean = compare(meanCalculus, secondInt)
  const thirdIntVsMean = compare(meanCalculus, thirdInt)
  const fourthIntVsMean = compare(meanCalculus, fourthInt)
  const fifthIntVsMean = compare(meanCalculus, fifthInt)
  const sequence = `${firstIntVsMean}${secondIntVsMean}${thirdIntVsMean}${fourthIntVsMean}${fifthIntVsMean}`
  const report = `MÉDIA: ${meanCalculus}\nNúmeros maiores que a média: ${sequence}`

  // Saída
  functionDb.title("RELATÓRIO")
  functionDb.content(report)
  functionDb.footer("FIM DA EXECUÇÃO")
}

function mean(n1, n2, n3, n4, n5) {
  const calculus = (n1 + n2 + n3 + n4 + n5) / 5
  return calculus.toFixed(1)
}

function compare(mean, number) {
  if (number > mean) {
    return ` ${number} `
  } else {
    return ''
  }
}

main()
