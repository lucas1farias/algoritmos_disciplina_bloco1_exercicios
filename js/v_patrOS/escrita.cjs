

function escrever_em_arquivo(ref, nome_arquivo, conteudo) {
  ref.writeFileSync(nome_arquivo, conteudo)
}

const arquivo = require('fs')
escrever_em_arquivo(arquivo, 'montadoras.txt', 'Linha 1\n')
escrever_em_arquivo(arquivo, 'montadoras.txt', 'Linha 2')
