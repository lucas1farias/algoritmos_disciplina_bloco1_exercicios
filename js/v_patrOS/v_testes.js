

function len(colecao) {
  let contador = 0
  for (let i in colecao) {
    contador++
  }
  return contador
}

// Se eu tenho este array de objetos, como eu faço para adquirir as chaves?
const alunos = [
  {'nome': 'Ana', 'n_faltas': 4},
  {'nome': 'Ena', 'n_faltas': 11},
  {'nome': 'Ina', 'n_faltas': 7},
]

const montadoras = [
  {
    'id': '01H3925ZEY0A7CM93T9T33R39R',
    'nome': 'A',
    'pais': 'Argentina',
    'ano_fundacao': 1966
  },
  {
    'id': '01H3925ZEYH8W12GEP4KSD7CFD',
    'nome': 'B',
    'pais': 'Bulgaria',
    'ano_fundacao': 1972
  }
]

// Quando for chave simples
const array = []
let array_i = 0

for (let i = 0; i < len(alunos); i++) {
  // console.log(Object.keys(alunos[i]))
  for (let chave in alunos[i]) {
    array[array_i] = {'nome': alunos[i]['nome']}
    array_i++
    break
  }
}
console.log(array)

// Quando for chaves compostas
const array2 = []
let array2_i = 0

for (let i = 0; i < len(montadoras); i++) {
  // console.log(Object.keys(alunos[i]))
  for (let chave in montadoras[i]) {
    array2[array2_i] = {'nome': montadoras[i]['nome'], 'ano_fundacao': montadoras[i]['ano_fundacao']}
    array2_i++
    break
  }
}
console.log(array2)

function fatiar(colecao, min, max) {
  let string = ''
  for (let i = min; i <= max; i++) {
    string += colecao[i]
  }
  return string
}

function nova_lista(criterio, colecao, separador) {
  const array = []
  let array_i = 0
  let pos = 0
  for (let i = 0; i < len(colecao); i++) {
    if (colecao[i] === separador) {
      array[array_i] = criterio(colecao, pos, i - 1)
      array_i++
      pos = i + 1
    }
  }
  return array
}

const data = `${new Date()}`
console.log(nova_lista(fatiar, data + ' ', ' ')[3])
