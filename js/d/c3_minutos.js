

/*
3. Leia um valor em minutos, calcule e escreva o equivalente em horas e minutos.
*/

import { question } from "readline-sync"

function main() {
  // Entrada
  // const minute = 72
  const minute = Number(question('Digite um valor em minutos (ex: 1, 12, 24) ---> '))

  // Processamento
  const conversion = min_to_hour(0, minute)

  // Saída (forma 1)
  const title = '\n===== RELATÓRIO ====='
  display(title)
  display(conversion)
}

function display(content) {
  console.log(content)
}

function min_to_hour(type, value) {
  const minuteValue = 60
  
  if (type == 0) {
    // Processamento (forma 1)
    const divisionRemainings = parseInt(value / 60)
    const minutesRemainings = value % minuteValue
    return `${value} minuto(s) = ${divisionRemainings}h:${minutesRemainings}min`
  } 
  else {
    // Processamento (forma 2)
    const divisionRemainingsB = Math.floor(value / minuteValue)
    const minutesRemainingsB = value % minuteValue
    return `${value} minuto(s) = ${divisionRemainingsB}h:${minutesRemainingsB}min`
  }
}

main()
