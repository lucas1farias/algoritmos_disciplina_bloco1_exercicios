

/*
S = 1/N - N-1/2 + 3/N-2 - ... +- N/1
*/

import { question } from "readline-sync"

function main() {
  saltar_linha()

  // Entrada
  // const valor_progressao = 5
  const valor_progressao = entrada_num('Digite um valor máximo para a progressão')

  // Processamento
  const calculo = undefined
  
  relatorio()
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
  
}

main()
