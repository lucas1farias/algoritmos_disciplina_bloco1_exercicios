

/*
21. Leia uma temperatura em °F, calcule e escreva a equivalente em °C. (t°C = (5 * t°F - 160) / 9).
*/

import { question } from "readline-sync"

function main() {
  // Entrada
  const fahrenheitTemp = Number(question('Digite um valor em temperatura fahrenheit ---> '))

  // Processamento
  const conversion = get_fahrenheit_to_celsius(fahrenheitTemp, 2)

  // Saída
  const title = '\n===== RELATÓRIO =====\n'
  const report = title + fahrenheitTemp + '°F equivale a ' + conversion + '°C\n'

  display(report)
}

function get_fahrenheit_to_celsius(f, decimal_places) {
  const adittionalTemp = 160
  const calculus = (5 * f - adittionalTemp) / 9
  return calculus.toFixed(decimal_places)
}

function display(content) {
  console.log(content)
}

main()
