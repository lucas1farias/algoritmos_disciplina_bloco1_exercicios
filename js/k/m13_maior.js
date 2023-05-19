

/*
13. Leia N e uma lista de N números e escreva o maior número da lista.
*/

import { question } from "readline-sync"

function main() {
  saltar_linha()
  const qtd_numeros = entrada_num('Digite um valor correspondente a qtd. de números')
  const numeros = entrada_txt('Digite os números (separados por espaço)')
  // const qtd_numeros = 3
  // const numeros = '7 7.7 7.2'
  const numeros_lista = tornar_lista(numeros, ' ')
  const maior = obter_maior(qtd_numeros, numeros_lista)
  const saida = `O maior número da lista (${numeros_lista}) é: ${maior}`
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
function tornar_lista(alvo, separador) {
  return alvo.split(separador)
}

function obter_maior(qtd_numeros, lista) {
  let min = Infinity
  let max = -min

  for (let i = 0; i < qtd_numeros; i++) {
    if (parseFloat(lista[i]) <= min) {
      min = lista[i]
    }
    if (lista[i] >= max) {
      max = lista[i]
    }
  }
  return max
}

main()
