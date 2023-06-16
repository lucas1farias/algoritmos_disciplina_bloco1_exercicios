

// Aqui está o meu código
const arquivo = require('fs')

function n_aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

function anexar_ao_arquivo(ref, nome_arquivo, conteudo, msg_erro) {
  ref.writeFile(nome_arquivo, conteudo, (erro) => {
    // console.log(erro ? msg_erro : null)
    // return
  })
}

let dado = 0
for (let i = 0; i < 3; i++) {
  dado = n_aleatorio(1, 1001)
  anexar_ao_arquivo(arquivo, 'arquivo.txt', `${dado}\n`, 'Não foi possível add conteúdo!')
}


