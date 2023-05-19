

import { question } from "readline-sync"

function main() {
    saltar_linha()
    const consumo_kwh = entrada_num('Quantia de KWh consumida ---> ')
  
    const valor_faturado = calcular_taxa_por_kwh(consumo_kwh)
    const valor_bandeira = calcular_bandeira(consumo_kwh)
    const valor_icms = calcular_icms(valor_faturado)
    const valor_pis_cofins = calcular_pis_cofins(valor_faturado)
    const valor_taxa_iluminacao = calcular_taxa_iluminacao(consumo_kwh, valor_faturado + valor_bandeira)
    
    exibir('\n========== RELATÓRIO ==========')
    exibir(`Consumo         || ${consumo_kwh}KWh`)
    exibir(`Valor faturado  || R$ ${valor_faturado}`)
    exibir(`Bandeira        || R$ ${valor_bandeira}`)
    exibir(`ICMS            || R$ ${valor_icms}`)
    exibir(`PIS/COFINS      || R$ ${valor_pis_cofins}`)
    exibir(`Taxa iluminação || R$ ${valor_taxa_iluminacao}`)
    saltar_linha()
}

function calcular_taxa_por_kwh(valor_consumo) {
  let isento = 30
  let consumo_leve = 100
  let adicional = 0

  if (valor_consumo <= isento) {
    adicional = adicional
  } else if (valor_consumo <= consumo_leve) {
    adicional = valor_consumo * 0.59
  } else {
    adicional = valor_consumo * 0.75
  }
  return adicional
}

function calcular_bandeira(khw) {
    // Resultado dá zero se 'khw' < 100
    const fracao_khw = khw / 100
    return Math.floor(fracao_khw) * 8
}

function calcular_icms(valor_tarifado) {
  return Number((valor_tarifado * (25/100)).toFixed(2))
}

function calcular_pis_cofins(valor_tarifado) {
  return Number((valor_tarifado * (15/100)).toFixed(2))
}

function calcular_taxa_iluminacao(consumo, valor_tarifado) {
  const consumo_acima_80 = consumo > 80
  
  if (consumo_acima_80) {
    return Number((valor_tarifado * (6/100)).toFixed(2))
  } else {
    return 0
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
