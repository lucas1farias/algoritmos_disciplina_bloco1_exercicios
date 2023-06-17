

const iniciar = require('readline-sync')

/*
Edição deve ser feita diretamente acessando o objeto na sua chave (editar_montadora)
As funções "nova_montadora" e "novo_veiculo" não usam "novo_registro"
"novo_registro"                   = casos de criação dinâmica (chaves e valores já configurados)
"nova_montadora" e "novo_veiculo" = casos de criação em terminal (chaves e valores passados em loop) 
*/

function main() {
  let montadoras = []
  let veiculos = []
  let montadoras_em_ordem_alfabetica = []
  const montadoras_chaves = ['nome', 'pais']
  const veiculos_chaves = ['nome', 'montadora']
  const info = '\n======= INFO =======\n'
  const aviso = '\n======= AVISO =======\n'
  
  let entrada = undefined

  // Letras sem caracteres especiais (terminal com problemas de utf8)
  const paises_ = [
    'Japao', 'Alemanha', 'EUA', 'Coreia do Sul', 'Italia', 'Suecia', 'Reino Unido',
    'Suecia', 'China'
  ]
  
  const montadoras_ = [
    'Toyota', 'Volkswagen', 'Ford', 'Honda', 'Chevrolet', 'Nissan', 'BMW', 'Mercedes-Benz', 'Audi', 'Hyundai', 'Kia',
    'Fiat', 'Renault', 'Volvo', 'Mitsubishi', 'Peugeot', 'Subaru', 'Chrysler', 'Jaguar', 'Land Rover', 'Mazda', 'Jeep',
    'Suzuki', 'Lexus', 'Tesla', 'Mini', 'Porsche', 'Acura', 'Dodge', 'Infiniti', 'Buick','Alfa Romeo', 'GMC',
    'Cadillac', 'Smart', 'Lamborghini', 'Maserati', 'Aston Martin', 'Bentley', 'Ferrari', 'McLaren', 'Rolls-Royce',
    'Lotus', 'Bugatti', 'Pagani', 'Koenigsegg', 'Genesis', 'Chery', 'Geely', 'BYD', 'Great Wall'
  ]
  embaralhar(montadoras_, 0)

  const veiculos_ = [
    'Corolla', 'Golf', 'Mustang', 'Civic', 'Camaro', 'Altima', '3 Series', 'E-Class', 'A4', 'Elantra', 'Sorento',
    '500', 'Clio', 'V60', 'Outlander', '208', 'Impreza', '300', 'F-Type', 'Range Rover', 'MX-5', 'Wrangler', 'Swift', 
    'IS', 'Model S', 'Cooper', '911', 'NSX', 'Challenger', 'Q50', 'Enclave', 'Giulia', 'Sierra', 'Escalade', 'ForTwo',
    'Aventador', 'Ghibli', 'DB11', 'Continental GT', '488 GTB', '720S', 'Phantom', 'Evora', 'Chiron', 'Huayra',
    'Regera', 'G70', 'Arrizo', 'Emgrand', 'Tang','Haval H6'
  ]
  
  while (entrada != 0) {
    entrada = nova_entrada(menu())

    // Criar banco de dados de montadoras e veículos dinâmicamente
    if (entrada === 100) {
      const qtd = nova_entrada_txt('Criar quantas MONTADORAS E VEÍCULOS de uma vez? (min: 1, max: 50) >>> ')
      if (qtd <= 50) {
        criar_montadoras_e_veiculos_dinamicamente(
          qtd, montadoras_, paises_, veiculos_, montadoras, montadoras_chaves, veiculos, veiculos_chaves
        )
        console.log(`${info}${qtd} montadora(s) e veículo(s) foram add`)
      }
      else {
        console.log(`${aviso}O bando de dados dinamico so possui ate 50 dados diferentes`)
      }
      continuar()
    }
    // Registrar N montadoras
    else if (entrada === 1) {
      montadoras = nova_montadora(montadoras, montadoras_chaves)
      continuar()
    }
    // Exibir montadoras cadastradas
    else if (entrada === 2) {
      console.log(montadoras)
      continuar()
    }
    // Registro N veículos
    else if (entrada === 3) {
      veiculos = novo_veiculo(veiculos, veiculos_chaves)
      continuar()
    }
    // Exibir veículos cadastrados
    else if (entrada === 4) {
      console.log(veiculos)
      continuar()
    }
    // Filtrar montadoras por país
    else if (entrada === 5) {
      const pais = nova_entrada_txt('Informe o NOME DO PAÍS >>> ')
      const montadoras_deste_pais = montadoras_por_pais(montadoras, pais)
      console.log(montadoras_deste_pais)
      continuar()
    }
    // Filtrar veículos por país
    else if (entrada === 6) {
      const pais = nova_entrada_txt('Informe o NOME DO PAÍS >>> ')
      console.log(veiculo_por_pais(veiculos, montadoras, pais)) 
    }
    // Organizar montadoras por ordem alfabética
    else if (entrada === 7) {
      montadoras_em_ordem_alfabetica = ordenar_ordem_alfabetica(montadoras)
      console.log(montadoras_em_ordem_alfabetica)
    }
    // Editar uma montadora (nome)
    else if (entrada === 8) {
      const montadora_a_ser_editada = nova_entrada_txt('Informe o NOME da MONTADORA a ser editada >>> ')
      const nome_novo = nova_entrada_txt('Informe o NOME NOVO para a MONTADORA >>> ')
      editar_montadora(montadoras, montadora_a_ser_editada, nome_novo, 0)
      console.log(montadoras)
    }
    // Remover uma montadora
    else if (entrada === 9) {
      const nome_montadora = nova_entrada_txt('Digite o NOME DA MONTADORA a ser removida >>> ')
      const consulta = consultar_montadora(montadoras, nome_montadora)
      if (consulta[0]) {
        console.log(`${info}Montadora encontrada: ${montadoras[consulta[1]]}`)
        montadoras = filtrar_versao_limitada(criterio_posicao_no_array, montadoras, consulta[1])
        console.log(montadoras)
      }
      else {
        console.log(`${aviso}A montadora não está cadastrada ou não existe`)
      }
    }
    // Editar uma montadara (país)
    else if (entrada === 10) {
      const montadora_a_ser_editada = nova_entrada_txt('Informe o NOME da MONTADORA a ser editada >>> ')
      const nome_novo = nova_entrada_txt('Informe o NOME NOVO DO PAIS da MONTADORA >>> ')
      editar_montadora(montadoras, montadora_a_ser_editada, nome_novo, 1)
      console.log(montadoras)
    }
  }
}

