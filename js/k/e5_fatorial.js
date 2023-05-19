

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
  if (numero == 0) {
    return 1
  } 
  else {
    let contador_externo = 1
    let calculo = 0

    for (let i = 1; i <= numero; i++) {
      calculo = contador_externo *= i
    }
    return calculo
  }
}

main()
