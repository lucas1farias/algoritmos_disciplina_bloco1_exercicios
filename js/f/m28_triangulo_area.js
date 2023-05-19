

/*
28. Leia as coordenadas cartesianas (x e y) de 2 (dois) pontos no plano, que corresponderão a dois cantos de
um retângulo. Baseado nisto, calcule e escreva a área deste retângulo. Lembre-se de que o valor da área
não pode ser negativo.
*/

import { question } from "readline-sync"

function main() {
  // Entradas
  // const rectBase = 12
  // const rectHeight = 7
  const rectBase = numericInput('Informe um valor X em um plano cartesiano ---> ')
  const rectHeight = numericInput('Informe um valor Y em um plano cartesiano ---> ')

  // Processamento
  const rectArea = getRectangleArea(rectBase, rectHeight)
  const report = `Área de um retângulo de base X=${rectBase} e altura Y=${rectHeight}: ${rectArea}`
  const mistake = `Um retângulo não possui área negativa!`

  if (rectArea >= 0) {
    repeatableContent(report)
  } else {
    repeatableContent(mistake)
  }
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

function getRectangleArea(base, height) {
  return base * height
}

function repeatableContent(additional) {
  title("RELATÓRIO")
  content(additional)
  footer("FIM DA EXECUÇÃO")
}

main()
