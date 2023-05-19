

/*
27. Determine a idade de uma pessoa, em anos, meses e dias, dadas a data (dia, mês e ano) do seu
nascimento e a data (dia, mês e ano) atual.
*/

import * as functionDb from "../../functions.js"

function main() {
  // Entradas
  // const birthDay = functionDb.numericInput("Informe o dia do mês que você nasceu ---> ")
  // const birthMonth = functionDb.numericInput("Informe o mês em que você nasceu ---> ")
  // const birthYear = functionDb.numericInput("Informe o ano em que você nasceu ---> ")
  // const dayNow = functionDb.numericInput("Informe o dia do mês de hoje ---> ")
  // const monthNow = functionDb.numericInput("Informe o mês atual ---> ")
  // const yearNow = functionDb.numericInput("Informe o ano atual ---> ")
  const birthDay = 16
  const birthMonth = 7
  const birthYear = 1992
  const dayNow = 24
  const monthNow = 3
  const yearNow = 2023

  // Processamento
  const yearMonthsAmount = 12
  const personAge = getAge(birthDay, birthMonth, birthYear, dayNow, monthNow, yearNow)
  const personAgeInMonths = personAge * yearMonthsAmount
  const personAgeInDays = Math.round(personAge * 365.24)
  const totalDaysThisYear = getMonthsInDays(monthNow)

  console.log(`Pessoa com ${personAge} anos: `, personAgeInDays) 
  const daysThisYear = totalDaysThisYear - (30 - dayNow) - (Math.round(30.437 - 28))
  console.log(`Qtd. de dias neste ano: ${totalDaysThisYear}`) 
  const daysBeforePersonBirthday = personAgeInDays + totalDaysThisYear

  // Saída
  functionDb.title("RELATÓRIO")
  // functionDb.content()
  functionDb.footer("FIM DA EXECUÇÃO")
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
