

/* 
16. Leia o valor do lado de um quadrado, calcule e escreva sua área. (área = lado2)
*/

import { question } from "readline-sync"

// Entrada
const squareSideSize = Number(question('Digite o tamanho do lado do quadrado ---> '))

// Processamento
const calculus = (squareSideSize * squareSideSize).toFixed(2)

// Saída
const title = '\n===== RELATÓRIO =====\n'
const report = title + 'Área do quadrado: ' + calculus + '\n'

console.log(report)
