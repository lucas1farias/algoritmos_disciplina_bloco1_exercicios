

function len(colecao) {
  let contador = 0
  for (let i in colecao) {
    contador++
  }
  return contador
}

function novo_registro(registro, chaves, valores) {
  const ultimo_i = len(registro)
  const registro_temp = {}
  // let registro_i = 0
  for (let i = 0; i < len(chaves); i++) {
    registro_temp[chaves[i]] = valores[i]
    // registro_i++
  }
  registro[ultimo_i] = registro_temp
  return registro
}

const veiculo = []
const chaves = ['nome', 'montadora', 'cor', 'ano']
const nomes = ['Gol', 'Golf', 'Mercedes', 'Hb20']
const montadoras = ['A', 'B', 'C', 'D']
const cores = ['preto', 'rosa', 'azul', 'violeta']
const anos = [2011, 2013, 2009, 2001, 1999]
for (let i = 0; i < len(nomes); i++) {
  novo_registro(veiculo, chaves, [nomes[i], montadoras[i], cores[i], anos[i]])
}
console.log(veiculo)
