

/* Escreva a tabuada dos números de 1 a 10. */

import { question } from "readline-sync"

function main() {
  saltar_linha()
  relatorio()
  tabuada()
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
function tabuada() {
  let alvo = 1
  let sintaxe = ''
  for (let i = 0; i <= 10; i++) {
    sintaxe = `${alvo} x ${i} = ${alvo * i}`
    exibir(sintaxe)

    if (i == 10) {
      alvo++
      i = -1
    }

    if (alvo == 11) {
      break
    }
  }
}

main()
