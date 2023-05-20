

function range(min, max) {
  let container = []
  
  for (let i = min; i <= max; i++) {
    container.push(i)
  }
  
  return container
}

function contar_vogal(txt) {
  let contador = 0
  for (let i = 0; i < txt.length; i++) {
    txt[i] == 'a' || txt[i] == 'e' || txt[i] == 'i' || txt[i] == 'o' || txt[i] == 'u' ? contador++ : null
  }
  return contador
}

function criar_nomes(qtd) {
  const vogais = 'a.e.i.o.u'.split('.')
  const consoantes = 'b.br.c.cr.d.dr.f.fr.g.gr.nh.j.l.m.n.p.pr.r.s.t.tr.v'.split('.')
  const conteudo_inicio = range(0, 1)
  const conteudo_centro = range(0, 1)

  let nomes = []
  let nome_criado = ''
  
  let tipo_inicio = undefined
  let tipo_centro = undefined
  let qtd_vogais = 0

  while (nomes.length < qtd) {
      tipo_inicio = conteudo_inicio[i_aleatorio(0, conteudo_inicio.length)]
      tipo_centro = conteudo_centro[i_aleatorio(0, conteudo_centro.length)]

      if (tipo_inicio == 0) {
        // Ex: Abr
        // nome_criado = choice(vogais) + choice(consoantes) + choice(consoantes)  
        nome_criado = vogais[i_aleatorio(0, vogais.length)] + 
        consoantes[i_aleatorio(0, consoantes.length)] + 
        consoantes[i_aleatorio(0, consoantes.length)] 
      } 
      else if (tipo_inicio == 1) {
        // Ex: Bai
        nome_criado = consoantes[i_aleatorio(0, consoantes.length)] + 
        vogais[i_aleatorio(0, vogais.length)] +
        vogais[i_aleatorio(0, vogais.length)]
      } 
      
      if (tipo_centro == 0) {
        // Ex: eu = Abr + eu = Abreu
        nome_criado = vogais[i_aleatorio(0, vogais.length)] + vogais[i_aleatorio(0, vogais.length)]
      } 
      
      else if (tipo_centro == 1) {
        // na = Bai + na = Baina
        nome_criado = consoantes[i_aleatorio(0, consoantes.length)] + vogais[i_aleatorio(0, vogais.length)]
      }
      
      // Ex: Abreuvo / Bainava
      nome_criado += (consoantes[i_aleatorio(0, consoantes.length)] + vogais[i_aleatorio(0, vogais.length)])
      nome_criado += (consoantes[i_aleatorio(0, consoantes.length)] + vogais[i_aleatorio(0, vogais.length)])

      nomes.push(nome_criado)
                
  }
  return nomes
}






import { question } from "readline-sync"

function main() {
  saltar_linha()

  // Entrada

  // Processamento

  // Saída
  relatorio()
  exibir()
  fim()
}

// Funções de apoio
function saltar_linha() {
  exibir('\n')
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

main()
