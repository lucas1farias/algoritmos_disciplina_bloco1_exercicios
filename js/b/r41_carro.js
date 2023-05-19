

/*
41. O custo ao consumidor de um carro novo é a soma do custo de fábrica
com a percentagem do distribuidor e dos impostos (aplicados ao custo 
de fábrica). Supondo que a percentagem do distribuidor seja de 28% e
os impostos de 45%, escreva um algoritmo que leia o custo de fábrica
de um carro e escreva o custo ao consumidor.
*/

import { question } from "readline-sync"

// Entrada
// const factoryCost = 15000
const factoryCost = Number(question('Digite o valor de custo de fábrica ---> '))

// Processamento
const distributorPercentage = 28 / 100
const taxes = 45 / 100
const distribuidorAddedPrice = factoryCost * distributorPercentage
const taxesAddedPrice = factoryCost * taxes
const customerCost = factoryCost + distribuidorAddedPrice + taxesAddedPrice

// Saída
const title = '\n===== RELATÓRIO ====='
const report = `
${title}
Preço de fábrica                   || R$ ${factoryCost}
Preço adicional da distribuidora   || R$ ${distribuidorAddedPrice}
Preço adicional do imposto         || R$ ${taxesAddedPrice}
Preço final do carro ao consumidor || R$ ${customerCost}
`

console.log(report)
