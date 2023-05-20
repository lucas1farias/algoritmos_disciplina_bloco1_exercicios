

import { question } from "readline-sync"

function main() {
  saltar_linha()

  // Entrada
  const valor_do_bem = entrada_num('Preço do bem do consórcio')
  const renda = entrada_num('Seu salário')
  const lance = entrada_num('Lance inicial')
  const periodo_meses = entrada_num('Qtd. de meses a pagar')
  
  // Processamento
  const taxa = 15/100
  const taxa_requisito_resgate = 30/100

  const acrescimo = obter_valor_total(valor_do_bem, taxa)
  const valor_total_do_bem = valor_do_bem + acrescimo
  const valor_parcela = obter_valor_parcela(valor_total_do_bem, periodo_meses)
  const fatia_da_renda = obter_valor_total(renda, taxa_requisito_resgate)
  const permite_resgate = comparacao_singular(fatia_da_renda, valor_parcela)
  const renda_precisa = renda_minima(fatia_da_renda, valor_parcela, taxa_requisito_resgate, renda)
  const reducao_parcela = obter_valor_parcela(valor_total_do_bem - lance, periodo_meses)
  
  const saida = `
  Valor das parcelas: R$ ${valor_parcela}
  Valor total a pagar: R$ ${valor_total_do_bem}
  Valor da taxa administrativa: R$ ${acrescimo}
  ${permite_resgate ? "========== RESGATE PERMITIDO ==========" : ""}
  Novo valor da parcela: R$ ${reducao_parcela}
  ` 

  const saida_alternativa = `
  Você não possui renda suficiente
  Parcela:                    ${valor_parcela}
  30% do seu salário:         ${fatia_da_renda}
  O quanto precisa aumentar:  + R$ ${renda_precisa - renda} => (${renda_precisa} - ${renda})
  `
  
  // Saída
  relatorio()
  tratamento(permite_resgate, saida, saida_alternativa)
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
function anos_para_meses(ano) {
  return Math.floor(ano * 12)
}

function obter_valor_total(valor, taxa) {
  return valor *  taxa
}

function obter_valor_parcela(valor_total, periodo) {
  return valor_total / periodo
}

function comparacao_singular(a, b) {
  return a >= b
}

function renda_minima(fatia_renda, valor_parcela, percentual, renda) {
  const renda_comparativo = fatia_renda * percentual
  const parcela_comparativo = valor_parcela * percentual
  const divisao_comparativos = parcela_comparativo / renda_comparativo
  const renda_adicional = renda * divisao_comparativos
  
  return renda_adicional
}

function tratamento(a, content_a, content_b) {
  a ? exibir(content_a) : exibir(content_b)
}

main()
