

/*
30. Leia um número inteiro de minutos, calcule e escreva quantos dias, quantas horas e quantos minutos ele
corresponde.
*/ 

// import { question } from "readline-sync"

// Entrada
const minutesValue = 1470
// let value = Number(input.question('Digite ---> '))

// Processamento
const minutesInDay = 1440
const minutesInHour = 60
let days = 0
let hours = 0
let minutes = 0

if (minutesValue >= minutesInDay) {
  days = Math.floor(minutesValue / minutesInDay)
  hours = Math.floor((minutesValue - minutesInDay) / minutesInHour)
  minutes = (minutesValue - minutesInDay) % minutesInHour
} else {
  days = Math.floor(minutesValue / minutesInDay)
  hours = Math.floor((minutesValue / minutesInHour))
  minutes = minutesValue % minutesInHour
}

// Saída
const title = '===== RELATÓRIO ====='
const report = `
${title}
Minutos alvo || ${minutesValue}
Dia(s)       || ${days}
Hora(s)      || ${hours}
Minuto(s)    || ${minutes}
`
console.log(report)
