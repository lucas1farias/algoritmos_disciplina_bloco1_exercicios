

/*
44. Sabendo que latão é constituído de 70% de cobre e 30% de zinco,
escreva um algoritmo que calcule a quantidade de cada um desses 
componentes para se obter certa quantidade de latão (em kg), 
informada pelo usuário.
*/

import { question } from "readline-sync"

// Entrada
const tinWeight = Number(question('Digite quantos quilos um recipiente de latão deve ter ---> '))

// Processamento
const copper = 70 / 100
const zinc = 30 / 100
const copperRequired = (tinWeight * copper).toFixed(1)
const zincRequired = (tinWeight * zinc).toFixed(1)

// Saída
const title = '\n===== RELATÓRIO ====='
const report = `
${title}
Para se obter um latão de ${tinWeight} KG, é preciso:
Quilos de cobre || ${copperRequired}
Quilos de zinco || ${zincRequired}
`

console.log(report)
