

/*
1. Leia uma velocidade em m/s, calcule e escreva esta velocidade em km/h. (Vkm/h = Vm/s * 3.6)
*/ 

import { question } from "readline-sync"

// Entrada
// let speed = 10
const speed = Number(question('Digite a velocidade em (m/s) ---> '))

// Processamento
const conversion = 3.6
const formula = (speed * conversion).toFixed(2)

// Saída
const title = '\n===== RELATÓRIO =====\n'
const report = title + speed + ' m/s' + ' equivale à ' + formula + 'km/h\n'

console.log(report)
