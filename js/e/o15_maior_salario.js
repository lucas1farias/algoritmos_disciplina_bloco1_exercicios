

/*
15. Leia a quantidade de horas aula dadas por dois professores e o valor por hora recebido por cada um.
Escreva na tela qual dos professores tem salário total maior.
*/ 

import * as functionDb from "../../functions.js"

function main() {
  // Entradas
  const hoursWorkedTeacher1 = functionDb.numericInput("Informe a qtd. de horas aula do professor A ---> ")
  const paymentPerHourTeacher1 = functionDb.numericInput("Quanto o prof. 1 recebe por hora aula ---> ")
  const hoursWorkedTeacher2 = functionDb.numericInput("Informe a qtd. de horas aula do professor A ---> ")
  const paymentPerHourTeacher2 = functionDb.numericInput("Quanto o prof. 2 recebe por hora aula ---> ")  
  // const hoursWorkedTeacher1 = 102
  // const paymentPerHourTeacher1 = 44
  // const hoursWorkedTeacher2 = 90
  // const paymentPerHourTeacher2 = 70

  // Processamento
  const salarayTeacher1 = getSalary(hoursWorkedTeacher1, paymentPerHourTeacher1)
  const salarayTeacher2 = getSalary(hoursWorkedTeacher2, paymentPerHourTeacher2)
  const difference = (salarayTeacher1 - salarayTeacher2).toFixed(2)
  const differenceShaped = Math.abs(difference)
  let report = ''
  const proof = `Professor 1: (R$ ${salarayTeacher1}) || Professor 2: (R$ ${salarayTeacher2})`

  if (salarayTeacher1 > salarayTeacher2) {
    report = `Professor + rico: 1 [Dif. salarial: ${differenceShaped}]`
  } else if (salarayTeacher1 < salarayTeacher2) {
    report = `Professor + rico: 2 [Dif. salarial: ${differenceShaped}]`
  } else {
    report = `Ambos professores recebem o mesmo salário`
  }

  // Saída
  functionDb.title("RELATÓRIO")
  
  functionDb.content(report)
  functionDb.content(proof)
  functionDb.footer("FIM DA EXECUÇÃO")
}

function getSalary(hoursWorked, hourPayment) {
  return hoursWorked * hourPayment 
}

main()
