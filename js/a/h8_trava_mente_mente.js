

/*
8. Leia 2 números, calcule e escreva a divisão da soma pela subtração dos números lidos.
*/

import { question } from "readline-sync"

// Entradas
// const firstNum = 1
// const secondNum = 2
const firstNum = Number(question('Digite um número (ex: 2, 4.4) ---> '))
const secondNum = Number(question('Digite um outro número (ex: 2, 4.4) ---> '))

// Processamento
const sum = firstNum + secondNum
const subtraction = firstNum - secondNum
const division = (sum / subtraction).toFixed(2)

// Saída
const title = '\n===== RELATÓRIO =====\n'
const report = title + 'Divisão da soma pela subtração: ' + division + '\n'

console.log(report)