// Quando "true", exclui o "i" da coleção
function criterio_posicao_no_array(i, pos) {
  return i !== pos
}

// Função usada para remover um objeto (montadora, veículo)
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

function consultar_montadora(registro, ref) {
  for (let i = 0; i < len(registro); i++) {
    const cada_montadora = registro[i]['nome']
    if (cada_montadora === ref) {
      // [0] = prova que a montadora existe / [1] = índice do objeto de montadora
      return [true, i]
    }
  }
  return false
}

function editar_montadora(registro, alvo, nome_novo, atrib) {
  // Recebe o índice do objeto alvo passado na entrada
  let indice_do_alvo = 0
  
  // Quando a atributo for a chave: ['nome']
  if (atrib === 0) {
    for (let i = 0; i < len(registro); i++) {
      const cada_indice_0_aninhado = registro[i]['nome']
      if (cada_indice_0_aninhado === alvo) {
        indice_do_alvo = i
        break
      }
    }
    
    console.log('ANTES: ', registro[indice_do_alvo])
    registro[indice_do_alvo]['nome'] = nome_novo
    console.log('AGORA: ', registro[indice_do_alvo])
  }
  // Quando o atributo for a chave: ['pais']
  else {
    for (let i = 0; i < len(registro); i++) {
      const cada_indice_0_aninhado = registro[i]['pais']
      if (cada_indice_0_aninhado === alvo) {
        indice_do_alvo = i
        break
      }
    }
    
    console.log('ANTES: ', registro[indice_do_alvo])
    registro[indice_do_alvo]['pais'] = nome_novo
    console.log('AGORA: ', registro[indice_do_alvo])
  }
}

