

/* 
9. Leia 1 (um) número entre 0 e 100, verifique e escreva se o número é ou não primo.
*/

import { question } from "readline-sync"

function main() {
  // Entradas
  const twoDigitsNumber = numericInput("Informe um número de 2 dígitos ---> ")

  // Processamento
  const primeOrNot = isNumberPrime(twoDigitsNumber)

  // Saída
  title("RELATÓRIO")
  content(primeOrNot)
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
