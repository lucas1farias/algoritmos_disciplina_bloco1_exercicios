

/*
5. Leia uma data no formato DD/MM/AAAA e escreva o mês por extenso (DD de mês de AAAA).
*/

import { question } from "readline-sync"

function main() {
  saltar_linha()

  // Entrada
  // const data = '04/11/2022'
  const data = entrada_txt('Digite uma data contendo: dia, mês, ano (formato: DD/MM/AAAA)')

  // Processamento
  const data_lista = tornar_lista(data, '/')
  const mes = parseInt(data_lista[1])
  const mes_txt = obter_mes(mes)
  const data_formatada = `${data_lista[0]} de ${mes_txt} de ${data_lista[2]}`
  const saida = `Data antes: ${data} ... Data agora: ${data_formatada}`

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

function criar_conjunto(min, max) {
  let container = []
  
  for (let i = min; i <= max; i++) {
    container.push(i)
  }
  
  return container
}

function obter_mes(id) {
  let mes = ''
  const meses = tornar_lista(
    '.janeiro.fevereiro.março.abril.maio.junho.julho.agosto.setembro.outubro.novembro.dezembro', '.'
  )
  const meses_id = criar_conjunto(0, 12)
  
  for (let i = 1; i < meses_id.length; i++) {
    i == id ? mes += meses[i] : mes += ''
  }
  return mes
}

main()