function menu() {
  return `
  ========== VEICULOS ==========
  0 - Sair
  1 - Nova montadora
  2 - Ver montadoras
  3 - Novo veiculo
  4 - Ver veiculos
  5 - Mostrar montadoras por pais
  6 - Mostrar veiculos por pais
  7 - Mostrar montadoras em ordem alfabetica
  9 - Remover uma montadora
  
  ===== MONTADORA =====
  8  - Editar montadora (nome)
  10 - Editar montadora (pais)
  >>> `
}

function criar_montadoras_e_veiculos_dinamicamente(qtd, ref_a, ref_b, ref_c, ref_d, ref_e, ref_f, ref_g) {
  // Obter montadoras fixas (com base em "qtd") p/ já ter um banco de dados para testes + dinâmicos
  // Os índices de "montadoras_" são embaralhados para não vir sempre os "qtd (int)" primeiros índices dela
  
  const montadoras_dinamicas = []
  let array_i = 0
  
  for (let i = 0; i < qtd; i++) {
    montadoras_dinamicas[array_i] = ref_a[i]
    array_i++
  }
  
  for (let i = 0; i < len(montadoras_dinamicas); i++) {
    // Criação de uma montadora: nome, país
    const montadora_fixa = montadoras_dinamicas[i]
    const pais_qualquer = ref_b[n_aleatorio(0, len(ref_b))]
    novo_registro(ref_d, ref_e, [montadora_fixa, pais_qualquer])
    
    // Criação de um veículo: nome, montadora
    const veiculo_qualquer = ref_c[n_aleatorio(0, len(ref_c))] // veiculos_[i]
    novo_registro(ref_f, ref_g, [veiculo_qualquer, montadora_fixa])
  }
}

function montadoras_por_pais(registro, valor) {
  const array = []
  let array_i = 0
  for (let i = 0; i < len(registro); i++) {
    if (registro[i]['pais'] === valor) {
      array[array_i] = registro[i]['nome']
      array_i++
    }
  }
  return array
}

function veiculo_por_pais(registro_veiculo, registro_montadora, pais_alvo) {
  /*
  Atribs. de montadora || nome, país
  Atribs. de Veículo   || nome, montadora
  Objetivo             || saber quantos veículos pertencem ao país X (entrada = pais_alvo)
  */
  const array = []
  let array_i = 0
  let pais_da_montadora = ''
  for (let i = 0; i < len(registro_veiculo); i++) {
    pais_da_montadora = registro_montadora[i]['pais']
    if (pais_da_montadora === pais_alvo) {
      // console.log('---o ',pais_da_montadora, pais_alvo, '---u ', pais_da_montadora === pais_alvo) 
      array[array_i] = registro_veiculo[i]['nome']
      array_i++
    }
  }
  return array
}

function ordenar_ordem_alfabetica(registro_montadora) {
  let array = []
  let array_i = 0

  for (let i = 0; i < len(registro_montadora); i++) {
    // [código inteiro da string [0] do nome da montadora, a chave inteira]
    array[array_i] = [codigo_letra(registro_montadora[i]['nome'][0]), registro_montadora[i]]
    array_i++
  }

  /*
  "array" neste momento, possui um conjunto de índices: [int, {'nome': 'qualquer_nome', 'país': 'qualquer_pais'}]
  A função "particionar", que é parte de "ordenar", foi adaptada p/ uso em array com arrays
  A adaptação foi feita adicionando o [0] em dois locais da função onde normalmente não haveria
  Portanto, "array", tendo [[int, {}], [int, {}], ...], o índice escolhido como critério é: 0
  */
  array = ordenar_array_de_arrays(criterio_menor_igual, array, 0, len(array) - 1)
  array_i = 0
  
  /*
  Ao final, após o ordenamento, eu preciso retirar o índice [0], pois ele já cumpriu seu papel de ordenamento
  "array" é percorrido e é anexado ao "array_final" somente os objetos [1], excluindo os inteiros [0]
  */
  const array_final = []

  for (let i = 0; i < len(array); i++) {
    array_final[array_i] = array[i][1]
    array_i++
  }

  return array_final
}

function intervalo(min, max) {
  const array = []
  let array_i = 0
  for (let i = min; i < max; i++) {
    array[array_i] = i
    array_i++
  }
  return array
}

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

