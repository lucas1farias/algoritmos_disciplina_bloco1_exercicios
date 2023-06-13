

// Cria listas a partir de strings 
// Necessita da função "fatiar"
function nova_lista(funcao, colecao, separador) {
  const array = []
  let array_i = 0
  let a = 0
  for (let i = 0; i < len(colecao); i++) {
    if (colecao[i] === separador) {
      array[array_i] = funcao(colecao, a, i - 1)
      array_i++
      a = i + 1
    }
  }
  return array
}
