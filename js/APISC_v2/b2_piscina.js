

import { question } from "readline-sync"

function main() {
    saltar_linha()
    const piscina_largura = entrada_num('Informe a largura da piscina (em CM) ---> ')
    const piscina_comprimento = entrada_num('Informe o comprimento da piscina (em CM) ---> ')
    const piscina_profundidade = entrada_num('Informe a profundidade da piscina (em CM) ---> ')
    const valor_a_pagar = entrada_num('Informe o valor a ser pago por cada 1000 Litros ---> ')
    const piscina_litros_total = calcular_capacidade(piscina_largura, piscina_comprimento, piscina_profundidade)
    const piscina_litros_recomendado = calcular_capacidade(piscina_largura, piscina_comprimento, piscina_profundidade, true)
    const preco_encher_piscina = calcular_preco_encher_piscina(valor_a_pagar, piscina_litros_recomendado)
    const perda_capacidade_piscina_mensal = piscina_litros_recomendado * (10/100)
    const preco_manutencao_piscina = calcular_preco_encher_piscina(valor_a_pagar, perda_capacidade_piscina_mensal)

    exibir('\n========== RELATÓRIO ==========')
    exibir(`Capacidade máxima da piscina          || ${piscina_litros_total}L`)
    exibir(`Capacidade recomendada para a piscina || ${piscina_litros_recomendado}L`)
    exibir(`Preço para encher a piscina           || R$ ${preco_encher_piscina}`)
    exibir(`Preço da manutenção da piscina        || R$ ${preco_manutencao_piscina}`)
    saltar_linha()
}

function calcular_capacidade(largura, comprimento, profundiade, limite=false) {
  const cubo = 1000
  
  let capacidade_max = (largura * comprimento * profundiade) / cubo
  
  if (limite) {
    capacidade_max = capacidade_max - (capacidade_max * 15/100)
  }

  return capacidade_max 
}

function calcular_preco_encher_piscina(valor_proposto, capacidade_litros) {

  let multiplicador_valor = 0
  
  if (capacidade_litros <= 1000) {
    return valor_proposto * 1
  } else {
    multiplicador_valor = Math.floor(capacidade_litros / 1000) + 1
    return valor_proposto * multiplicador_valor
  }
  
}

function exibir(texto) {
  console.log(texto)
}

function saltar_linha() {
  exibir('\n')
}

function entrada_num(instrucao) {
  return Number(question(instrucao))
}

main()
