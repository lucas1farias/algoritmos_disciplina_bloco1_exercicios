

/*
20. Leia a medida de um ângulo (entre 0 e 360°) e escreva o quadrante (primeiro, segundo, terceiro ou
quarto) em que o ângulo se localiza.
*/

import * as functionDb from "../../functions.js"

function main() {
  // Entradas
  const angle = functionDb.numericInput("Informe um valor de ângulo entre 0 a 360 ---> ")
  // const angle = 271

  // Processamento
  const angleLocation = angleQuadrant(angle)

  // Saída
  functionDb.title("RELATÓRIO")
  functionDb.content(angleLocation)
  functionDb.footer("FIM DA EXECUÇÃO")
}

function angleQuadrant(angleValue) {
  const firstQuadrant = angleValue <= 90
  const secondQuadrant = angleValue <= 180
  const thirdQuadrant = angleValue <= 270
  const fourthQuadrant = angleValue <= 360
  if (firstQuadrant) {
    return `Quadrante do ângulo ${angleValue}°? Primeiro`
  } else if (secondQuadrant) {
    return `Quadrante do ângulo ${angleValue}°? Segundo`
  } else if (thirdQuadrant) {
    return `Quadrante do ângulo ${angleValue}°? Terceiro`
  } else {
    return `Quadrante do ângulo ${angleValue}°? Quarto`
  }
}

main()
