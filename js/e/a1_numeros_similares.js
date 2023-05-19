

/* 
1. Leia 3 (três) números, verifique e escreva quantos números iguais existem entre os números.
*/

import { question } from "readline-sync"

function main() {
  // const firstNum = 14
  // const secondNum = 14
  // const thirdNum = 14
  const firstNum = numericInput('Informe um primeiro número ---> ')
  const secondNum = numericInput('Informe um segundo número ---> ')
  const thirdNum = numericInput('Informe um terceiro número ---> ')
  
  // Processamento
  const equals = numberIsEqual(firstNum, secondNum) + numberIsEqual(secondNum, thirdNum) + numberIsEqual(firstNum, thirdNum)
  const combination = `${firstNum} ${secondNum} ${thirdNum}`
  
  // Saída
  title('RELATÓRIO')
  
  if (equals == 1) {
    content(`Quantidades de números iguais em "${combination}": ${equals + 1}`)
  } else if (equals == 2) {
    content(`Quantidades de números iguais em "${combination}": ${equals - 1}`)
  } else {
    content(`Quantidades de números iguais em "${combination}": ${equals}`)
  }
  
  footer('FIM DA EXECUÇÃO')
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

function numberIsEqual(v1, v2) {
  if (v1 == v2) {
    return 1
  } else {
    return 0
  }
}

main()
