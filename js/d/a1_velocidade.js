

/*
1. Leia uma velocidade em m/s, calcule e escreva esta velocidade em km/h. (Vkm/h = Vm/s * 3.6)
*/ 

import { question } from "readline-sync"

function main() {
  // Entrada
  // let speed = 10
  const speed = Number(question('Digite a velocidade em (m/s) ---> '))

  // Processamento
  const calculus = speed_km_ms(speed)

  // Saída
  const title = '\n===== RELATÓRIO =====\n'
  const report = title + speed + ' m/s' + ' equivale à ' + calculus + 'km/h\n'

  display(report)
}

function display(content) {
  console.log(content)
}

function speed_km_ms(vel) {
  const convercao = 3.6
  return (vel * convercao).toFixed(2)
}

main()

/*
function main() {

}

function display(content) {
  console.log(content)
}

main()
*/