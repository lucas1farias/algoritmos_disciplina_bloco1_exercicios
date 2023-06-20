

const { ulid } = require('ulid')
const arquivo = require('fs')

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
// console.log(array)

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
// console.log(array2)

function nova_ulid() {
  return ulid()
}

function escrever_em_arquivo(ref, nome_arquivo, conteudo) {
  ref.writeFileSync(nome_arquivo, conteudo)
}

function formatar_texto(registro, chaves) {
  /* 'id', 'nome', 'pais', 'ano_fundacao' */
  let linha = ''
  let pos = 0
  for (let i = 0; i < len(registro); i++) {
    const cada_i = registro[i]
    linha += `${cada_i[chaves[pos]]}#${cada_i[chaves[pos + 1]]}#${cada_i[chaves[pos + 2]]}#${cada_i[chaves[pos + 3]]}\n`
  }
  return linha
}

/* 2. Criar uma lista vazia para botar as montadoras. */
let montadoras_ = []
let montadoras_i = 0

/* 3. Crie uma montadora A (atributos) */
let montadora_A = {
  'id': nova_ulid(), 
  'nome': 'A', 
  'pais': 'Argentina', 
  'ano_fundacao': 1966
}

/* 4. Adicione a montadora A à lista de montadoras do sistema */
montadoras_[montadoras_i] = montadora_A
montadoras_i++

/* 5. Adicionar diretamente em "montadoras" mais uma montadora (essa será o que vou chamar de B)*/
montadoras_[montadoras_i] = {
  'id': nova_ulid(), 
  'nome': 'B', 
  'pais': 'Bulgaria', 
  'ano_fundacao': 1972
}
montadoras_i++

const conteudo = formatar_texto(montadoras_, ['id', 'nome', 'pais', 'ano_fundacao'])
escrever_em_arquivo(arquivo, 'montadoras.txt', conteudo)
