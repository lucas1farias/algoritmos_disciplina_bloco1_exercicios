

/*
13. Leia 5 (cinco) números inteiros e escreva o maior e o menor deles. Considere que todos os valores são
diferentes.
*/

import * as functionDb from "../../functions.js"

function main() {
  // Entradas
  const firstInt = functionDb.numericInput("Informe um número inteiro ---> ")
  const secondInt = functionDb.numericInput("Informe um próximo número inteiro ---> ")
  const thirdInt = functionDb.numericInput("Informe mais um número inteiro ---> ")
  const fourthInt = functionDb.numericInput("Informe outro número inteiro ---> ")
  const fifthInt = functionDb.numericInput("Informe apenas mais um número inteiro ---> ")
  // const firstInt = 99
  // const secondInt = 105
  // const thirdInt = 400
  // const fourthInt = 202
  // const fifthInt = 3000

  // Processamento
  const validation = numbersAllDifferent(firstInt, secondInt, thirdInt, fourthInt, fifthInt)
  let biggest
  let smallest
  const biggestCode = -4
  const smallestCode = -0
  
  if (validation) {
    const firstIntCode = numberScore(firstInt, secondInt, thirdInt, fourthInt, fifthInt)
    const secondIntCode = numberScore(secondInt, firstInt, thirdInt, fourthInt, fifthInt)
    const thirdIntCode = numberScore(thirdInt, firstInt, secondInt, fourthInt, fifthInt)
    const fourthIntCode = numberScore(fourthInt, firstInt, secondInt, thirdInt, fifthInt)
    const fifthIntCode = numberScore(fifthInt, firstInt, secondInt, thirdInt, fourthInt)
    
    if (firstIntCode == biggestCode) {
      biggest = firstInt 
    } else if (firstIntCode == smallestCode) {
      smallest = firstInt
    } if (secondIntCode == biggestCode) {
      biggest = secondInt 
    } else if (secondIntCode == smallestCode) {
      smallest = secondInt
    } if (thirdIntCode == biggestCode) {
      biggest = thirdInt 
    } else if (thirdIntCode == smallestCode) {
      smallest = thirdInt
    } if (fourthIntCode == biggestCode) {
      biggest = fourthInt 
    } else if (fourthIntCode == smallestCode) {
      smallest = fourthInt
    } if (fifthIntCode == biggestCode) {
      biggest = fifthInt 
    } else if (fifthIntCode == smallestCode) {
      smallest = fifthInt
    }
  }

  // Saída
  functionDb.title("RELATÓRIO")
  functionDb.content(`Maior valor: ${biggest}`)
  functionDb.content(`Menor valor: ${smallest}`)
  functionDb.footer("FIM DA EXECUÇÃO")
}

function numbersAllDifferent(n1, n2, n3, n4, n5) {
  if (
    n1 != n2 && n1 != n3 && n1 != n4 && n1 != n5
    && n2 != n3 && n2 != n4 && n2 != n5
    && n3 != n4 && n3 != n5
    && n4 != n5
    ) {
      return true
    } else {
      return false
    }
}

function numberScore(n1, n2, n3, n4, n5) {
  let counter = 0
  if (n1 > n2) {
    counter += 1
  } if (n1 > n3) {
    counter += 1
  } if (n1 > n4) {
    counter += 1
  } if (n1 > n5) {
    counter += 1
  }
  if (counter == 4 || counter == 0) {
    return -counter
  } else {
    return counter
  }
}

main()
