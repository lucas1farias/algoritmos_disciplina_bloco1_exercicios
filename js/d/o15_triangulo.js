

/*
15. Leia o valor da base e altura de um triângulo, calcule e escreva sua área. (área=(base * altura)/2)
*/

import { question } from "readline-sync"

function main() {
  // Entradas
  const triangleBase = Number(question('Digite a base do triângulo ---> '))
  const triangleHeight = Number(question('Digite a altura do triângulo ---> '))

  // Processamento
  const calculus = get_triangle_base(triangleBase, triangleHeight) 

  // Saída
  const title = '\n===== RELATÓRIO =====\n'
  const report = title + 'Área do triângulo de base ' + triangleBase + ' e altura ' + triangleHeight + ': ' + calculus + '\n'

  display(report)
}

function get_triangle_base(base, height, decimal_fields) {
  return ((base * height) / 2).toFixed(decimal_fields)
}

function display(content) {
  console.log(content)
}

main()
