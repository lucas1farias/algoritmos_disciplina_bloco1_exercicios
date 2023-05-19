

/*
7. Leia 3 números, calcule e escreva a soma dos 2 primeiros e a diferença entre os 2 últimos.
*/

import { question } from "readline-sync"

// Entradas
// const firstNum = 2
// const secondNum = 7
// const thirdNum = 1
const firstNum = Number(question('Digite o primeiro valor ---> '))
const secondNum = Number(question('Digite o segundo valor ---> '))
const thirdNum = Number(question('Digite o terceiro valor ---> '))

// Processamento
const title = '\n===== RELATÓRIO ====='
const sumTwoFirst = firstNum + secondNum
const differenceTwoLast = secondNum - thirdNum

const report = `
${title}
Soma dos 2 primeiros: ${sumTwoFirst}
Diferença dos dois últimos: ${differenceTwoLast}
`

console.log(report)
