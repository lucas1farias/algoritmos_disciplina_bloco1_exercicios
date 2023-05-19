

/* 
36. Leia a idade de uma pessoa expressa em anos, meses e dias e escreva-a expressa apenas em dias.
*/

import { question } from "readline-sync"

function main() {
  // Entrada
  const age = Number(question('Digite o valor correspondente à sua idade ---> '))

  // Processamento
  const yearInMonths = 12
  const ageInMonths = age * yearInMonths
  const ageInDays = get_age_as_days(age)

  // Saída
  const title = '\n===== RELATÓRIO ====='
  const report = `
  ${title}
  Idade || ${age} ano(s)
  Meses || ${ageInMonths}
  Dias  || ${ageInDays}
  `

  display(report)
}

function get_age_as_days(age_year) {
  const yearInDays = 365.2425
  return Math.floor(age_year * yearInDays)
}

function display(content) {
  console.log(content)
}

main()
