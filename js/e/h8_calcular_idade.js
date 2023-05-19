

/*
8. Leia data atual (dia, mês e ano) e data de nascimento (dia, mês e ano) de uma pessoa, calcule e escreva
sua idade exata (em anos).
*/ 

import * as functionDb from "../../functions.js"

function main() {
  // Entradas
  const birthDay = functionDb.numericInput("Informe o dia do mês que você nasceu ---> ")
  const birthMonth = functionDb.numericInput("Informe o mês em que você nasceu ---> ")
  const birthYear = functionDb.numericInput("Informe o ano em que você nasceu ---> ")
  const dayNow = functionDb.numericInput("Informe o dia do mês de hoje ---> ")
  const monthNow = functionDb.numericInput("Informe o mês atual ---> ")
  const yearNow = functionDb.numericInput("Informe o ano atual ---> ")
  // const birthDay = 16
  // const birthMonth = 7
  // const birthYear = 1992
  // const dayNow = 25
  // const monthNow = 3
  // const yearNow = 2023

  // Processamento
  const personAge = getAge(birthDay, birthMonth, birthYear, dayNow, monthNow, yearNow)
  const birth = `${birthDay}/${birthMonth}/${birthYear}`
  const dateNow = `${dayNow}/${monthNow}/${yearNow}`
  const report = `Se você nasceu em ${birth} e hoje é ${dateNow}, então você está com ${personAge} anos.`

  // Saída
  functionDb.title("RELATÓRIO")
  functionDb.content(report)
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
  // console.log('IDADE:', age)
  return age
}

main()
