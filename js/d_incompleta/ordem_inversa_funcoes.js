

// problema 9
// Leia 2 números (A, B) e escreva-os em ordem inversa (B, A)

import * as functionDb from "../../functions.js"

function main() {
  functionDb.title('BEM-VINDO AO INVERSOR DE NÚMEROS DE 2 DÍGITOS')
  
  // Entrada
  const firstNum = functionDb.numericInput('Digite um valor ---> ')
  const secondNum = functionDb.numericInput('Digite outro valor ---> ')
  
  // Processamento
  const numbersBackward = twoDigitsReversed(firstNum, secondNum)
  
  // Saída
  functionDb.title('RELATÓRIO')
  functionDb.content(`Números escolhidos || ${firstNum}${secondNum}`)
  functionDb.content(`Sua reversão       || ${numbersBackward}`)
  functionDb.footer('FIM DA EXECUÇÃO')
}

function twoDigitsReversed(int1, int2) {
  const digitsReversed = int2 + '' + int1
  return digitsReversed
}

main()
