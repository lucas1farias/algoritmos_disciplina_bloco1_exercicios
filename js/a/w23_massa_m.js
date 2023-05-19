

/* 
23. Leia um valor em kg (quilograma), calcule e escreva o equivalente em g (grama)
*/

import { question } from "readline-sync"

// Entrada
const kgValue = Number(question('Digite um valor em (kg) (ex: 14, 26.7) ---> '))

// Processamento
const conversion = 1000
const calculus = kgValue * conversion

// Saída
const title = '\n===== RELATÓRIO =====\n'
const report = title + '(' + kgValue + 'kg) é o equivalente a: ' + calculus + 'g\n'

console.log(report)
