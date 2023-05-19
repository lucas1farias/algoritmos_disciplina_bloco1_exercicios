

/*
17. 1/1 + 1/2 + 1/3 + ... 1/n
*/

import { question } from "readline-sync"

function main() {
  saltar_linha()
  const valor_progressao = entrada_num('Digite um valor correspondente ao limite de uma progressão')
  // const valor_progressao = 5
  relatorio()
  exibir(progressao(valor_progressao))
  fim()
}

// Funções de apoio
function saltar_linha() {
  exibir('\n')
}

function entrada_num(conteudo) {
  return Number(question(conteudo + ' -----> '))
}

function relatorio() {
  exibir('\n========== RELATÓRIO ==========')
}

function exibir(conteudo) {
  console.log(conteudo)
}

function fim() {
  exibir('========== FIM ==========\n')
}

// Funções de funcionalidade
function progressao(n) {
  let resultado = ''
  let calculo = 0
  let dividendo = 1
  let divisor = 1

  while (divisor <= n) {
    if (divisor < n) {
      resultado += `${dividendo}/${divisor} + `
    } else {
      resultado += `${dividendo}/${divisor}`
    }
    calculo += 1 / divisor
    divisor++
    console.log(resultado)
  }
  return calculo
}

main()
