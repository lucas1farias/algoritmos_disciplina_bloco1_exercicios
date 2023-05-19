

/*
5. Leia um número, calcule e escreva seu fatorial.
*/

import { question } from "readline-sync"

function main() {
  saltar_linha()
  const numero = entrada_num('Digite um número para saber seu fatorial')
  // const numero = 10
  relatorio()
  exibir(fatorial(numero))
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
function fatorial(numero) {
  let fatorial = 1
  let posterior = 1

  while (posterior <= numero) {
    fatorial *= posterior
    posterior++
  }

  return fatorial;
}

main()
