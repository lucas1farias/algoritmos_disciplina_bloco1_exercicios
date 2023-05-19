

// problema 21
// Leia uma temperatura em °F, calcule e escreva a equivalente em °C. (t°C = (5 * t°F - 160) / 9).

import * as functionDb from "../../functions.js"

function main() {
  functionDb.title('BEM-VINDO AO CONVERSOR DE DE TEMPERATURA FAHRENHEIT -> CELSIUS')
  
  // Entrada
  const fahrenheitTemp = functionDb.numericInput('Informe um valor em temperatura fahrenheit ---> ')
  
  // Processamento
  const celsius = fahrenheitToCelsius(fahrenheitTemp)
  
  // Saída
  functionDb.title('RELATÓRIO')
  functionDb.content(`${fahrenheitTemp}°F = ${celsius}°C`)
  functionDb.footer('FIM DA EXECUÇÃO')
}

function fahrenheitToCelsius(fahrenTemperature) {
  const calculus = (5 * fahrenTemperature - 160) / 9
  return calculus.toFixed(2)
}

main()
