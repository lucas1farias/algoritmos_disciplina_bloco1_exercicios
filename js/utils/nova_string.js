

function nova_string(colecao, min, max, separador) {
  let string = ''
  for (let i = min; i < max; i++) {
    i === 0 ? string += colecao[i] : string += separador + colecao[i]
  }
  return string
}
