

/* 
25. Leia um número inteiro de metros, calcule e escreva quantos Km e quantos metros ele corresponde
*/

import { question } from "readline-sync"

// Entrada
const value = Number(question('Digite um valor exato em metros ---> '))

// Processamento
const conversion = 0.001
const formula = value * conversion

// Saída
const title = '\n===== RELATÓRIO =====\n'
const report = title + value + 'm é o equivalente à: ' + formula + 'km\n'

console.log(report)
