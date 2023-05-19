

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

function tabuada() {
  let contador = 0
  let fixo = 10
  
  let alvo = 1
  let multiplicador = 0
  
  while (contador <= (fixo ** 2) + 9) {
    exibir(`${alvo} x ${multiplicador} = ${alvo * multiplicador}`) 
    contador++
    multiplicador++

    if (multiplicador == 11) {
      multiplicador = 0
      alvo++
    }
  }
}

main()
