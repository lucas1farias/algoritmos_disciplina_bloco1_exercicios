

// 3. Leia 3 (três) números, verifique e escreva o maior entre os números lidos.

import * as functionDb from "../../functions.js"

function main() {
  // Entradas
  const firstNUm = functionDb.numericInput('Informe um primeiro número ---> ')
  const secondNUm = functionDb.numericInput('Informe um segundo número ---> ')
  const thirdNUm = functionDb.numericInput('Informe um terceiro número ---> ')
  // const firstNUm = 10
  // const secondNUm = 17
  // const thirdNUm = 55

  // Processamento
  const biggest = findBiggestNumber(firstNUm, secondNUm, thirdNUm)
  const numbers = `(${firstNUm}, ${secondNUm}, ${thirdNUm})`

  // Saída
  functionDb.title("RELATÓRIO")
  functionDb.content(`Dentre os números ${numbers}, o maior é: ${biggest}`)
  functionDb.footer("FIM DA EXECUÇÃO")
}

function findBiggestNumber (n1, n2, n3) {
  if (n1 > n2 && n1 > n2) {
    return n1
  } else if (n2 > n1 && n2 > n3) {
    return n2
  } else if (n3 > n1 && n3 > n2) {
    return n3
  }
}

main()
