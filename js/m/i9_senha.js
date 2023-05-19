

/*
9. Leia um senha de um usuário, colocando asteriscos nos caracteres digitados e verifique se a senha é
correta ou não.
*/

import { question } from "readline-sync"

function main() {
  saltar_linha()

  // Entradas
  // const senha = 'javascript'
  const senha = entrada_txt('Digite uma suposta senha')
  const senha_cripto = modificar(senha, '*')
  exibir('Senha criptografada: ' + senha_cripto)
  // const verificacao = 'javascript'
  const verificacao = entrada_txt('Digite uma supost senha novamente')
  
  // Processamento
  const similaridade = autenticar(senha, verificacao)
  
  // Saída
  relatorio()
  verificar_dados(similaridade, 'Senhas congruentes', 'Senha diferentes')
  fim()
}

// Funções de apoio
function saltar_linha() {
  exibir('\n')
}

function entrada_txt(conteudo) {
  return question(conteudo + ' -----> ')
}

function relatorio() {
  exibir('\n========== RELATÓRIO ==========')
}

function exibir(conteudo) {
  console.log(conteudo)
}

function fim() {
  exibir('========== FIM ==========\n')
}

// Funções de funcionalidade
function modificar(colecao, simbolo) {
  let nova_senha = ''
  for (let i = 0; i < colecao.length; i++) {
    nova_senha += simbolo
  }
  return nova_senha
}

function autenticar(senha, senha_rept) {
  return senha === senha_rept
}

function verificar_dados(dado, msg_ok, msg_erro) {
  dado ? exibir(msg_ok) : exibir(msg_erro)
}

main()