function codigo_letra(letra) {
  const maiusculas = nova_lista(fatiar, 'A.B.C.D.E.F.G.H.I.J.K.L.M.N.O.P.Q.R.S.T.U.V.W.X.Y.Z.', '.')
  const minusculas = nova_lista(fatiar, 'a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q.r.s.t.u.v.w.x.y.z.', '.')
  const n_maiusculas = intervalo(65, 91)
  const n_minusculas = intervalo(97, 123)
  for (let i = 0; i < len(maiusculas); i++) {
    if (maiusculas[i] === letra) {
      return n_maiusculas[i]
    }
  }
  for (let i = 0; i < len(minusculas); i++) {
    if (minusculas[i] === letra) {
      return n_minusculas[i]
    }
  }
  return false
}

// QUICKSORT
function realocar(colecao, b, a) {
  const pos_inicial = colecao[a]
  colecao[a] = colecao[b]
  colecao[b] = pos_inicial
}

/*
Normalmente lida com arrays com valores únicos
Neste caso em particular, estou lidando com um array com arrays aninhados e preciso do índice 0
*/
function particionar_array_de_arrays(criterio, colecao, esquerda, direita) {
  const ref = colecao[direita][0]
  let menor_pos_nova = esquerda - 1
  for (let menor_pos_antiga = esquerda; menor_pos_antiga < direita; menor_pos_antiga++) {
    if (criterio(colecao[menor_pos_antiga][0], ref)) {
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

function ordenar_array_de_arrays(criterio, colecao, esquerda, direita) {
  if (esquerda < direita) {
    const ref_anterior = particionar_array_de_arrays(criterio, colecao, esquerda, direita)
    ordenar_array_de_arrays(criterio, colecao, esquerda, ref_anterior - 1)
    ordenar_array_de_arrays(criterio, colecao, ref_anterior + 1, direita)
    return colecao
  }
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

// Controle de rolagem de conteúdo no terminal
function continuar() {
  nova_entrada_txt('\n<<< CONTINUE PRESSIONANDO ENTER >>>\n')
  console.clear()
}

// --------------------------------------------------- Genéricos ---------------------------------------------------
function len(colecao) {
  let contador = 0
  for (let i in colecao) {
    contador++
  }
  return contador
}

function nova_entrada(conteudo) {
  return Number(iniciar.question(conteudo))
}

function nova_entrada_txt(conteudo) {
  return iniciar.question(conteudo)
}

function n_aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) - min)
}

// Usado somente para criação dinâmica (quando não é usada entradas de terminal)
function novo_registro(registro, chaves, valores) {
  const registro_temp = {}
  const ultimo_i = len(registro)
  for (let i = 0; i < len(chaves); i++) {
    registro_temp[chaves[i]] = valores[i]
  }
  registro[ultimo_i] = registro_temp
  return registro
}

function nova_montadora(registro, chaves) {
  const criar_quantos = nova_entrada('Informe quantas MONTADORAS deseja cadastrar >>> ')
      
  for (let i = 0; i < criar_quantos; i++) {
    const nome_montadora = nova_entrada_txt('Informe o NOME DA MONTADORA >>> ')
    const pais_montadora = nova_entrada_txt('Informe o PÁIS DA MONTADORA >>> ')
    const ultimo_i = len(registro)
    let registro_temp = {}
    let valores = [nome_montadora, pais_montadora]
    for (let i = 0; i < len(chaves); i++) {
      registro_temp[chaves[i]] = valores[i]
    }
    registro[ultimo_i] = registro_temp
    console.log(registro)
  }
  return registro
}

function novo_veiculo(registro, chaves) {
  const criar_quantos = nova_entrada('Informe quantos VEÍCULOS deseja cadastrar >>> ')
      
  for (let i = 0; i < criar_quantos; i++) {
    const nome_veiculo = nova_entrada_txt('Informe o NOME DO VEÍCULO >>> ')
    const montadora_do_veiculo = nova_entrada_txt('Informe a MONTADORA DO VEÍCULO >>> ')
    const ultimo_i = len(registro)
    let registro_temp = {}
    let valores = [nome_veiculo, montadora_do_veiculo]
    for (let i = 0; i < len(chaves); i++) {
      registro_temp[chaves[i]] = valores[i]
    }
    registro[ultimo_i] = registro_temp
    console.log(registro)
  }
  return registro
}

main()
