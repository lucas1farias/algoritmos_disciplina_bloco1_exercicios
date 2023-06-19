

function objetivo() {
  return 'Compreender alocação de: VALOR ou REFERÊNCIA'
}

function registro_montadora() {
  return ` 
  montadora = [
      {
          'id': nova_ulid(), 
          'nome': '', 
          'pais': '', 
          'ano_fundacao': int
      }
  ]`
}

function registro_modelo_veiculo() {
  return `
  modelo_veiculo = [
      {
          'id': nova_ulid(), 
          'nome': '', 
          'montadora': registro_montadora, 
          'valor_referencia': int, 
          'motorizacao': float, 
          'turbo': bool, 
          'automatico': bool
      }
  ]`
      
}

function registro_veiculo() {
    return `
    veiculo = [
        {
            'id': nova_ulid(), 
            'modelo_veiculo': registro_modelo_veiculo, 
            'cor': '', 
            'ano_fabricacao': int,
            'ano_modelo': int ou float,
            'valor': float,
            'placa': ''
        }
    ]`
}

function tabela_de_alocacao_de_memoria() {
    return `
    Construa passo a passo da tabela de alocação, variáveis, referências e valores p/ as seguintes operações:
    Observação: considere que você pode guardar qualquer uma das "entidades" em "um slot" apenas
    
    Ex: Tabela de alocação de memória
    -----------------
    Endereço    Valor
    A
    B
    -----------------
    `
}

function operacoes() {
  return `
  
  * Após cada operação, atualize a tabela de alocação de memória 
  (Bote em cada item como fica a pilha de alocação). 
  Use Word/Google Docs ou Excel e assim atualizar mais facilmente os valores.

  * Escreva o fragmento de Código (python/javascript) correspondente a cada operação.

  * A cada passo lembre de incluir como passa a ficar a tabela de alocação de memória.
  
  Montadora do sistema = [(8, montadora_A), (6, 7, montadora_B)]
  Montadoras           = [3, 5]             (2 montadoras)
  Modelo_de_veiculo    = [6, 7, 8]          (anexados à "Modelos")
  Modelos              = [6, 7, 8]          (contêm modelos de veículos)
  Veículos             = [10, 11]           (anexados à "Modelos")
  Modelos              = [10, 11, 14]       (contêm veículos)
  Veículos_montadora_B = [6, 7]             (já existem)

  1. Ao iniciar o programa, pedir ao usuário: seu "nome" e "cargo". (Ex.: "João", "Gerente").
  2. Criar uma "lista vazia" para botar as montadoras.
  3. Crie uma "montadora A" (atributos)
  4. Adicione a "montadora A" à lista de "montadoras do sistema"
  5. Adicionar diretamente em "montadoras" mais uma montadora (essa será o que vou chamar de "B")
  6. Crie um "modelo de veículo T" vinculado à "montadora B"
  7. Crie um "modelo de veículo U" vinculado à "montadora B"
  8. Crie um "modelo de Veículo V" vinculado à "montadora A"
  9. Crie uma "lista para modelos" que já nasce com os "três modelos acima".
  10. Crie um "veículo F" do "modelo U"
  11. Crie um "veículo G" do "modelo V"
  12. Crie uma "lista de modelos" vazia.
  13. Adicione "F e G (veículos)" à lista de modelos.
  14. Adicione a "modelos" on-the-fly mais um "veículo H", do "modelo T".
  15. Altere o "nome do usuário" e o "cargo".
  16. Crie uma lista de veículos "veiculos_montadora_b", resultado de um operação de filtro apenas da "Montadora B"
  17. Guarde em "soma_estoque" o somatório do valor de todos os veículos (reduce)
  18. Guarde em "veiculo_mais_caro" o veículo mais caro do estoque (reduce)
  19. Crie uma nova lista a partir do mapeamento da lista "montadoras" que tenha apenas os atributos: 
      nome, ano_de_fundacao, que tem o nome da montadora e quantos anos ela tem.
  20. Limpar, apagar todos os objetos criados anteriormente, mantendo apenas em memória o nome e cargo do usuário.
  `
}
