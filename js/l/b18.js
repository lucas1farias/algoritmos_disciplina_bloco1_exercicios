

/*
18. 1/n + 2/n-1 + 3/ n-2 + ... n/1
*/

import { question } from "readline-sync"

function main() {
  saltar_linha()
  const valor_progressao = entrada_num('Digite um valor máximo para a progressão')
  // const valor_progressao = 5
  relatorio()
  exibir(`Soma das frações: ${fracoes_somadas(valor_progressao)}`)
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
function fracoes_somadas(n) {
  let calculo = 1/n

  for (let i = 2; i <= n; i++) {
    calculo += (i / (n - (i - 1)))
  }
  return calculo
}

main()
