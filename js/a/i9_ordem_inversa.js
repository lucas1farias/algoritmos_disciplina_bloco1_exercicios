

/* 
9. Leia 2 números (A, B) e escreva-os em ordem inversa (B, A)
*/

import { question } from "readline-sync"

// Entrada
const firstNum = Number(question('Digite um valor ---> '))
const secondNum = Number(question('Digite outro valor ---> '))

// Processamento
const number = firstNum + '' + secondNum
const numberReversed = secondNum + '' + firstNum

// Saída
const title = '\n===== RELATÓRIO =====\n'
const report = title + 'Inversão dos números ' + number + ': ' + numberReversed + '\n'

console.log(report)
