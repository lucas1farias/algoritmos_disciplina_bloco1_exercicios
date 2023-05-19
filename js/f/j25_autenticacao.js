

/*
25. Verifique a validade de uma senha fornecida pelo usuário. A senha é 1234. O algoritmo deve escrever
uma mensagem de permissão de acesso ou não.
*/ 

import { question } from "readline-sync"

function main() {
  // Entradas
  // const password = 1234
  const password = numericInput("Informe uma senha válida ---> ")
  
  // Processamento
  const validation = verifyPassword(password)
  const outputData = security(validation, 'Acesso garantido!', 'Acesso negado!')

  // Saída
  title("RELATÓRIO")
  content(outputData)
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

function verifyPassword(key) {
  const mainKey = 1234
  return key == mainKey
}

function security(key, msg, msgError) {
  if (key) {
    return msg
  } else {
    return msgError
  }
}

main()
