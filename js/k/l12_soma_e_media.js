

/*
12. Leia N e uma lista de N números e escreva a soma e a média de todos os números da lista.
*/

import { question } from "readline-sync"

function main() {
  saltar_linha()
  const qtd_numeros = entrada_num('Digite um valor correspondente a qtd. de números')
  const numeros = entrada_txt('Digite os números (separados por espaço)')
  // const qtd_numeros = 3
  // const numeros = '7 7 7.6'
  const numeros_lista = tornar_lista(numeros, ' ')
  const somatorio = contar_de_ate(qtd_numeros, numeros_lista)
  const media = obter_media(somatorio, qtd_numeros)
  const saida = `Média da soma dos números: ${numeros_lista}\n${somatorio} / ${qtd_numeros} = ${media}`
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

function obter_media(soma, qtd) {
  return soma / qtd
}

function contar_de_ate(max, lista) {
  let contador_externo = 0
  
  for (let i = 0; i < max; i++) {
    contador_externo += parseFloat(lista[i])
  }
  return contador_externo
}

main()
