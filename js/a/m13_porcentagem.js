

/* 
13. Leia um valor em real (R$), calcule e escreva 70% deste valor. 
*/

import { question } from "readline-sync"

// Entradas
const value = Number(question('Digite um valor de dinheiro ---> '))
const percentage = Number(question('Digite a porcentagem do valor a ser calculada ---> '))

// Processamento
const percentageCalculus = (percentage / 100).toFixed(2)
const calculus = (value * percentageCalculus).toFixed(2)

// Saída
const title = '\n===== RELATÓRIO =====\n'
const report = title + percentage + '% de ' + '(R$ ' + value + '): ' + calculus + '\n'

console.log(report)
