

/* 
37. Leia a idade de uma pessoa expressa em dias e escreva-a expressa em anos, meses e dias.
*/

import { question } from 'readline-sync'

// Entrada
let ageInDays = Number(question('Digite um valor correspondente a sua idade em dias ---> '))

// Processamento
const dayInYear = 0.002738
const dayInMonths = 0.032855
const ageInYears = ageInDays * dayInYear
const ageInMonths = ageInDays * dayInMonths
// const ageInDays = Math.floor(ageInDays * yearInDays)

// Saída
const title = '\n===== RELATÓRIO ====='
const report = `
${title}
Idade em anos  || ${Math.floor(ageInYears)}
Idade em meses || ${Math.floor(ageInMonths)}
Idade em dias  || ${ageInDays}
`

console.log(report)
