

/*
22. Leia a hora do início de um jogo e a hora de fim do jogo (cada hora é composta por 2 variáveis inteiras:
hora e minuto). Calcule e escreva a duração do jogo (horas e minutos), sabendo-se que o tempo
máximo de duração do jogo é de 24 horas e que ele pode iniciar-se em um dia e terminar no dia
seguinte.
*/

import * as functionDb from "../../functions.js"

function main() {
  // Entradas
  let gameStartHour = functionDb.numericInput("Informe a hora que o jogo iniciou ---> ")
  const gameStartMnt = functionDb.numericInput("Informe o minuto que o jogo iniciou ---> ")
  let gameEndHour = functionDb.numericInput("Informe a hora que o jogo terminou ---> ")
  const gameEndMnt = functionDb.numericInput("Informe o minuto que o jogo terminou ---> ")
  
  // TESTES: 23:51 -> 3:33 = 3:42 ... 0:51 -> 3:33 = 2:42
  // let gameStartHour = 23
  // const gameStartMnt = 51
  // let gameEndHour = 3
  // const gameEndMnt = 33

  // Processamento
  const activityReport = `Início: ${gameStartHour}:${gameStartMnt} / Fim: ${gameEndHour}:${gameEndMnt}`
  let report = ''

  if (gameStartHour == 0) {
    gameStartHour = 24
  }

  if (gameEndHour == 0) {
    gameEndHour = 24
  }

  if (gameStartHour == gameEndHour) {
    functionDb.title("RELATÓRIO")
    functionDb.content('Jogo excede as 24 horas de duração!')
    functionDb.footer("FIM DA EXECUÇÃO")
    return
  } 
  
  else if (gameStartHour < gameEndHour) 
  {
    const hourDuration = getTimeDifference('hora', gameStartHour, gameStartMnt, gameEndHour, gameEndMnt)
    const minDuration = getTimeDifference('min', gameStartHour, gameStartMnt, gameEndHour, gameEndMnt)
    const beginning = activityStarted(gameStartHour, gameEndHour)
    report = `A atividade iniciou ${beginning}, com duração: ${hourDuration}h:${minDuration}min`
  } 
  // Hora inicial > Hora final ... Ex: 23:51 -> 03:33 
  else 
  {
    // Cálculo (impreciso, pois desconsidera os minutos)
    const dayInHours = 24
    const newEndHour = (gameEndHour + dayInHours)

    let hourDuration = getTimeDifference('hora', gameStartHour, gameStartMnt, newEndHour, gameEndMnt)
    let minDuration = getTimeDifference('min', gameStartHour, gameStartMnt, newEndHour, gameEndMnt)
    
    // Aqui, não será usado "newEndHour", pois seu uso é SOMENTE p/ calcular corretamente a hora e minutos
    // Sendo assim, a hora continua a original abaixo
    const beginning = activityStarted(gameStartHour, gameEndHour)

    // Correção do cálculo ao final
    hourDuration = hourDuration - 1
    minDuration = 60 - minDuration
    report = `A atividade iniciou ${beginning}, com duração: ${hourDuration}h:${minDuration}min`
    
  }

  functionDb.title("RELATÓRIO")
  functionDb.content(activityReport)
  functionDb.content(report)
  functionDb.footer("FIM DA EXECUÇÃO")
}

function getTimeDifference(category, hour1, hour1Minutes, hour2, hour2Minutes) {
  
  // Teoria: Toda hora final é maior que a hora inicial
  const hourDifference = hour2 - hour1
  let minutesLeftover = 0
  
  // Calcular sobra dos minutos entre as duas horas
  if (hour1Minutes < hour2Minutes) {
    minutesLeftover = hour2Minutes - hour1Minutes
  } else {
    minutesLeftover = hour1Minutes - hour2Minutes
  }
  
  // Se a teoria estiver correta
  if (category == 'hora' && hourDifference > 0) {
    return hourDifference
  } 
  // Se estiver errada
  else if (category == 'hora' && hourDifference < 0) {
    return Math.abs(hourDifference)
  } 
  
  if (category == 'min') {
    return minutesLeftover
  }
}

function activityStarted(hour1, hour2) {
  if (hour2 < hour1) {
    return 'ontem'
  } else {
    return 'hoje'
  }
}

main()
