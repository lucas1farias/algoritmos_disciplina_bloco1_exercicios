

/* 
32. Leia um número inteiro (3 dígitos), calcule e escreva a diferença entre o número e seu inverso.
*/

import { question } from "readline-sync"

// Entrada
const number = Number(question('Digite um valor entre 100 e 999 ---> '))

// Processamento
const hundred = Math.floor(number / 100)
const remainings = number % 100 
const ten = Math.floor(remainings / 10)
const unit = remainings % 10
const numberReversed = Number(unit + '' + ten + '' + hundred)
const diff = Math.abs(number - numberReversed)

// Saída
const title = '\n===== RELATÓRIO =====\n'
const report = title + 'Número: ' + number + '\nSeu inverso: ' + numberReversed + '\nSua diferença: ' + diff + '\n'

console.log(report)
