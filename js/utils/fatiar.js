

// Não mexer (fatiar_string)
// Essencial para criar listas (combinada com "nova_lista")
function fatiar(colecao, min, max) {
  let string = ''
  for (let i = min; i <= max; i++) {
    string += colecao[i]
  }
  return string
}
