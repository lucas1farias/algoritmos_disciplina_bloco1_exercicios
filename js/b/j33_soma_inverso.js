

/*
33. Leia um número inteiro (3 dígitos), calcule e escreva a soma do número com seu inverso.
(Ex.: número = 532 ; inverso = 235 ; soma = 532 + 235 = 767).
*/

import { question } from "readline-sync"

// Entrada
// const number = 142
const number = Number(question('Digite um valor entre 100 e 999 ---> '))

// Processamento
const hundred = Math.floor(number / 100)
const remainings = number % 100 
const ten = Math.floor(remainings / 10)
const unit = remainings % 10
const numbersReversed = Number(unit + '' + ten + '' + hundred)
const sum = number + numbersReversed

// Saída
const title = '\n===== RELATÓRIO ====='
const report = `
${title}
Número alvo                     || ${number}
Inverso                         || ${numbersReversed}
Soma entre número e seu inverso || ${sum}
`

console.log(report)
