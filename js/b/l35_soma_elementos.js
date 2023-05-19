

/*
35. Leia um número inteiro (4 dígitos), calcule e escreva a soma dos elementos que o compõem. Ex.:
número = 9534 ; soma = 9+5+3+4 = 21.
*/

import { question } from "readline-sync"

// Entrada
let value = Number(question('Digite um valor entre 1000 e 9999 ---> '))

// Processamento
const thousand = Math.floor(value / 1000)
const thousandLeftover = value % 1000
const hundred = Math.floor(thousandLeftover / 100)
const hundredRemainings = value % 100
const ten = Math.floor(hundredRemainings / 10)
const unit = hundredRemainings % 10
const sumOfElements = thousand + hundred + ten + unit

// Saída
const title = '\n===== RELATÓRIO ====='
const report = `
${title}
Milhar        || ${thousand}
Centena       || ${hundred}
Dezena        || ${ten}
Unidade       || ${unit}
Soma de todas || ${sumOfElements}
`

console.log(report)
