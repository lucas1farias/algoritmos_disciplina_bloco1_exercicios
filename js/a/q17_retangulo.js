

/* 
17. Leia o valor da base e altura de um retângulo, calcule e escreva sua área. (área = base * altura)
*/

import { question } from "readline-sync"

// Entradas
const rectangleBase = Number(question('Digite o valor da base do retângulo ---> '))
const rectangleHeight = Number(question('Digite o valor da altura do retângulo ---> '))

// Processamento
const calculus = rectangleBase * rectangleHeight

// Saída
const title = '\n===== RELATÓRIO =====\n'
const report = title + 'Área do retângulo: ' + calculus + '\n'

console.log(report)
