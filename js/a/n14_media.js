

/* 
14. Leia 3 notas de um aluno e o peso de cada nota, calcule e escreva a média ponderada.
*/

import { question } from "readline-sync"

// Entradas
const firstGrade = Number(question('Digite a nota 1 ---> '))
const secondGrade = Number(question('Digite a nota 2 ---> '))
const thirdGrade = Number(question('Digite a nota 3 ---> '))

const firstWeight = Number(question('Digite o peso da nota 1 ---> '))
const secondWeight = Number(question('Digite o peso da nota 2 ---> '))
const thirdWeight = Number(question('Digite o peso da nota 3 ---> '))

// Processamento
const gradesAndWeights = (firstGrade * firstWeight) + (secondGrade * secondWeight) + (thirdGrade * thirdWeight)
const allWeightsSum = firstWeight + secondWeight + thirdWeight
const mean = (gradesAndWeights / allWeightsSum).toFixed(2)

// Saída
const title = '\n===== RELATÓRIO =====\n'
const report = title + 'Média ponderada das 3 notas: ' + mean + '\n'

console.log(report)
