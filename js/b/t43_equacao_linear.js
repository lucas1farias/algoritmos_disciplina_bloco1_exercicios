

/*
43. 
*/

import { question } from "readline-sync"

// Entrada
const a = Number(question('Digite um valor ---> '))
const b = Number(question('Digite um valor ---> '))
const c = Number(question('Digite um valor ---> '))
const d = Number(question('Digite um valor ---> '))
const e = Number(question('Digite um valor ---> '))
const f = Number(question('Digite um valor ---> '))

// Processamento
const ce = c * e
const bf = b * f
const ae = a * e
const bd = b * d
const af = a * f
const cd = c * d
const x = (ce - bf) / (ae - bd)
const y = (af - cd) / (ae - bd)

// Saída
const title = '\n===== RELATÓRIO =====\n'
const report = title + 'Valor de x: ' + x + '\n' + 'Valor de y: ' + y

console.log(report)
