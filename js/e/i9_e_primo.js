

// 9. Leia 1 (um) número entre 0 e 100, verifique e escreva se o número é ou não primo.

import * as functionDb from "../../functions.js"

function main() {
  // Entradas
  const twoDigitsNumber = functionDb.numericInput("Informe um número de 2 dígitos ---> ")

  // Processamento
  const primeOrNot = isNumberPrime(twoDigitsNumber)

  // Saída
  functionDb.title("RELATÓRIO")
  functionDb.content(primeOrNot)
  functionDb.footer("FIM DA EXECUÇÃO")
}

function isNumberPrime(n) {
  const yes = `${n} é primo`
  const no = `${n} não é primo`
  if (n == 1) {
    return no
  }
  if (n == 2 || n == 3 || n == 5 || n == 7) {
    return yes
  }
  if (n % 2 != 0 && n % 3 != 0 && n % 5 != 0 && n % 7 != 0 && n % 9 != 0) {
    return yes
  } 
  else {
    return no
  }
}

main()

/*
function isPrime(n) {
  if (n == 1) {
    return 0
  }
  if (n == 2 || n == 3 || n == 5 || n == 7) {
    return 1
  }
  if (n % 2 != 0 && n % 3 != 0 && n % 5 != 0 && n % 7 != 0 && n % 9 != 0) {
    return 1
  } 
  else {
    return 0
  }
}

// Testando a função
let value = 1
const loop = setInterval(() => {
  let checkage = isPrime(value)
  if (checkage == 1) {
    console.log(value)
  }  
  if (value == 100) {
    console.log('Fim')
    clearInterval(loop)
  }
  value++
})
*/