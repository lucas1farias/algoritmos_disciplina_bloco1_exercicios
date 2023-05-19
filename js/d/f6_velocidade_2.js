

/*
6. Leia uma velocidade em km/h, calcule e escreva esta velocidade em m/s. (Vm/s = Vkm/h / 3.6)
*/

import { question } from "readline-sync"

function main() {
  // Entrada
  // let speed = 100
  const speed = Number(question('Digite um valor de velocidade em (km/h) ---> '))

  // Processamento
  const new_speed = km_to_ms(speed, 2)

  // Saída
  const title = '\n===== RELATÓRIO =====\n'
  const report = title + speed + ' km/h = ' + new_speed + ' m/s\n'

  display(report)
}

function km_to_ms(speed, decimal_places) {
  const conversion = 3.6
  return (speed / conversion).toFixed(decimal_places)
}

function display(content) {
  console.log(content)
}

main()
