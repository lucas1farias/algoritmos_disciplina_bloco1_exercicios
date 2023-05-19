

/*
22. Leia um valor em km, calcule e escreva o equivalente em m
*/

import { question } from "readline-sync"

// Entrada
const kmValue = Number(question('Digite um valor em (km) (ex: 14, 26.7) ---> '))

// Processamento
const conversion = 1000
const calculus = kmValue * conversion

// Saída
const title = '\n===== RELATÓRIO =====\n'
const report = title + '(' + kmValue + ' km) é o equivalente a: ' + calculus + 'm\n'

console.log(report)
