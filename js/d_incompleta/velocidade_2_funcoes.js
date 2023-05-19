

// problema 6
// Leia uma velocidade em km/h, calcule e escreva esta velocidade em m/s. (Vm/s = Vkm/h / 3.6)

import * as functionDb from '../../functions.js'

function main() {
  functionDb.title('BEM-VINDO AO CONVERSOR DE VELOCIDADE (km/h) PARA (m/s)')

  // Entradas
  const speedKmPerHour = functionDb.numericInput('Digite um valor de velocidade em (km/h) ---> ')

  // Processamento
  const speedMetersPerSecond = kmIntoMs(speedKmPerHour)

  // Saída
  functionDb.title('RELATÓRIO')
  functionDb.content(`Velocidade em (km/h) || ${speedKmPerHour}`)
  functionDb.content(`Velocidade em (m/s)  || ${speedMetersPerSecond}`)
  functionDb.footer(`FIM DA EXECUÇÃO`)
}

function kmIntoMs(speedKm) {
  const calculus = speedKm / 3.6
  return calculus
}

main()
