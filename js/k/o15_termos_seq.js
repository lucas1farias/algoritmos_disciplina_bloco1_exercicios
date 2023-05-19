/*
15. Leia N, calcule e escreva os N primeiros termos de seqüência (1, 3, 6, 10, 15,...).
*/

import { question } from "readline-sync"

function main() {
  saltar_linha()
  const qtd_numeros_mostrar = entrada_num('Digite um número correspondente a qtd. de índices percorridos')
  const string_numeros = entrada_txt('Digite um conjunto de números (separados por espaço)')
  // const qtd_numeros_mostrar = 2
  // const string_numeros = '1 2 7 10'

  const lista_numeros = tornar_lista(string_numeros, ' ')
  const lista_filtrada = exibir_dados_parcialmente(qtd_numeros_mostrar, lista_numeros)
  const saida = `Exibindo ${qtd_numeros_mostrar} termos da sequência: ${lista_numeros}`
  
  relatorio()
  if (lista_filtrada == '') {
    exibir(saida)
    exibir('...')
  } else {
    exibir(saida)
    exibir(lista_filtrada)
  }
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

function exibir_dados_parcialmente(filtro, lista) {
  let i = 0
  let grupo_exibido = ''

  for (let i = 0; i < filtro; i++) {
    grupo_exibido += lista[i] + ' '
  }

  return grupo_exibido
}

main()
