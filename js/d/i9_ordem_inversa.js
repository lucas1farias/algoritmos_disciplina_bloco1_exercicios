

/* 
9. Leia 2 números (A, B) e escreva-os em ordem inversa (B, A)
*/

import { question } from "readline-sync"

function main() {
  // Entrada
  const firstNum = Number(question('Digite um valor ---> '))
  const secondNum = Number(question('Digite outro valor ---> '))

  // Processamento
  const number = firstNum + '' + secondNum
  const numberReversed = inverter_dois_nums(firstNum, secondNum)

  // Saída
  const title = '\n===== RELATÓRIO =====\n'
  const report = title + 'Inversão dos números ' + number + ': ' + numberReversed + '\n'

  display(report)
}

function inverter_dois_nums(num_a, num_b) {
  return num_b + '' + num_a
}

function display(content) {
  console.log(content)
}

main()
