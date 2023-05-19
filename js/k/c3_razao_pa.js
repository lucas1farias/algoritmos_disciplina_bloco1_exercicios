

/*
Leia as variáveis A0, Limite e R e escreva os valores menores que Limite gerados pela Progressão
Aritmética que tem por valor inicial A0 e razão R.
*/

import { question } from "readline-sync"

function main() {
  saltar_linha()
  const numero = entrada_num('Digite um número inicial')
  const limite = entrada_num('Digite um número limite')
  const razao = entrada_num('Digite um número incrementador')
  // const numero = 2
  // const limite = 10
  // const razao = 3
  relatorio()
  monitorar_razao(numero, limite, razao)
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
function monitorar_razao(n_inicial, n_final, razao) {
  for (let i = n_inicial; i < n_final; i = i + razao) {
    exibir(i)
  }
}

main()
