

/*
20. S = 1/1 - 1/2 + 1/3 - ... 1/n
*/

import { question } from "readline-sync"

function main() {
  saltar_linha()
  
  // Entrada
  // const valor_progressao = 4
  const valor_progressao = entrada_num('Digite um valor correspondente ao limite de uma progressão')

  // Processamento
  const calculo = progressao(valor_progressao)
  const saida = `Valor da progressão entre dividendos (ímpares - pares): ${calculo}`

  relatorio()
  exibir(saida)
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
function eh_par(n) {
  return n % 2 === 0
}

function progressao(n) {
  let calculo = 0
  let dividendo = 1
  let divisor = 1

  while (divisor <= n) {

    if (!eh_par(divisor)) {
      calculo += (dividendo / divisor)
    } else {
      calculo -= (dividendo / divisor)
    }

    divisor++
  }
  return calculo
}


main()
