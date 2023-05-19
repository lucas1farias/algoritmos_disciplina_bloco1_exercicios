

/*
38. Leia 2 (duas) frações (numerador e denominador), calcule e escreva a soma destas frações, escrevendo o resultado 
em forma de fração.
*/

import { question } from "readline-sync"

// Entrada
const numerator1st = Number(question('Digite o número de cima da primeira fração ---> '))
const denominator1st = Number(question('Digite o número de baixo da primeira fração ---> '))
const numerator2nd = Number(question('Digite o número de cima da segunda fração ---> '))
const denominator2nd = Number(question('Digite o número de baixo da segunda fração ---> '))

// Processamento
const denominatorsProduct = denominator1st * denominator2nd
const numerator1stProduct = (denominatorsProduct / denominator1st) * numerator1st
const numerator2ndProduct = (denominatorsProduct / denominator2nd) * numerator2nd
const numeratorsProduct = numerator1stProduct + numerator2ndProduct
const sumFraction = numeratorsProduct + '/' + denominatorsProduct

// Saída
const title = '\n===== RELATÓRIO ====='
const report = `
${title}
Primeira fração || ${numerator1st}/${denominator1st}
Segunda fração  || ${numerator2nd}/${denominator2nd}
Suas somas      || ${sumFraction}
`

console.log(report)
