

/*
2. Leia um valor em horas e um valor em minutos, calcule e escreva o equivalente em minutos.
*/

import { question } from "readline-sync"

// Entradas
// let hour = 1
// let minute = 2
const hour = Number(question('Digite um valor em horas (ex: 1, 12, 24) ---> '))
const minute = Number(question('Digite um valor em minutos (ex: 1, 12, 24) ---> '))

// Processamento
const hourToMinute = 60
const calculus = (hour * hourToMinute) + minute

// Saída
const title = '\n===== RELATÓRIO =====\n'
const report = title + 'Quanto é ' + hour + ' hora(s)' + ' + ' + minute + ' minutos' + '? ' + calculus + ' minutos\n'
console.log(report)
