

/*
17. 1/1 + 1/2 + 1/3 + ... 1/n
*/

import { question } from "readline-sync"

function main() {
  saltar_linha()
  const valor_progressao = 10
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
  let progresso = ''
  let calculo = 0
  let dividendo = 1
  // let divisor = 1

  for (let divisor = 1; divisor <= n; divisor++) {
    if (divisor < n) {
      progresso += `${dividendo}/${divisor} + `
    } else {
      progresso += `${dividendo}/${divisor}`
    }
    calculo += 1 / divisor
    console.log(progresso)
  }
  return calculo
}

main()
