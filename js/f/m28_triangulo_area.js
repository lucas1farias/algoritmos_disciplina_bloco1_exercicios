

/*
28. Leia as coordenadas cartesianas (x e y) de 2 (dois) pontos no plano, que corresponderão a dois cantos de
um retângulo. Baseado nisto, calcule e escreva a área deste retângulo. Lembre-se de que o valor da área
não pode ser negativo.
*/

import * as functionDb from "../../functions.js"

function main() {
  // Entradas
  const rectBase = functionDb.numericInput('Informe um valor X em um plano cartesiano ---> ')
  const rectHeight = functionDb.numericInput('Informe um valor Y em um plano cartesiano ---> ')
  // const rectBase = 12
  // const rectHeight = 7

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

function getRectangleArea(base, height) {
  return base * height
}

function repeatableContent(additional) {
  functionDb.title("RELATÓRIO")
  functionDb.content(additional)
  functionDb.footer("FIM DA EXECUÇÃO")
}

main()
