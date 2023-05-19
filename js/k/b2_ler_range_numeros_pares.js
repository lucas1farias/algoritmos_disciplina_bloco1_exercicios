

/*
2. Leia N e escreva todos os números inteiros pares de 1 a N.
*/

import { question } from "readline-sync"

function main() {
  saltar_linha()
  const numero = entrada_num('Digite um número')
  relatorio()
  exibir_numeros_em_progressao(numero)
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
function exibir_numeros_em_progressao(n) {
  for (let contador = 1; contador <= n; contador++) {
      if (eh_par(contador)) {
        exibir(contador)
      }
  }
}

function eh_par(n) {
  return n % 2 == 0
}

main()
