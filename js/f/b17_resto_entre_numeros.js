

/*
17. 
Leia valores inteiros em duas variáveis distintas
. Se o resto da divisão da (PRIMEIRA PELA SEGUNDA) for 1
    -> Escreva a soma dessas variáveis mais o resto da divisão
. Se 2:
    -> Escreva se o primeiro e o segundo valor são pares ou ímpares
. Se 3: 
    -> Multiplique a soma dos valores lidos pelo primeiro
. Se 4:
    -> Divida a soma dos números lidos pelo segundo, se este for diferente de zero. 
. Outro:
    -> Escreva o quadrado dos números lidos.
*/

import * as functionDb from "../../functions.js"

function main() {
  // Entradas
  // const firstNumber = functionDb.numericInput("Informe um número inteiro ---> ")
  // const secondNumber = functionDb.numericInput("Informe um outro número inteiro ---> ")
  const firstNumber = 23
  const secondNumber = 18

  // Processamento
  const integersDivision = getDivisionRemainder(firstNumber, secondNumber)
  
  functionDb.title("RELATÓRIO")
  functionDb.content(`Condição atendida: ${integersDivision}`)
  // 7 e 2 = 1
  if (integersDivision == 1) {
    const sumPlusRemainder = firstNumber + secondNumber + integersDivision
    functionDb.content(`Quanto é a soma dos inteiros + resto? ${sumPlusRemainder}`)
  } 
  // 7 % 5 = 2
  else if (integersDivision == 2) {
    const firstNumberType = getNumberType(firstNumber) 
    const secondNumberType = getNumberType(secondNumber) 
    functionDb.content(firstNumberType)
    functionDb.content(secondNumberType)
  }
  // 7 % 4 = 3
  else if (integersDivision == 3) {
    const sumPlusFirst = firstNumber + secondNumber + firstNumber
    functionDb.content(`Quanto é a soma dos inteiros + o primeiro? ${sumPlusFirst}`)
  }
  // 18 % 14 = 4
  else if (integersDivision == 4 && secondNumber != 0) {
    const sumAndDivision = (firstNumber + secondNumber) / secondNumber
    functionDb.content(`Quanto é a soma dos inteiros dividida pelo segundo? ${sumAndDivision.toFixed(2)}`)
  }
  // 23 % 18 = 5
  else {
    const numbersSquare = `[${firstNumber}: ${firstNumber ** 2}] / [${secondNumber}: ${secondNumber ** 2}]`
    functionDb.content(`QUADRADOS DOS INTEIROS: ${numbersSquare}`)
  }
  functionDb.footer("FIM DA EXECUÇÃO")
}

function getDivisionRemainder(v1, v2) {
  return v1 % v2
}

function getNumberType(number) {
  if (number % 2 != 0) {
    return `${number} é ímpar`
  } else {
    return `${number} é par`
  }
}

main()
