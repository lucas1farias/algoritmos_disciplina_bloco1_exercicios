

/*
40. Calcule a quantidade de dinheiro gasta por um fumante. Dados de entrada: o número de anos que ele
fuma, o nº de cigarros fumados por dia e o preço de uma carteira (1 carteira tem 20 cigarros).
*/

import { question } from "readline-sync"

// Entrada
const yearsSmoking = Number(question('Digite a quantidade de anos fumando ---> '))
const cigarretesByDay = Number(question('Digite a quantidade de cigarros por dia ---> '))
const pricePerContainer = Number(question('Digite o preço por cartela ---> '))

// Processamento
const containerUnitContent = 20 
const yearInDays = 365.2425
const cigarretesSmoked = Math.floor(cigarretesByDay * yearInDays)
const containersBought = Math.floor(cigarretesSmoked / containerUnitContent)
const moneySpent = (containersBought * pricePerContainer).toFixed(2)

// Saída
const title = '\n===== RELATÓRIO ====='
const report = `
${title}
Anos fumando               || ${yearsSmoking}
Cigarros fumados por dia   || ${cigarretesByDay}
Preço da cartela           || ${pricePerContainer}
Cigarros fumados em 7 anos || ${cigarretesSmoked}
Cartelas compradas         || ${containersBought}
Dinheiro gasto até hoje    || ${moneySpent}
`

console.log(report)
