
  
/*
34. Leia 3 números, calcule e escreva a média dos números.
*/

import { question } from "readline-sync"

// Entrada
const value1st = Number(question('Digite um valor inteiro ---> '))
const value2nd = Number(question('Digite outro valor inteiro ---> '))
const value3rd = Number(question('Digite mais um valor inteiro ---> '))

// Processamento
const void_ = ' '
const mean = ((value1st + value2nd + value3rd) / 3).toFixed(2)

// Saída
const title = '\n===== RELATÓRIO =====\n'
const report = title + 'Média dos números: ' + value1st + void_ + value2nd + void_ + value3rd + '\n' + mean + '\n'

console.log(report)
