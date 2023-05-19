

/* 
11. Leia um número inteiro (3 dígitos) e escreva o inverso do número. (Ex.: número = 532 ; inverso = 235)
*/

import { question } from "readline-sync"

// Entrada
const number = Number(question('Digite um valor entre 100 a 999 ---> '))

// Processamento
const hundred = Math.floor(number / 100)
const remainings = number % 100 
const ten = Math.floor(remainings / 10)
const unit = remainings % 10
const numbersReversed = unit + '' + ten + '' + hundred

// Saída
const title = '\n===== RELATÓRIO =====\n'
const report = title + 'Inversão do valor ' + number + ': ' + numbersReversed + '\n'

console.log(report)
