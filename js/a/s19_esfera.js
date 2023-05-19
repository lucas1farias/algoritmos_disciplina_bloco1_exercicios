

/*
19. Leia o valor do raio de uma esfera, calcule e escreva seu volume.
(v = (4 * p * r3) / 3) (p = 3,14) 
*/

import { question } from "readline-sync"

// Entrada
const radius = Number(question('Digite o valor do raio de uma esfera ---> '))

// Processamento
const pi = 3.14
const formula = 4 * pi * (radius ** 3) / 3

// Saída
const title = '\n===== RELATÓRIO =====\n'
const report = title + 'Volume da esfera: ' + formula.toFixed(2) + '\n'

console.log(report)
