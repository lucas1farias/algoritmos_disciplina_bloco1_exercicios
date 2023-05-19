

/*
12. As companhias de transportes aéreos costumam representar os nomes dos passageiros no formato último
sobrenome/nome. Por exemplo, o passageiro Carlos Drummond de Andrade seria indicado por
Andrade/Carlos. Escreva um programa que leia um nome completo e o escreva no formato acima.
*/

import { question } from "readline-sync"

function main() {
  saltar_linha()

  // Entrada
  // const nome_passageiro = 'Carlos Drummond de Andrade'
  const nome_passageiro = entrada_txt('Digite um nome completo')
  
  // Processamento
  const nome_passageiro_copia = copiar(nome_passageiro)
  const nome_lista = tornar_lista(nome_passageiro, ' ')
  const ultimo_nome = nome_lista[nome_lista.length - 1]
  const primeiro_nome = nome_lista[0]
  const nome = renomear(nome_passageiro, ultimo_nome + ' ' + primeiro_nome)
  const saida = `Nome: ${nome_passageiro_copia}\nNome do passageiro no avião: ${nome}`
  
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

function copiar(dado) {
  return dado
}

function renomear(nome_original, nome_novo) {
  nome_original = nome_novo
  return nome_original
}

main()
