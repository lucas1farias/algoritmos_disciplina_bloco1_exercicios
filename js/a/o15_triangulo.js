

/*
15. Leia o valor da base e altura de um triângulo, calcule e escreva sua área. (área=(base * altura)/2)
*/

import { question } from "readline-sync"

// Entradas
const triangleBase = Number(question('Digite a base do triângulo ---> '))
const triangleHeight = Number(question('Digite a altura do triângulo ---> '))

// Processamento
const formula = ((triangleBase * triangleHeight) / 2).toFixed(2)

// Saída
const title = '\n===== RELATÓRIO =====\n'
const report = title + 'Área do triângulo de base ' + triangleBase + ' e altura ' + triangleHeight + ': ' + formula + '\n'

console.log(report)
