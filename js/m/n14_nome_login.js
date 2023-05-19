

/*
14. Escreva uma sub-rotina que gere logins para usuários de um sistema de computação baseado na seguinte
regra: o login é composto pelas letras iniciais do nome do usuário.
*/

import { question } from "readline-sync"

function main() {
  saltar_linha()

  // Entrada
  // const nome_usuario = 'Alfredo'
  // const limite = 3
  const nome_usuario = entrada_txt('Digite um suposto nome de usuário')
  const limite = entrada_num('Digite um limite de chars com base no tamanho do nome de usuário')
  
  // Processamento
  const nome_login = configurar_nome_login(nome_usuario, limite)
  const saida = `Nome de usuário: ${nome_usuario}\nNome login: ${nome_login}`
  
  // Saída
  relatorio()
  tratamento(nome_usuario, limite, saida, 'O nome de login excede o do usuário')
  fim()
}

// Funções de apoio
function saltar_linha() {
  exibir('\n')
}

function entrada_txt(conteudo) {
  return question(conteudo + ' -----> ')
}

function entrada_num(conteudo) {
  return Number(question(conteudo + ' -----> '))
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
function configurar_nome_login(usuario, limite) {
  let nome_login = ''

  for (let i = 0; i < limite; i++) {
    nome_login += usuario[i]
  }

  return nome_login
}

function tratamento(dado, limite, msg, msg_erro) {
  dado.length >= limite ? exibir(msg) : exibir(msg_erro)
}

main()
