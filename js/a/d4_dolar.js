

/*
4. Leia o valor do dólar e um valor em dólar, calcule e escreva o equivalente em real (R$). 
*/

import { question } from "readline-sync"

// Entrada
// const dollarAmount = 10
const dollarAmount = Number(question('Digite um valor em dolar (ex: 7, 4.5) ---> '))

// Processamento
const dollarToReal = 5.49
const conversion = (dollarAmount * dollarToReal).toFixed(2)

// Saída
const representation = '$$' + dollarAmount + ' = ' + conversion + '\n'
const report = '\n===== RELATÓRIO: DÓLAR PARA REAL =====\n' + representation

console.log(report)
