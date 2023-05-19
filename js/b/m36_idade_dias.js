

/* 
36. Leia a idade de uma pessoa expressa em anos, meses e dias e escreva-a expressa apenas em dias.
*/

import { question } from "readline-sync"

// Entrada
const age = Number(question('Digite o valor correspondente à sua idade ---> '))

// Processamento
const yearInDays = 365.2425
const yearInMonths = 12
const ageInMonths = age * yearInMonths
const ageInDays = Math.floor(age * yearInDays)

// Saída
const title = '\n===== RELATÓRIO ====='
const report = `
${title}
Idade || ${age} ano(s)
Meses || ${ageInMonths}
Dias  || ${ageInDays}
`

console.log(report)
