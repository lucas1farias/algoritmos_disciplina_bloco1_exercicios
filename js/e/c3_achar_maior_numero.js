

/* 
3. Leia 3 (três) números, verifique e escreva o maior entre os números lidos.
*/

import { question } from "readline-sync"

function main() {
  // Entradas
  // const firstNUm = 10
  // const secondNUm = 17
  // const thirdNUm = 55
  const firstNUm = numericInput('Informe um primeiro número ---> ')
  const secondNUm = numericInput('Informe um segundo número ---> ')
  const thirdNUm = numericInput('Informe um terceiro número ---> ')
  
  // Processamento
  const biggest = findBiggestNumber(firstNUm, secondNUm, thirdNUm)
  const numbers = `(${firstNUm}, ${secondNUm}, ${thirdNUm})`

  // Saída
  title("RELATÓRIO")
  content(`Dentre os números ${numbers}, o maior é: ${biggest}`)
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
