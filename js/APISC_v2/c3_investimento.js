

/*
Mariana resolveu investir de parte de seu salário ( um pedaço (R$) inferior a 30% ) de forma fixa mensal; 
O investimento escolhido rende mensalmente a uma taxa de juros de 0,01% até 1,00% sobre o saldo do mês. 
Mariana tem um dado objetivo com este investimento. 

Pergunte a ela:
  . Objetivo = 'Comprar motocicleta'
  . QUANTO ELA PRECISA para realizá-lo, ou valor necessário = 10000
  . Seu salário = 2000 
  . Quanto ( % ) ela pretende investir mensalmente = 400 
  . Taxa de juros do investimento escolhido = 0.5

Em seguida mostre em:
  . Quantos meses ela atingirá o objetivo. 
  . Se for acima de 12 meses mostre-o em anos e meses. 
  . A cada mês você deve atualizar o saldo primeiro com o aporte (depósito de valor do salário) 
  e depois aplicar os créditos dos juros sobre esse novo saldo. 

Faça isso enquanto o objetivo não for alcançado, contando os meses para serem exibidos como se pede.
*/

import { question } from "readline-sync"

function main() {
  saltar_linha()
  const objetivo = 'Comprar motocicleta'
  const quantia_necessaria = entrada_num('Informe a quantia necessária para o seu objetivo ---> ')
  const salario = entrada_num('Informe sua renda mensal ---> ')
  const investimento_mensal = entrada_num('Informe a quantia mensal a ser investida ---> ')
  const taxa_juros = entrada_num('Informe a taxa de juros ---> ') / 100
  
  const investimento_mensal_valor = calcular_investimento_mensal(salario, investimento_mensal)
  
  exibir('\n========== RELATÓRIO ==========')
  exibir(`Investimento mensal || ${investimento_mensal_valor}`)
  saltar_linha()
}

function calcular_investimento_mensal(salario, salario_fatia) {
  return salario * (salario_fatia / 100)
}

function calcular_juros_compostos(capital, taxa, periodo) {
  let montante = capital * Math.pow(1 + taxa, periodo)
  return montante
}

function exibir(texto) {
  console.log(texto)
}

function saltar_linha() {
  exibir('\n')
}

function entrada_texto(instrucao) {
  return question(instrucao) 
}

function entrada_num(instrucao) {
  return Number(question(instrucao))
}

main()
