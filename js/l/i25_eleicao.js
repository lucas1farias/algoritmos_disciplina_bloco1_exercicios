

/*
25. Em uma eleição presidencial existem 3 (três) candidatos. Os votos são informados através de códigos.
Os dados utilizados para a contagem dos votos obedecem à seguinte codificação:
· 1, 2, 3 = voto para os respectivos candidatos;
· 9 = voto nulo;
· 0 = voto em branco;
Escreva um algoritmo que leia o código votado por N eleitores. Ao final, calcule e escreva:
a) total de votos para cada candidato;
b) total de votos nulos;
c) total de votos em branco;
d) quem venceu a eleição.
*/

import { question } from "readline-sync"

function main() {
  saltar_linha()

  // Entrada
  
  // const voto = painel + enunciado
  const n = entrada_num('Digite o número de votantes')
  
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
  let voto = undefined

  const painel = `===== CANDIDATOS =====\n1. Fulano\n2. Ciclano\n3. Beltrano\n9. Voto nulo\n0. Voto branco\n`
  const enunciado = '\nEscolha um dos valores acima para o seu voto'

  for (let i = 0; i < rept; i++) {
    voto = entrada_num(painel + enunciado)
    exibir(`\nVoto computado: ${voto}\n`)
  }
}

main()
