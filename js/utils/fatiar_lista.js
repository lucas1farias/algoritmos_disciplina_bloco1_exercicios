

// Similar a minha função "intervalo" em Python
function fatiar_lista(colecao, min, max) {
  const array = []
  let array_i = 0
  for (let i = min; i <= max; i++) {
    array[array_i] = colecao[i]
    array_i++
  }
  return array
}
