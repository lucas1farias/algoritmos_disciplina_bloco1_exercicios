

/*
2. Leia uma frase e mostre cada palavra da frase em uma linha separada
*/

import { question } from "readline-sync"

function main() {
  saltar_linha()
  
  // Entrada
  // const frase = 'Javascript é uma linguagem de programação'
  const frase = entrada_txt('Digite uma frase e veja a impressão de cada linha')
  
  // Saída
  relatorio()
  quebrar_linhas(tornar_lista(frase, ' '))
  fim()
}

// Funções de apoio
function saltar_linha() {
  exibir('\n')
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
function tornar_lista(colecao, separador) {
  return colecao.split(separador)
}

function quebrar_linhas(colecao) {
  for (let i = 0; i < colecao.length; i++) {
    exibir(colecao[i] + '\n')
  }
}

main()
