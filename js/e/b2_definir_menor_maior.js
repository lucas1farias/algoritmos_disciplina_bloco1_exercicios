

/* 
2. Leia 2 (dois) números, verifique e escreva o menor e o maior entre os números lidos.
*/

import { question } from "readline-sync"

function main() {
  
  // Entradas
  const firstNum = numericInput('Informe um primeiro número ---> ')
  const secondNum = numericInput('Informe um segundo número ---> ')
  // const firstNum = -10
  // const secondNum = 5

  // Processamento
  const bigger = compareValues(firstNum, secondNum, 'bigger')
  const smaller = compareValues(firstNum, secondNum, 'smaller')

  // Saída
  title('RELATÓRIO')
  content(`Maior valor: ${bigger}`)
  content(`Menor valor: ${smaller}`)
  footer('FIM DA EXECUÇÃO')
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

function compareValues(v1, v2, category) {
  if (category == 'bigger' && v1 < v2) {
    return v2
  } //
  else if (category == 'bigger' && v1 > v2) {
    return v1
  } //
  else if (category == 'smaller' && v1 < v2) {
    return v1
  } //
  else if (category == 'smaller' && v1 > v2) {
    return v2
  } // 
  if (v1 == v2) {
    return `Valores iguais`
  }
}

main()
