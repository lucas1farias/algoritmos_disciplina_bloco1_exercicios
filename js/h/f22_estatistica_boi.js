

/*
22. Um fazendeiro possui fichas de controle sobre sua boiada. Cada ficha contém numero de identificação,
nome e peso (em kg) do boi. Escreva um algoritmo que leia os dados de N fichas e ao final, escreva o
numero de identificação e o peso do boi mais magro e do boi mais gordo.
*/

import { question } from "readline-sync"

function main() {
  saltar_linha()

  // Entrada
  const n = entrada_num('Digite a qtd. de fichas a serem verificadas')

  // Processamento
  loop(n)

  // Saída
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

function entrada_txt(conteudo) {
  return question(conteudo + ' -----> ')
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
function loop(rept) {
  let motor = 0
  let id_boi = undefined
  let nome_boi = undefined
  let peso_boi = undefined

  while (motor < rept) {
    id_boi = entrada_num('Código identificador do boi')
    nome_boi = entrada_txt('Nome do boi')
    peso_boi = entrada_num('Peso do boi')
    exibir(`\nID do boi: ${id_boi}\nNome do boi: ${nome_boi}h\nPeso do boi: ${peso_boi}\n`)
    motor++
  }
}

main()
