
/*
6. Leia 3 (três) números (cada número corresponde a um ângulo interno do triângulo), verifique e escreva
se os 3 (três) números formam um triângulo (a soma dos ângulos internos é igual a 180º). Se formam,
verifique se formam um triângulo acutângulo (3 ângulos < 90º), retângulo (1 ângulo = 90º) ou
obtusângulo (1 ângulo > 90º). Não existe ângulo com tamanho 0º (zero grau).
*/

import * as functionDb from "../../functions.js"

function main() {
  // Entradas
  const angle1st = functionDb.numericInput("Informe o valor do primeiro ângulo ---> ")
  const angle2nd = functionDb.numericInput("Informe o valor do segundo ângulo ---> ")
  const angle3rd = functionDb.numericInput("Informe o valor do terceiro ângulo ---> ")
  // const angle1st = 20
  // const angle2nd = 60
  // const angle3rd = 100

  // Processamento
  const anglesSum = triangleAnglesSum(angle1st, angle2nd, angle3rd)
  const isTriangle = isItTriangle(anglesSum)
  let triangleLabel
  
  if (isTriangle) {
    triangleLabel = getTriangleType(angle1st, angle2nd, angle3rd)
  } else {
    functionDb.content("Os ângulos informados não formam um triângulo")
    return
  }

  // Saída
  functionDb.title("RELATÓRIO")
  functionDb.content(`Ângulos do triângulo: [${angle1st}, ${angle2nd}, ${angle3rd}]`)
  functionDb.content(triangleLabel)
  functionDb.footer("FIM DA EXECUÇÃO")
}

function triangleAnglesSum(angle1, angle2, angle3) {
  return angle1 + angle2 + angle3
}

function isItTriangle(anglesSum) {
  return anglesSum == 180
}

function getTriangleType(angle1, angle2, angle3) {
  if (angle1 < 90 && angle2 < 90 && angle3 < 90) {
    return 'Triângulo Acutângulo'
  } if (angle1 == 90 || angle2 == 90 || angle3 == 90) {
    return 'Triângulo Retângulo'
  } if (angle1 > 90 || angle2 > 90 || angle3 > 90) {
    return 'Triângulo Obtusângulo'
  }
}

main()
