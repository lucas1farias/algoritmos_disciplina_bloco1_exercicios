

// problema 15
// Leia o valor da base e altura de um triângulo, calcule e escreva sua área. (área=(base * altura)/2)

import * as functionDb from "../../functions.js"

function main() {
  functionDb.title('BEM VINDO Á CALCULADORA DE BASE DO TRIÂNGULO')

  // Entradas
  const triangleBase = functionDb.numericInput('Digite a base do triângulo ---> ')
  const triangleHeight = functionDb.numericInput('Digite a altura do triângulo ---> ')

  // Processamento
  const triangleArea = getTriangleArea(triangleBase, triangleHeight)

  // Saída
  functionDb.title('RELATÓRIO')
  functionDb.content(`Um triângulo de base ${triangleBase} e altura ${triangleHeight} possui área: ${triangleArea}`)
  functionDb.footer('FIM DA EXECUÇÃO')
}

function getTriangleArea(base, height) {
  const area = ((base * height) / 2)
  return area.toFixed(2)
}

main()
