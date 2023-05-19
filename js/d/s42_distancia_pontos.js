

/*
42. Escreva um algoritmo que, tendo como dados de entrada 2 pontos quaisquer no plano, ponto1 (x1,y1) e
ponto2 (x2,y2), escreva a distância entre eles, conforme fórmula abaixo.
*/

import { question } from "readline-sync"

function main() {
  // Entrada
  const x1 = Number(question('Digite o vetor x1 ---> '))
  const y1 = Number(question('Digite o vetor y1 ---> '))
  const x2 = Number(question('Digite o vetor x2 ---> '))
  const y2 = Number(question('Digite o vetor y2 ---> '))

  // Processamento
  const distance = get_distance_between_points(x1, y1, x2, y2, 2)

  // Saída
  const title = '\n===== RELATÓRIO =====\n'
  const report = title + 'Distância dos pontos: ' + distance + '\n'

  display(report)
}

function get_distance_between_points(x1, y1, x2, y2, decimal_places) {
  const firstPart = (x2 - x1) ** 2
  const secondPart = (y2 - y1) ** 2
  return (Math.sqrt(firstPart + secondPart).toFixed(decimal_places))
}

function display(content) {
  console.log(content)
}

main()
