

/* 
24. Leia um valor em m, calcule e escreva o equivalente em cm
*/

import { question } from "readline-sync"

function main() {
  // Entrada
  const value = Number(question('Digite um valor em (m) ---> '))

  // Processamento
  const calculus = size_m_cm(value)

  // Saída
  const title = '\n===== RELATÓRIO =====\n'
  const report = title + value + 'm é o equivalente à: ' + calculus + 'cm' + '\n'

  display(report)
}

function size_m_cm(size) {
  const conversion = 100
  return size * conversion
}

function display(content) {
  console.log(content)
}

main()
