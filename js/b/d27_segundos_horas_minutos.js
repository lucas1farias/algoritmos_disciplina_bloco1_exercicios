

/*
27. Leia um número inteiro de segundos, calcule e escreva quantas horas, quantos minutos e quantos segundos ele 
corresponde. 
*/

import { question } from "readline-sync"

// Entrada
const secondValue = Number(question('Digite um valor em segundos ---> '))

// Processamento
const secondsToHour = 3600
const secondstoMinute = 60
const hour = Math.floor(secondValue / secondsToHour)
const hourLeftover = (secondValue / secondsToHour) % 1
const minute = Math.floor(hourLeftover * secondstoMinute)
const minuteLeftover = ((hourLeftover * secondstoMinute) % 1).toFixed(2)
const seconds = Math.floor(minuteLeftover * secondstoMinute)

// Saída
const title = '\n===== RELATÓRIO ====='
const report = `
${title}
Desmembramento de ${secondValue} segundo(s)
Hora(s)    || ${hour}
Minuto(s)  || ${minute}
Segundo(s) || ${seconds}
`

console.log(report)
