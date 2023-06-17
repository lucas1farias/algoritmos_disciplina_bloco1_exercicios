

function len(colecao) {
  let contador = 0
  for (let i in colecao) {
    contador++
  }
  return contador
}

function realocar(colecao, b, a) {
  const pos_inicial = colecao[a]
  colecao[a] = colecao[b]
  colecao[b] = pos_inicial
}

function particionar(criterio, colecao, esquerda, direita) {
  const ref = colecao[direita]
  let menor_pos_nova = esquerda - 1
  for (let menor_pos_antiga = esquerda; menor_pos_antiga < direita; menor_pos_antiga++) {
    if (criterio(colecao[menor_pos_antiga], ref)) {
      menor_pos_nova++
      realocar(colecao, menor_pos_antiga, menor_pos_nova)
    }
  }
  realocar(colecao, menor_pos_nova + 1, direita)
  return menor_pos_nova + 1
}

function criterio_maior_igual(a, b) {
  return a >= b
}

function criterio_menor_igual(a, b) {
  return a <= b
}

function ordenar(criterio, colecao, esquerda, direita) {
  if (esquerda < direita) {
    const ref_anterior = particionar(criterio, colecao, esquerda, direita)
    ordenar(criterio, colecao, esquerda, ref_anterior - 1)
    ordenar(criterio, colecao, ref_anterior + 1, direita)
    return colecao
  }
}

function n_aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

function substituir(colecao, min, max, substituto) {
  let string = ''
  min === 0 ? min = -1 : null
  for (let i = 0; i < len(colecao); i++) {
    i < min ? string += colecao[i] : null
    i >= min && i < max ? string += '' : null
    i === max ? string += substituto : null
    i > min && i > max ? string += colecao[i] : null
  }
  return string
}

function remover_i_especifico(colecao, indice) {
  for (let i = 0; i < len(colecao); i++) {
    if (i >= indice) {
      colecao[i] = colecao[i + 1]
    } 
  }
  colecao.length--
}

function criterio_posicao_no_array(i, pos) {
  return i !== pos
}

function filtrar_versao_limitada(criterio, colecao, ref) {
  const array = []
  let array_i = 0
  for (let i = 0; i < len(colecao); i++) {
    if (criterio(i, ref)) {
      array[array_i] = colecao[i]
      array_i++
    }
  }
  return array
}

function embaralhar(colecao, indice_de_partida) {
  let n = 0
  for (let i = indice_de_partida; i < len(colecao); i++) {
    n = n_aleatorio(0, len(colecao))
    const pos_inicial = colecao[i]
    colecao[i] = colecao[n]
    colecao[n] = pos_inicial
  }
}

const rank = [5, 2, 4, 1, 3]

const montadoras_ = [
  'Toyota', 'Volkswagen', 'Ford', 'Honda', 'Chevrolet', 'Nissan', 'BMW', 'Mercedes-Benz', 'Audi', 'Hyundai', 'Kia',
  'Fiat', 'Renault', 'Volvo', 'Mitsubishi', 'Peugeot', 'Subaru', 'Chrysler', 'Jaguar', 'Land Rover', 'Mazda', 'Jeep',
  'Suzuki', 'Lexus', 'Tesla', 'Mini', 'Porsche', 'Acura', 'Dodge', 'Infiniti', 'Buick','Alfa Romeo', 'GMC',
  'Cadillac', 'Smart', 'Lamborghini', 'Maserati', 'Aston Martin', 'Bentley', 'Ferrari', 'McLaren', 'Rolls-Royce',
  'Lotus', 'Bugatti', 'Pagani', 'Koenigsegg', 'Genesis', 'Chery', 'Geely', 'BYD', 'Great Wall'
]

const vogais = ['a', 'e', 'i', 'o', 'u']
// const palavra = question('Digite uma palavra >>> ')
// const palavra_alterada = question('Altera esta palavra por outra >>> ')
// console.log(ordenar(criterio_maior_igual, rank, 0, len(rank) - 1))
// console.log(ordenar(criterio_menor_igual, rank, 0, len(rank) - 1))
// console.log(embaralhar(vogais, 0))
// console.log(substituir('Banana', 0, 1, '_'))
// console.log(`Nova palavra: ${substituir(palavra, 0, len(palavra) - 1, palavra_alterada)}`)
// console.log(filtrar_versao_limitada(criterio_posicao_no_array, rank, 0))
embaralhar(montadoras_, 0)
console.log(montadoras_)