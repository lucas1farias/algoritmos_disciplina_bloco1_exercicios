

/* 
20. Leia uma temperatura em °C, calcule e escreva a equivalente em °F. (t°F = (9 * t°C + 160) / 5)
*/

import { question } from "readline-sync"

// Entrada
const celsiusTemp = Number(question('Digite um valor em temperatura celsius ---> '))

// Processamento
const adittionalTemp = 160
const celsiusToFahrenheit = (9 * celsiusTemp + adittionalTemp) / 5

// Saída
const title = '\n===== RELATÓRIO =====\n'
const report = title + celsiusTemp + '°C equivale a ' + celsiusToFahrenheit.toFixed(1) + '°F\n'

console.log(report)
