

function len(colecao) {
  let contador = 0
  for (let i in colecao) {
    contador ++
  }
  return contador
}

function esta_contido(menor, maior) {
  for (let i = 0; i <= len(maior) - len(menor); i++) {
    let ok = true
    
    for (let e = 0; e < len(menor); e++) {
      if (menor[e] !== maior[i + e]) {
        ok = false
        break
      }
    }
    
    if (ok) {
      return true
    }
  }
  return false
}

function contido(procurado, colecao) {
  for (let i = 0; i < len(colecao); i++) {
    if (colecao[i] === procurado) {
      return true
    }
  }
  return false
}

function diferentes(colecao) {
  const array = []
  let array_i = 0
  for (let i = 0; i < len(colecao); i++) {
    if (!contido(colecao[i], array)) {
      array[array_i] = colecao[i]
      array_i++
    }
  }
  return array
}

const java = 'ac'
const js = 'Javascript'
const js_unico = diferentes(js)
console.log(esta_contido(java, js))
console.log(diferentes('banana'))

let contador = 0
for (let i = 0; i < len(js_unico); i++) {
  for (let e = 0; e < len(java); e++) {
    // console.log(java[e], js_unico[i], java[e] == js_unico[i])
    java[e] == js_unico[i] ? contador++ : null
  }
}

console.log('==================================')
console.log(contador >= len(java) ? true : false)
