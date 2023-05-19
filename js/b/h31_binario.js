

/* 
31. Leia um número inteiro (4 dígitos binários), calcule e escreva o equivalente na base decimal.
*/

import { question } from "readline-sync"

// Entrada
const binary = question('Digite um valor bin de 4 caracteres ---> ')

// Processamento
const binaryNumber = Number(binary)
const unit = binaryNumber % 10
const ten = ((binaryNumber % 100) - (binaryNumber % 10)) / 10
const hundred = ((binaryNumber % 1000) - (binaryNumber % 100)) / 100
const thousand = ((binaryNumber % 10000) - (binaryNumber % 1000)) / 1000
const binaryTranslation = (unit * 2 ** 0) + (ten * 2 ** 1) + (hundred * 2 ** 2) + (thousand * 2 ** 3)

// Saída
const title = '\n===== RELATÓRIO =====\n'
const report = title + 'Binário: ' + binary + '\nDecimal: ' + binaryTranslation + '\n'

console.log(report) 
