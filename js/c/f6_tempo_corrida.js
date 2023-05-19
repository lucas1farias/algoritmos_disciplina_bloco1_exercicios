

import { question } from "readline-sync"

function main() {
  title('\n========== BEM-VINDO AO CALCULADOR DE TEMPO DE PROVA =========')

  // Entradas
  const runningDistance = numericInput('Informe a distância da corrida em metros ---> ')
  const athleteSpeedKmPerHour = numericInput('Informe a velocidade média em (km/h) do atleta ---> ')

  // Processamento
  const athleteSpeedMetersPerMinute = kmHourIntoMetersMinute(athleteSpeedKmPerHour)

  // Saída
  title('\n========== RELATÓRIO ==========')
  content(`Distância da corrida                         || ${runningDistance} m`)
  content(`Velocidade média do atleta em km/h           || ${athleteSpeedKmPerHour} km/h`)
  content(`Velocidade média do atleta em m/min          || ${athleteSpeedMetersPerMinute} m/min`)
  content(`Expectativa de tempo p/ o término em minutos || ${Math.floor(runningDistance / athleteSpeedMetersPerMinute)} min`)
  footer('========== FIM DA EXECUÇÃO ==========\n')
}

function print(msg) {
  console.log(msg)
}

function title(titleLabel) {
  print(titleLabel)
}

function numericInput(msg) {
  const element = Number(question(msg))
  return element
}

function kmHourIntoMetersMinute(kmValue) {
  // https://www.unitconverters.net/speed/kilometer-hour-to-meter-minute.htm
  const metersPerMinute = (kmValue * 1000) / 60
  return metersPerMinute.toFixed(2)
}

function content(contentLabel) {
  print(contentLabel)
}

function footer(footerLabel) {
  print(footerLabel)
}

main()
