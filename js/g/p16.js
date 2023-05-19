

/*
16. Leia um número N, calcule e escreva os N primeiros termos de seqüência de Fibonacci
(0,1,1,2,3,5,8,...). O valor lido para N sempre será maior ou igual a 2.
*/

import { question } from "readline-sync"

function main() {
  saltar_linha()

  // Entrada
  // const n = 8
  const n = entrada_num('Informe um valor limite para a progressão de um sequência Fibonacci')

  // Processamento
  const seq_fibonacci = fibonacci(n)
  const saida = `Progressão com 7 sequências:\n${seq_fibonacci}`

  // Saída
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
function fibonacci(n) {
  let anterior = 0
  let posterior = 1
  let atual = 0
  let contador = ''
  // let contador = '0 1'
  let i = 0

  while (i < n) {
    atual = anterior + posterior
    contador += ` ${atual}`
    anterior = posterior
    posterior = atual
    i++
  }
  
  return contador
}

main()
