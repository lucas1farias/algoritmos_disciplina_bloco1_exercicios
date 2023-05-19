

/*
20. Leia a medida de um ângulo (entre 0 e 360°) e escreva o quadrante (primeiro, segundo, terceiro ou
quarto) em que o ângulo se localiza.
*/

import { question } from "readline-sync"

function main() {
  // Entradas
  // const angle = 271
  const angle = numericInput("Informe um valor de ângulo entre 0 a 360 ---> ")
  
  // Processamento
  const angleLocation = angleQuadrant(angle)

  // Saída
  title("RELATÓRIO")
  content(angleLocation)
  footer("FIM DA EXECUÇÃO")
}

function numericInput(content) {
  return Number(question(content))
}

function title(this_content) {
  content(`\n========== ${this_content} ==========\n`)
}

function content(content) {
  console.log(content)
}

function footer(this_content) {
  content(`\n========== ${this_content} ==========\n`)
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
