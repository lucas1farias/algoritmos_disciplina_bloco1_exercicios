

/* 
14. Leia 5 (cinco) números inteiros, calcule a sua média e escreva os que são maiores que a média.
*/

import { question } from "readline-sync"

function main() {
  // Entradas
  // const firstInt = 10
  // const secondInt = 10
  // const thirdInt = 10
  // const fourthInt = 15
  // const fifthInt = 20
  const firstInt = numericInput("Informe um número inteiro ---> ")
  const secondInt = numericInput("Informe um próximo número inteiro ---> ")
  const thirdInt = numericInput("Informe mais um número inteiro ---> ")
  const fourthInt = numericInput("Informe outro número inteiro ---> ")
  const fifthInt = numericInput("Informe apenas mais um número inteiro ---> ")
  
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
