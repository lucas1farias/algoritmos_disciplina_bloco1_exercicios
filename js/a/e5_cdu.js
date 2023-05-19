

/*
5. Leia um número inteiro (3 dígitos), calcule e escreva a soma de seus elementos (C + D + U).
*/

import { question } from "readline-sync"

// Entrada
// const value = 200
const value = Number(question('Digite um valor entre 100 a 999 ---> '))

// Processamento
const hundred = Math.floor(value / 100)
const hundredRemainings = value % 100
const ten = Math.floor(hundredRemainings / 10)
const unit = hundredRemainings % 10

// Saída
const SumOfElements = hundred + ten + unit
const report = `
===== RELATÓRIO =====
Centena || ${hundred}
Dezena  || ${ten}
Unidade || ${unit}
Soma    || ${SumOfElements}
`

console.log(report)
