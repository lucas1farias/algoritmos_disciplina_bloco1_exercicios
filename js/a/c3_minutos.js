

/*
3. Leia um valor em minutos, calcule e escreva o equivalente em horas e minutos.
*/

import { question } from "readline-sync"

// Entrada
// const minute = 72
const minute = Number(question('Digite um valor em minutos (ex: 1, 12, 24) ---> '))

const minuteValue = 60

// Processamento (forma 1)
const divisionRemainings = parseInt(minute / 60)
const minutesRemainings = minute % minuteValue

// Processamento (forma 3)
const divisionRemainings3 = Math.floor(minute / minuteValue)
const minutesRemainings3 = minute % minuteValue

// Saída (forma 1)
const title = '\n===== RELATÓRIO ====='
console.log(title)

const report = minute + ' minuto(s) = ' + divisionRemainings + 'h:' + minutesRemainings + 'min'
console.log(report)

// Saída (forma 3)
const report3 = minute + ' minuto(s) = ' + divisionRemainings3 + 'h:' + minutesRemainings3 + 'min' + '\n'
console.log(report3)
