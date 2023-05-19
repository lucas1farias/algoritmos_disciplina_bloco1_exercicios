

/*
8. Leia data atual (dia, mês e ano) e data de nascimento (dia, mês e ano) de uma pessoa, calcule e escreva
sua idade exata (em anos).
*/ 

import { question } from "readline-sync"

function main() {
  // Entradas
  // const birthDay = 16
  // const birthMonth = 7
  // const birthYear = 1992
  // const dayNow = 25
  // const monthNow = 3
  // const yearNow = 2023
  const birthDay = numericInput("Informe o dia do mês que você nasceu ---> ")
  const birthMonth = numericInput("Informe o mês em que você nasceu ---> ")
  const birthYear = numericInput("Informe o ano em que você nasceu ---> ")
  const dayNow = numericInput("Informe o dia do mês de hoje ---> ")
  const monthNow = numericInput("Informe o mês atual ---> ")
  const yearNow = numericInput("Informe o ano atual ---> ")
  
  // Processamento
  const personAge = getAge(birthDay, birthMonth, birthYear, dayNow, monthNow, yearNow)
  const birth = `${birthDay}/${birthMonth}/${birthYear}`
  const dateNow = `${dayNow}/${monthNow}/${yearNow}`
  const report = `Se você nasceu em ${birth} e hoje é ${dateNow}, então você está com ${personAge} anos.`

  // Saída
  title("RELATÓRIO")
  content(report)
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
  const yourAge = yearNow - year
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
