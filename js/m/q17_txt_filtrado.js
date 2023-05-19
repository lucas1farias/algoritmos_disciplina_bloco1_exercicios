

/*
17. Escreva uma sub-rotina de nome substr, que extraia uma sub-cadeia de uma string. Ex.: substr(texto,
10, 20), extrairá 20 caracteres de texto a partir do caractere na posição 10.
*/

import { question } from "readline-sync"

function main() {
  saltar_linha()

  // Entradas
  // const palavra = 'Javascript'
  // const i_inicial = 2
  // const i_final = 4
  const palavra = entrada_txt('Digite uma palavra a ter seus caracteres filtrados')
  const i_inicial = entrada_num('Digite a posição inicial de remoção (começa do zero)')
  const i_final = entrada_num('Digite a posição final de remoção')
  
  // Processamento
  const saida = substr(palavra, i_inicial, i_final)
  
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
function substr(txt, min, max) {
  let container = ''
  
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
    }
    if (i > min && i > max) {
      container += txt[i]
    }
  }
  
  return container
}

main()
