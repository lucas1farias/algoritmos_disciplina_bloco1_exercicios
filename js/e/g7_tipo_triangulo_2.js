

/*
7. Leia 3 (três) números (cada número corresponde a um lado do triângulo), verifique e escreva se os 3
(três) números formam um triângulo (a soma de dois lados não pode ser menor que o terceiro lado). Se
formam, verifique se formam um triângulo equilátero (3 lados iguais), isósceles (2 lados iguais) ou
escaleno (3 lados diferentes). Não existe lado com tamanho 0 (zero).
*/

import { question } from "readline-sync"

function main() {
  // Entradas
  // const side1st = 80
  // const side2nd = 20
  // const side3rd = 80
  const side1st = numericInput("Informe um ângulo de um primeiro triângulo ---> ")
  const side2nd = numericInput("Informe um ângulo de um segundo triângulo ---> ")
  const side3rd = numericInput("Informe um ângulo de um terceiro triângulo ---> ")
  
  // Processamento
  const triangleExists = isTriangle(side1st, side2nd, side3rd)

  // Saída
  title("RELATÓRIO")
  if (triangleExists) {
    const triangleDef = triangleType(side1st, side2nd, side3rd)
    content(triangleDef)
  }
  footer("FIM DA EXECUÇÃO")
}

function numericInput(content) {
  return Number(question(content))
}

function title(this_content) {
  content(`\n========== ${this_content} ==========\n`)
}

function content(content) {
  console.log(content)
}

function footer(this_content) {
  content(`\n========== ${this_content} ==========\n`)
}

function isTriangle(angle1, angle2, angle3) {
  return (angle1 + angle2) >= angle3
}

// triângulo equilátero (3 lados iguais), isósceles (2 lados iguais) ou escaleno (3 lados diferentes)
function triangleType(angle1, angle2, angle3) {
  if (angle1 == angle2 && angle2 == angle3 && angle1 == angle3) {
    return 'Triângulo Equilátero'
  } else if (angle1 != angle2 && angle2 != angle3 && angle1 != angle3) {
    return 'Triângulo Escaleno'
  } else {
    return 'Triângulo Isósceles'
  }
}
  
main()
