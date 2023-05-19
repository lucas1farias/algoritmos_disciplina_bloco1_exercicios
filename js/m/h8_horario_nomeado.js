

/*
8. Leia uma string no formato hh:mm:ss e escreva o resultado na seguinte forma: “hh hora(s), mm
minuto(s) e ss segundo(s)”.
*/

import { question } from "readline-sync"

function main() {
  saltar_linha()

  // Entrada
  // const data = '22:33:44'
  const data = entrada_txt('Digite uma hora em formato (hh:mm:ss)')
  
  // Processamento
  const data_lista = tornar_lista(data, ':')
  const h = complementar(data_lista, data_lista[0], ' horas(s), ')
  const min = complementar(data_lista, data_lista[1], ' minuto(s) e ')
  const seg = complementar(data_lista, data_lista[2], ' segundo(s) ')
  const hora_editada = h + min + seg

  // Saída
  relatorio()
  exibir(hora_editada)
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

function complementar(colecao, alvo, complemento) {
  let alvo_editado = ''
  
  for (let i = 0; i < colecao.length; i++) {
    if (colecao[i] == alvo) {
      alvo_editado = colecao[i] + complemento
    }
  }
  return alvo_editado
}

main()
