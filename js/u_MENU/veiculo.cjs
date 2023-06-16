

const iniciar = require('readline-sync')

function main() {
  let montadoras = []
  let veiculos = []
  const montadoras_chaves = ['nome', 'país']
  const veiculos_chaves = ['nome', 'montadora']
  
  let entrada = undefined

  // Letras sem caracteres especiais
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

  const veiculos_ = [
    'Corolla', 'Golf', 'Mustang', 'Civic', 'Camaro', 'Altima', '3 Series', 'E-Class', 'A4', 'Elantra', 'Sorento',
    '500', 'Clio', 'V60', 'Outlander', '208', 'Impreza', '300', 'F-Type', 'Range Rover', 'MX-5', 'Wrangler', 'Swift', 
    'IS', 'Model S', 'Cooper', '911', 'NSX', 'Challenger', 'Q50', 'Enclave', 'Giulia', 'Sierra', 'Escalade', 'ForTwo',
    'Aventador', 'Ghibli', 'DB11', 'Continental GT', '488 GTB', '720S', 'Phantom', 'Evora', 'Chiron', 'Huayra',
    'Regera', 'G70', 'Arrizo', 'Emgrand', 'Tang','Haval H6'
  ]

  // Obter 20 montadoras fixas p/ já ter um banco de dados para testes + dinâmicos
  const vinte_montadoras_fixas = []
  let inc = 0
  for (let i = 0; i < 20; i++) {
    vinte_montadoras_fixas[inc] = montadoras_[n_aleatorio(0, len(montadoras_))]
    inc++
  }
  
  // Eu tive muitos problemas com essa parte
  // A solução foi criar 20 montadoras fixas (procedimento acima)
  for (let i = 0; i < len(vinte_montadoras_fixas); i++) {
    // Criação de uma montadora: nome, país
    const montadora_fixa = vinte_montadoras_fixas[i]
    const pais_qualquer = paises_[n_aleatorio(0, len(paises_))]
    novo_registro(montadoras, montadoras_chaves, [montadora_fixa, pais_qualquer])
    
    // Criação de um veículo: nome, montadora
    const veiculo_qualquer = veiculos_[n_aleatorio(0, len(veiculos_))] // veiculos_[i]
    novo_registro(veiculos, veiculos_chaves, [veiculo_qualquer, montadora_fixa])
  }
  
  while (entrada != 0) {
    entrada = nova_entrada(menu())
    
    if (entrada === 1) {
      montadoras = nova_montadora(montadoras, montadoras_chaves)
      continuar()
    }
    else if (entrada === 2) {
      console.log(montadoras)
      continuar()
    }
    if (entrada === 3) {
      veiculos = novo_veiculo(veiculos, veiculos_chaves)
      continuar()
    }
    else if (entrada === 4) {
      console.log(veiculos)
      continuar()
    }
    // Filtrar montadoras por país
    else if (entrada === 5) {
      const pais = nova_entrada_txt('Informe o NOME DO PAÍS >>> ')
      const montadoras_deste_pais = montadoras_por_pais(montadoras, montadoras_chaves[1], montadoras_chaves[0], pais)
      console.log(montadoras_deste_pais)
      continuar()
    }
    // Filtrar veículos por país
    else if (entrada === 6) {
      const pais = nova_entrada_txt('Informe o NOME DO PAÍS >>> ')
      console.log(veiculo_por_pais(
        veiculos, montadoras, veiculos_chaves[1], montadoras_chaves[1], veiculos_chaves[0], pais
      )) 
    }
  }
}

function montadoras_por_pais(registro, nome_chave_a, nome_chave_b, valor) {
  const array = []
  let array_i = 0
  for (let i = 0; i < len(registro); i++) {
    if (registro[i][nome_chave_a] === valor) {
      array[array_i] = registro[i][nome_chave_b]
      array_i++
    }
  }
  return array
}

function veiculo_por_pais(
  registro_veiculo, registro_montadora, 
  nome_da_chave_da_montadora, nome_da_chave_do_pais, 
  nome_da_chave_do_nome_do_veiculo, 
  pais_alvo
  ) {
  // Montadora: nome, país
  // Veículo: nome, montadora
  // Eu quero saber quantos veículos pertencem ao país X
  // EXEMPLO: (entrada = 'Alemanha') O "Golf" é da "Volkswagen" -> "Volkswagen" é da "entrada"?
  // Quem é "Golf"? veiculos[i]['nome'] (veiculos_chaves[0])
  // Quem é "Volkswagen"? veiculos[i]['montadora'] (veiculos_chaves[1])
  // QUem é "Alemanha"? montadoras[i]['país'] (montadoras_chaves[1])
  const array = []
  let array_i = 0
  let montadora_do_veiculo = ''
  let pais_da_montadora = ''
  for (let i = 0; i < len(registro_veiculo); i++) {
    montadora_do_veiculo = registro_veiculo[i][nome_da_chave_da_montadora]
    pais_da_montadora = registro_montadora[i][nome_da_chave_do_pais]
    if (pais_da_montadora === pais_alvo) {
      // console.log('---o ',pais_da_montadora, pais_alvo, '---u ', pais_da_montadora === pais_alvo) 
      array[array_i] = registro_veiculo[i][nome_da_chave_do_nome_do_veiculo]
      array_i++
    }
  }
  return array
}

function menu() {
  return `
  ========== VEÍCULOS ==========
  0 - Sair
  1 - Nova montadora
  2 - Ver montadoras
  3 - Novo veículo
  4 - Ver veículos
  5 - Mostrar montadoras por país
  6 - Mostrar veículos por país
  >>> `
}

function continuar() {
  nova_entrada_txt('\n<<< CONTINUE PRESSIONANDO ENTER >>>\n')
  console.clear()
}

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
