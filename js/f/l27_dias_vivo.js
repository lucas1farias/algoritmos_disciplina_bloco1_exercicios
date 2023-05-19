

/*
27. Determine a idade de uma pessoa, em anos, meses e dias, dadas a data (dia, mês e ano) do seu
nascimento e a data (dia, mês e ano) atual.
*/

import { question } from "readline-sync"

function main() {
  // Entradas
  // const birthDay = 16
  // const birthMonth = 7
  // const birthYear = 1992
  // const dayNow = 24
  // const monthNow = 3
  // const yearNow = 2023
  const birthDay = numericInput("Informe o dia do mês que você nasceu ---> ")
  const birthMonth = numericInput("Informe o mês em que você nasceu ---> ")
  const birthYear = numericInput("Informe o ano em que você nasceu ---> ")
  const dayNow = numericInput("Informe o dia do mês de hoje ---> ")
  const monthNow = numericInput("Informe o mês atual ---> ")
  const yearNow = numericInput("Informe o ano atual ---> ")

  // Processamento
  const yearMonthsAmount = 12
  const personAge = getAge(birthDay, birthMonth, birthYear, dayNow, monthNow, yearNow)
  const personAgeInMonths = personAge * yearMonthsAmount
  const personAgeInDays = Math.round(personAge * 365.24)
  const totalDaysThisYear = getMonthsInDays(monthNow)

  // console.log(`Pessoa com ${personAge} anos: `, personAgeInDays) 
  // const daysThisYear = totalDaysThisYear - (30 - dayNow) - (Math.round(30.437 - 28))
  // console.log(`Qtd. de dias neste ano: ${totalDaysThisYear}`) 
  // const daysBeforePersonBirthday = personAgeInDays + totalDaysThisYear

  // Saída
  title("RELATÓRIO")
  content(`Idade: ${personAge} anos`)
  footer("FIM DA EXECUÇÃO")
}

function numericInput(content) {
  return Number(question(content))
}

function title(this_content) {
  content(`\n========== ${this_content} ==========\n`)
}

function content(content) {
  console.log(content)
}

function footer(this_content) {
  content(`\n========== ${this_content} ==========\n`)
}

function getAge(day, month, year, dayNow, monthNow, yearNow) {
  let age = 0
  let yourAge = yearNow - year
  
  if (monthNow < month) {
    age = yourAge - 1
  } else if (monthNow > month) {
    age = yourAge
  } 
  // Se for o mesmo mês, precisa verificar o dia
  else {
    if (dayNow == day || dayNow > day) {
      age = yourAge
    } 
    // Se não tiver chegado o dia do mês
    else {
      age = yourAge - 1
    }
  }
  return age
}

function getMonthsInDays(monthsAmount) {
  return Math.round(monthsAmount * 30.437)
}

main()
