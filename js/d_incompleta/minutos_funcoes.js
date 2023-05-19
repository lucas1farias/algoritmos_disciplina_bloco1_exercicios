

// problema 3
// Leia um valor em minutos, calcule e escreva o equivalente em horas e minutos.

import * as functionDb from "../../functions.js"

function main() {
  functionDb.title('BEM-VINDO AO CONVERSOR DE MINUTOS EM HORAS/MINUTOS')
  
  // Entrada
  const minute = functionDb.numericInput('Digite um valor em minutos (ex: 1, 12, 24) ---> ')
  
  // Processamento
  const hourMinute = minuteIntoHourMinute(minute)
  
  // Saída
  functionDb.title('RELATÓRIO')
  functionDb.content(`Minutagem escolhida || ${minute} min(s)`)
  functionDb.content(`Conversão           || ${hourMinute}`)
  functionDb.footer('FIM DA EXECUÇÃO')
}

function minuteIntoHourMinute(minuteValue) {
  const minuteAsHour = 60
  const hour = Math.floor(minuteValue / minuteAsHour)
  const minuteLeftover = minuteValue % minuteAsHour
  return `${hour}h:${minuteLeftover}min`
}

main()
