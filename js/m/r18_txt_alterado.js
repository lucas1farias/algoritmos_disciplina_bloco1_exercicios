

/*
17. Escreva uma sub-rotina de nome substituir_cadeia_char, que extraia uma sub-cadeia de uma string. Ex.: substituir_cadeia_char(texto,
10, 20), extrairá 20 caracteres de texto a partir do caractere na posição 10.
*/

import { question } from "readline-sync"

function main() {
  saltar_linha()

  // Entrada
  // const palavra = 'Javascript'
  // const i_inicial = 3
  // const i_final = 5
  const palavra = entrada_txt('Digite uma palavra a ter seus caracteres filtrados')
  const i_inicial = entrada_num('Digite a posição inicial de remoção (começa do zero)')
  const i_final = entrada_num('Digite a posição final de remoção')
  const nova_cadeia_palavras = entrada_txt('Digite uma palavra substituta')
  
  // Processamento
  const saida = substituir_cadeia_char(palavra, i_inicial, i_final, nova_cadeia_palavras)
  
  // Saída
  relatorio()
  exibir(saida)
  fim()
}

// Funções de apoio
function saltar_linha() {
  exibir('\n')
}

function entrada_txt(conteudo) {
  return question(conteudo + ' -----> ')
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
function substituir_cadeia_char(txt, min, max, particula) {
  let container = ''

  if (min == 0) {
    min = -1
  }
  
  for (let i = 0; i < txt.length; i++) {
    if (i < min) {
      container += txt[i]
    }
    if (i == min) {
      container += txt[i]
    }
    if (i > min && i < max) {
      container += ''
    }
    if (i == max) {
      container += ''
      container += particula
    }
    if (i > min && i > max) {
      container += txt[i]
    }
  }
  
  return container
}

main()
