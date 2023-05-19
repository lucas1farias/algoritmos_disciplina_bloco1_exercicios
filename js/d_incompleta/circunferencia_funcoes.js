

/*
========== Problema 18 ==========
. Leia o valor do raio de uma circunferência, calcule e escreva seu comprimento.(c = 2 * p * r)

RAIO        || distância do centro do círculo até uma de suas extremidades
DIÂMETRO    || Dobro do valor do RAIO 
COMPRIMENTO || Tamanho da medida da volta dada ao redor do círculo (também chamado de PERÍMETRO)
PI          || Valor usado na fórmula do cálculo da área do círculo
*/

import * as functionDb from "../../functions.js"

function main() {
  functionDb.title('BEM-VINDO À CALCULADORA DE COMPRIMENTO DA CIRCUNFERÊNCIA')
  
  // Entrada
  const circleRadius = functionDb.numericInput('Digite o valor do raio de uma circunferência ---> ')
  
  // Processamento
  // FÓRMULA: [pi = C/D]  Tecnicamente, pi sempre será multiplicado com D (onde D é o dobro de R)
  const circleLenght = getCircleLength(circleRadius)
  const circleArea = getCircleArea(circleRadius)
  
  // Saída
  functionDb.title('RELATÓRIO')
  functionDb.content(`Comprimento || ${circleLenght}`)
  functionDb.content(`Área        || ${circleArea}`)
  functionDb.footer('FIM DA EXECUÇÃO')
}

function getCircleLength(radius) {
  const pi = Math.PI
  const calculus = pi * (radius * 2)
  return calculus.toFixed(2)
}

function getCircleArea(radius) {
  const pi = Math.PI
  const calculus = pi * (radius * radius)
  return calculus.toFixed(2)
}

main()
