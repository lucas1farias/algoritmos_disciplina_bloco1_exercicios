

/* 
28. Leia um número inteiro de horas, calcule e escreva quantas semanas, quantos dias e quantas horas ele corresponde.
*/

// CÒDIGO SÓ FUNCIONA COM NÙMEROS DE 168 ACIMA

import { question } from "readline-sync"

// Entrada
let hourValue = Number(question('Digite um valor de hora ---> '))

// Processamento
const hourInWeek = 168
const hourInDay = 24
const week = Math.floor(hourValue / hourInWeek)
const day = Math.floor((hourValue - hourInWeek) / hourInDay)
const hour = Math.floor((hourValue - hourInWeek) % hourInDay)

// Saída
const title = '\n===== RELATÓRIO =====\n'
const report = `
${title}
Horas alvo || ${hourValue} hora(s)
Semana(s)  || ${week}
Dia(s)     || ${day}
Horas      || ${hour}
`

console.log(report)
