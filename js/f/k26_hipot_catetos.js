

/*
26. Leia os 3 (três) lados de um triângulo e identifique sua hipotenusa e seus catetos.
*/

import { question } from "readline-sync"

function main() {
  // Entradas
  // const oneSide = 5
  // const otherSide = 3
  // const lastSide = 4
  const oneSide = numericInput("Informe o lado 1 de um triângulo ---> ")
  const otherSide = numericInput("Informe o lado 2 de um triângulo ---> ")
  const lastSide = numericInput("Informe o lado 3 de um triângulo ---> ")

  // Processamento
  const hypotGuess = compare(oneSide, otherSide, lastSide)
  let hypotReal = 0
  const correct = ` Você ACERTOU a hipotenusa :)`
  const incorrect = `Você ERROU a hipotenusa :( ... `
  let answerModel1 = `Hipotenusa: ${oneSide} -> Cateto1: ${otherSide} -> Cateto: ${lastSide} -> `
  let answerModel2 = `Hipotenusa: ${otherSide} -> Cateto1: ${oneSide} -> Cateto: ${lastSide} -> `
  let answerModel3 = `Hipotenusa: ${lastSide} -> Cateto1: ${oneSide} -> Cateto: ${otherSide} -> `

  // Opção 1
  if (hypotGuess == oneSide) {
    hypotReal = hypot(otherSide, lastSide)
    if (hypotGuess == hypotReal) {
      output(answerModel1 + correct)
    } else {
      output(answerModel1 + incorrect + hypotReal)
    }
  } 
  // Opção 2
  else if (hypotGuess == otherSide) {
    hypotReal = hypot(oneSide, otherSide)
    if (hypotGuess == hypotReal) {
      output(answerModel2 + correct)
    } else {
      output(answerModel2 + incorrect + hypotReal)
    }
  } 
  // Opção 3
  else if (hypotGuess == lastSide) {
    hypotReal = hypot(oneSide, otherSide)
    if (hypotGuess == hypotReal) {
      output(answerModel3 + correct)
    } else {
      output(answerModel3 + incorrect + hypotReal)
    }
  }
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

function compare(n1, n2, n3) {
  if (n1 > n2 && n1 > n3) {
    return n1
  } if (n2 > n1 && n2 > n3) {
    return n2
  } if (n3 > n1 && n3 > n2) {
    return n3
  }
}

function hypot(side1, side2) {
  let calculus = Math.sqrt((side1 ** 2) + (side2 ** 2))
  return calculus.toFixed(1)
}

function output(outerContent) {
  title("RELATÓRIO")
  content(outerContent)
  footer("FIM DA EXECUÇÃO")
}

main()
