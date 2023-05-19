

/* 
24. Leia um valor em m, calcule e escreva o equivalente em cm
*/

import { question } from "readline-sync"

// Entrada
const value = Number(question('Digite um valor em (m) ---> '))

// Processamento
const conversion = 100
const formula = value * conversion

// Saída
const title = '\n===== RELATÓRIO =====\n'
const report = title + value + 'm é o equivalente à: ' + formula + 'cm' + '\n'

console.log(report)
