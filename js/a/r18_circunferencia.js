


/*
18. Leia o valor do raio de uma circunferência, calcule e escreva seu comprimento.(c = 2 * p * r)

// RAIO        || distância do centro do círculo até uma de suas extremidades
// DIÂMETRO    || Dobro do valor do RAIO 
// COMPRIMENTO || Tamanho da medida da volta dada ao redor do círculo (também chamado de PERÍMETRO)
// PI          || Valor usado na fórmula do cálculo da área do círculo
*/

import { question } from "readline-sync"

// Entrada
const radius = Number(question('Digite o valor do raio ---> '))

// Processamento
// FÓRMULA: [pi = C/D]  Tecnicamente, pi sempre será multiplicado com D (onde D é o dobro de R)
const pi = 3.14
const lengthCalculus = pi * (radius * 2) 
const areaCalculus = pi * (radius * radius)

// Saída
const report = `
===== RELATÓRIO: cálculos da circunferência =====
Comprimento || ${lengthCalculus}
Área        || ${areaCalculus}
`

console.log(report)
