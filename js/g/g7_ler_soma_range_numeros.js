

/* 7. Leia um número N, some todos os números inteiros entre 1 e N e escreva o resultado obtido */

import { question } from "readline-sync"

function main() {
  saltar_linha()
  const numero = entrada_num('Digite um número')
  const resultado = contar_de_ate(1, numero)
  const contexto = `A soma dos números 1 até ${numero} é: ${resultado}`
  relatorio()
  exibir(contexto)
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
function contar_de_ate(min, n) {
  let contador_externo = 0
  
  while (min <= n) {
    contador_externo += min
    min++
  }
  return contador_externo
}

main()
