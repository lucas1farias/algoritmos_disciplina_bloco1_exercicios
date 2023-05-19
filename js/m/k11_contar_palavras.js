

import { question } from "readline-sync"

function main() {
  saltar_linha()

  // Entrada
  // const frase = 'Eu gosto de andar de bicicleta, faço isso diariamente.'
  const frase = entrada_txt('Digite uma frase para verificar a quantidade de palavras nela')
  
  // Processamento
  const frase_lista = tornar_lista(frase, ' ')
  const qtd_palavras = eh_palavra(frase_lista)
  const saida = `Texto: ${frase}\nPalavras encontradas: ${qtd_palavras}`

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

function valor_entre(ref, min, max) {
  return ref >= min && ref <= max
}

function obter_codigo_letra(char) {
  return char.charCodeAt(0)
}

function eh_letra(char) {
  const codigo_ascii = obter_codigo_letra(char)
  const eh_letra_maiuscula = valor_entre(codigo_ascii, 65, 90)
  const eh_letra_minuscula = valor_entre(codigo_ascii, 97, 122)
  
  return eh_letra_maiuscula || eh_letra_minuscula ? true : false
}

function eh_letra_global(txt) {
  let contador = 0
  for (let i = 0; i < txt.length; i++) {
    !eh_letra(txt[i]) ? contador++ : null
  }
  return contador <= 1 ? true : false
}

function eh_palavra(colecao) {
  let n_palavras = 0

  for (let i = 0; i < colecao.length; i++) {
    eh_letra_global(colecao[i]) ? n_palavras++ : null
  }
  return n_palavras
}

main()
