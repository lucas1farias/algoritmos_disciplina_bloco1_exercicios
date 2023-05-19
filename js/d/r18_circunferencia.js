


/*
18. Leia o valor do raio de uma circunferência, calcule e escreva seu comprimento.(c = 2 * p * r)

// RAIO        || distância do centro do círculo até uma de suas extremidades
// DIÂMETRO    || Dobro do valor do RAIO 
// COMPRIMENTO || Tamanho da medida da volta dada ao redor do círculo (também chamado de PERÍMETRO)
// PI          || Valor usado na fórmula do cálculo da área do círculo
*/

import { question } from "readline-sync"

function main() {
  // Entrada
  const radius = Number(question('Digite o valor do raio ---> '))

  // Processamento
  const lengthCalculus = get_length(radius)
  const areaCalculus = get_area(radius)

  // Saída
  const report = `
  ===== RELATÓRIO: cálculos da circunferência =====
  Comprimento || ${lengthCalculus}
  Área        || ${areaCalculus}
  `

  display(report)
}

function get_length(radius) {
  const pi = 3.14159
  return pi * (radius * 2) 
}

function get_area(radius) {
  const pi = 3.14159
  return pi * (radius * radius)
}

function display(content) {
  console.log(content)
}

main()
