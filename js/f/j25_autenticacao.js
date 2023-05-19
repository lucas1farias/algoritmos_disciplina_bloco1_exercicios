

/*
25. Verifique a validade de uma senha fornecida pelo usuário. A senha é 1234. O algoritmo deve escrever
uma mensagem de permissão de acesso ou não.
*/ 

import * as functionDb from "../../functions.js"

function main() {
  // Entradas
  const password = functionDb.numericInput("Informe uma senha válida ---> ")
  // const password = 1234

  // Processamento
  const validation = verifyPassword(password)
  const outputData = security(validation, 'Acesso garantido!', 'Acesso negado!')

  // Saída
  functionDb.title("RELATÓRIO")
  functionDb.content(outputData)
  functionDb.footer("FIM DA EXECUÇÃO")
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
