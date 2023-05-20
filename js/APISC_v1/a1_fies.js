

import { question } from "readline-sync"

function main() {
  saltar_linha()

  // Entrada
  const duracao_curso_anos = entrada_num('Duração do curso em anos')
  const mensalidade = entrada_num('Mensalidade do curso')
  
  const renda = entrada_num('Salário')
  const familiares = entrada_num('Número de familiares')

  // Processamento
  const mensalidade_fixa = 150
  const duracao_mensalidade_carencia = 18
  const periodo_de_pagamento = duracao_curso_anos * 4
  
  const meses = ano_para_meses(duracao_curso_anos)
  const meses_pagando = meses_para_anos(periodo_de_pagamento)
  
  const pessoa_apta = esta_apto(renda, familiares)
  const renda_media = obter_renda_media(renda, familiares)
  const valor_a_pagar = valor_negociado(mensalidade, meses)
  const equivalencia_renda_em_salarios = proporcao_renda_salario(renda_media)
  const selic_cobrada = obter_taxa(equivalencia_renda_em_salarios)
  const juros = juros_simples(valor_a_pagar, selic_cobrada, duracao_curso_anos)
  const total = juros + valor_a_pagar
  const pagamento_sobre_curso = logica_fies(mensalidade_fixa, duracao_curso_anos, duracao_mensalidade_carencia)
  const mensalidade_definitiva = obter_valor_parcela_definitiva(valor_a_pagar, juros, pagamento_sobre_curso, meses_pagando)
  const saida = `
  Aptidão para aderir ao programa?       ${pessoa_apta ? 'sim' : 'não'}
  Valor financiado:                      R$ ${valor_a_pagar}
  Juros sobre o valor financiado:        R$ ${juros}
  Valor com os juros aplicados:          R$ ${total}
  Valor pago durante o curso e carência: R$ ${pagamento_sobre_curso}
  Valor da parcela após carência:        R$ ${mensalidade_definitiva}
  `

  // Saída
  relatorio()
  exibir(saida)
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
function esta_apto(renda, familiares) {
  const salario_vigente = 1302
  const media_renda = renda / familiares
  return media_renda >= salario_vigente ? true : false
}

function obter_renda_media(renda, familiares) {
  return renda / familiares
}

function ano_para_meses(ano) {
  return Math.floor(ano * 12)
}

function meses_para_anos(meses) {
  return Math.floor(12 * meses)
}

function valor_negociado(mensalidade, duracao) {
  return mensalidade * duracao
}

function proporcao_renda_salario(renda_media) {
  const salario_vigente = 1302
  return renda_media / salario_vigente
}

function valor_entre(valor, min, max) {
  return valor >= min && valor <= max
}

function obter_taxa(renda_media) {
  let porcentagem = 0
  
  if (valor_entre(renda_media, 0, 1.5)) {
    porcentagem = 10/100
  } else if (valor_entre(renda_media, 1.5, 2)) {
    porcentagem = 15/100
  } else if (valor_entre(renda_media, 2, 2.5)) {
    porcentagem = 20/100
  } else {
    porcentagem = 25/100
  }
  return porcentagem
}

function juros_simples(capital, taxa, periodo) {
  const selic_vigente = 13.75 / 100
  return capital * (taxa * selic_vigente) * periodo
}

function logica_fies(mensalidade, periodo_cursando, periodo_termino) {
  const ano_inteiro = 12
  const frequencia_da_mensalidade = 3
  const qtd_mensalidade = ano_inteiro / frequencia_da_mensalidade 
  
  const pagamentos_anual_durante_curso = mensalidade * qtd_mensalidade
  const pagamento_durante_curso = pagamentos_anual_durante_curso * periodo_cursando
  
  const qtd_mensalidade_na_carencia = periodo_termino / frequencia_da_mensalidade
  const pagamento_apos_curso = mensalidade * qtd_mensalidade_na_carencia

  return pagamento_durante_curso + pagamento_apos_curso
}

function obter_valor_parcela_definitiva(total_pago, juros, pagamento_extra, periodo) {
  const total_com_juros = total_pago + juros
  const desconto = total_com_juros - pagamento_extra
  return desconto / periodo
}

main()
