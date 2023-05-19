

/*
21. Leia uma temperatura em °F, calcule e escreva a equivalente em °C. (t°C = (5 * t°F - 160) / 9).
*/

import { question } from "readline-sync"

// Entrada
const fahrenheitTemp = Number(question('Digite um valor em temperatura fahrenheit ---> '))

// Processamento
const adittionalTemp = 160
const fahrenheitToCelsius = (5 * fahrenheitTemp - adittionalTemp) / 9

// Saída
const title = '\n===== RELATÓRIO =====\n'
const report = title + fahrenheitTemp + '°F equivale a ' + fahrenheitToCelsius.toFixed(2) + '°C\n'

console.log(report)
