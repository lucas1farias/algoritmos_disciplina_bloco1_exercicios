

from os import system
from time import sleep

def main():
    rifa_participantes = vetor_indefinido(1001)
    numero_dos_participantes = vetor_indefinido(1001)
    numero_dos_nao_preenchidos = vetor_indefinido(1001)
    
    rifa_participantes_ajustada = []
    numero_dos_participantes_ajustada = []
    numero_dos_nao_preenchidos_ajustada = []
    numeros_sorteados = []
    
    # Python não permite criar índices de arrays vazios
    # Sendo assim, um vetor preenchido de None é criado, recebendo novos valores
    # A variável abaixo, é o contador que redefine e incrementa "rifa_participantes"
    # Ex: rifa_participantes[rifa_participantes_i] = valor que substitui None => então ++
    rifa_participantes_i = 0
    
    ausentes = 0
    valor_rifa = 0
    taxa_rifa = 0
    valor_arrecadado = 0
    qtd_nums_sorteados = 0
    
    entrada = None

    while entrada != 0:
        entrada = entrada_num(menu())

        if entrada == 0:
            procedimento_padrao(.7)
        
        # Resetar
        elif entrada == 1:
            # Dados em tupla p/ evitar linhas gigantescas (funções com retornos múltiplos)
            (
                rifa_participantes, numero_dos_participantes, numero_dos_nao_preenchidos, rifa_participantes_ajustada, 
                numero_dos_participantes_ajustada, numero_dos_nao_preenchidos_ajustada, numeros_sorteados, rifa_participantes_i, ausentes,
                valor_rifa, taxa_rifa, valor_arrecadado, qtd_nums_sorteados, entrada
            ) = resetar_algoritmo()
            procedimento_padrao(.7)
        
        # Efetuar sorteio
        elif entrada == 2:
            efetuar_sorteio(
                numero_dos_participantes_ajustada,
                rifa_participantes_ajustada,
                qtd_nums_sorteados
            )
            procedimento_padrao(.7)

        # Cadastrar participantes
        elif entrada == 3:
            # Funções com retornos múltimos, precisa de muitas variáveis
            # As variáveis estão em tupla para evitar linhas muito longas
            (
                rifa_participantes, numero_dos_participantes, numero_dos_nao_preenchidos, 
                rifa_participantes_i, ausentes
            ) = cadastrar_participante(
                rifa_participantes, 
                numero_dos_participantes, 
                numero_dos_nao_preenchidos,
                rifa_participantes_i,
                ausentes
            )
            rifa_participantes_ajustada = array_filtrado(rifa_participantes)
            numero_dos_participantes_ajustada = array_filtrado(numero_dos_participantes)
            numero_dos_nao_preenchidos_ajustada = array_filtrado(numero_dos_nao_preenchidos)
            procedimento_padrao(.7)
        
        # Cadastrar valor do ponto da rifa
        elif entrada == 4:
            valor_rifa = definir_valor_rifa(valor_rifa)
            procedimento_padrao(.7)
        
        # Cadastrar taxa administrativa
        elif entrada == 5:
            taxa_rifa = definir_taxa_administrativa(taxa_rifa)
            procedimento_padrao(.7)

        # Cadastrar qtd. de números a serem sorteados
        elif entrada == 6:
            qtd_nums_sorteados = definir_qtd_nums_sorteados()
            procedimento_padrao(.7)
        
        # Consultar participantes
        elif entrada == 7:
            consulta = f"""
            Número de participantes:
            {rifa_participantes_ajustada if rifa_participantes_ajustada else 'Rifa ainda sem participantes!'}
            {numero_dos_participantes_ajustada if numero_dos_participantes_ajustada != [] else ''} 
            """
            print(consulta)
            procedimento_padrao(.7)
        
        # Consultar valor atual da rifa
        elif entrada == 8:
            print(f'Valor atual da rifa: R$ {valor_rifa}' if valor_rifa else '\n===== AVISO =====\nValor da rifa ainda não definido')
            procedimento_padrao(.7)
        
        # Consultar valor atual da taxa administrativa
        elif entrada == 9:
            print(f'Porcentagem atual da taxa administrativa: R$ {taxa_rifa}%' if taxa_rifa else '\n===== AVISO =====\nTaxa administrativa ainda não definida')
            procedimento_padrao(.7)

        # Consultar valor arrecadado
        elif entrada == 10:
            qtd_sem_lacunas = contar_char(rifa_participantes_ajustada, '-')
            valor_arrecadado = obter_valor_arrecadado(qtd_sem_lacunas, valor_rifa)
            valor_arrecadado_menos_taxa = valor_arrecadado - (valor_arrecadado * (taxa_rifa / 100))
            comisao_da_plataforma = valor_arrecadado - valor_arrecadado_menos_taxa
            resultado = f"""
            ========== ARRECADAMENTO ==========
            {f'Valor arrecadado:            R$ {valor_arrecadado}' if valor_arrecadado else 'Não é possível calcular o valor sem participantes'}
            {f'Valor arrecadado descontado: R$ {valor_arrecadado_menos_taxa}' if valor_arrecadado_menos_taxa else ''}
            {f'Comissão da plataforma:      R$ {comisao_da_plataforma}' if comisao_da_plataforma else ''}
            """
            print(resultado)
            procedimento_padrao(.7)
        
        # Consultar qtd. de pontos sorteados
        elif entrada == 11:
            print(f'Quantidade de números no sorteio: {qtd_nums_sorteados}' if qtd_nums_sorteados else '\n===== AVISO =====\nNúmeros ainda não foram sorteados')
            procedimento_padrao(.7)

        # Consultar informações gerais
        elif entrada == 12:
            print(exibir_infos_gerais(
                largura(numero_dos_participantes_ajustada) + ausentes,
                largura(numero_dos_participantes_ajustada),
                ausentes,
                numero_dos_participantes_ajustada,
                numero_dos_nao_preenchidos_ajustada
            ))
            procedimento_padrao(.7)

# Utils
def menu():
    return """
    ========== RIFAS TERMINAL ==========
    0 - Sair
    1 - Resetar algoritmo
    2 - Efetuar sorteio
    
    ===== CADASTRO =====
    3 - Participantes
    4 - Valor da rifa
    5 - Taxa administrativa
    6 - Qtd. de números sorteados
    
    ===== CONSULTA =====
    7 - Participantes
    8 - Valor da rifa
    9 - Taxa administrativa
    10 - Valor arrecadado 
    11 - Qtd. de números sorteados
    12 - INFOS GERAIS
    >>> """

def procedimento_padrao(congelamento):
    input('<<< Digite ENTER p/ continuar >>>')
    sleep(congelamento)
    system('cls')

def largura(colecao):
    contador = 0
    for i in colecao:
        contador += 1
    return contador

def vetor_indefinido(qtd):
    array = [None]
    return array * qtd

def intervalo(min, max):
    array = vetor_indefinido(max - min)
    array_i = 0
    while min < max:
        array[array_i] = min
        array_i += 1
        min += 1
    return array

def n_aleatorio(min, max):
    from math import floor
    from random import random
    return floor(random() * (max - min) + min)

def contar_procurados(procurado, colecao):
    procurados = 0
    for i in colecao:
        if i == procurado:
            procurados += 1
    return procurados

def array_filtrado(colecao):
    indices_diferentes_none = 0
    for i in colecao:
        if i is not None:
            indices_diferentes_none += 1
    array = vetor_indefinido(indices_diferentes_none)
    array_i = 0
    for i in colecao:
        if i is not None:
            array[array_i] = i
            array_i += 1
    return array

def entrada_num(conteudo):
    return int(input(conteudo))

def entrada_decimal(conteudo):
    return float(input(conteudo))

def entrada_txt(conteudo):
    return input(conteudo)

# Item 1
def resetar_algoritmo():
    rifa_participantes = vetor_indefinido(1001)
    numero_dos_participantes = vetor_indefinido(1001)
    numero_dos_nao_preenchidos = vetor_indefinido(1001)
    
    rifa_participantes_ajustada = []
    numero_dos_participantes_ajustada = []
    numero_dos_nao_preenchidos_ajustada = []
    numeros_sorteados = []
    
    rifa_participantes_i = 0  # "i" que percorre dois arrays em "cadastrar_participante"
    ausentes = 0
    valor_rifa = 0
    taxa_rifa = 0
    valor_arrecadado = 0
    qtd_nums_sorteados = 0
    
    entrada = None
    return (
        rifa_participantes, numero_dos_participantes, numero_dos_nao_preenchidos, rifa_participantes_ajustada, 
        numero_dos_participantes_ajustada, numero_dos_nao_preenchidos_ajustada, numeros_sorteados, rifa_participantes_i, ausentes, 
        valor_rifa, taxa_rifa, valor_arrecadado, qtd_nums_sorteados, entrada
    )

# Item 2
def embaralhar(colecao):
    for i in intervalo(0, largura(colecao)):
        n = n_aleatorio(0, largura(colecao) - 1)
        pos_inicial = colecao[i]
        colecao[i] = colecao[n]
        colecao[n] = pos_inicial
    return colecao

# Item 2
def efetuar_sorteio(colecao_a, colecao_b, limite):
    nums_embaralhados = embaralhar(colecao_a)
    progressao = 0
    print('========== VENCEDORES ==========')
    print(nums_embaralhados)
    while progressao < largura(colecao_b):
        try:
            for i in intervalo(0, largura(colecao_b)):
                if colecao_b[i][0] == colecao_a[progressao]:
                    input()
                    print(f'Vencedor: {colecao_b[i][1]}')
                    progressao += 1

                    if progressao == limite:
                        return
        except IndexError:
            break
    """
    a = [4, 1, 6, 3, 5, 2]
    b = [[1, 'Ana'], [2, 'Ena'], [3, 'Ena'], [4, 'Ina'], [5, 'Ina'], [6, 'Ina']]
    for i in intervalo(0, largura(b)):
        if b[i][0] == a[0]:
            print(b[i][1])
    """

# Item 3
def cadastrar_participante(colecao_a, colecao_b, colecao_c, i, ausentes):
    participante = None
    while participante != '.':
        participante = entrada_txt('Informe o nome do participante (ou digite . p/ encerrar) >>> ')
        # Impedir o uso do segundo input (qtd_pontos) caso tenha cabado de add participantes
        if participante == '.':
            break
        qtd_pontos = entrada_num('Informe quantas rifas serão compradas >>> ')
        motor = 0
        while motor < qtd_pontos:
            if participante == '-':
                colecao_c[i] = i + 1
                ausentes += 1
                i += 1
            # Impedir de sortear participantes inválidos
            if participante != '-':
                colecao_a[i] = [i + 1, participante]
                colecao_b[i] = i + 1
                i += 1
            with open('RIFA.txt', 'a') as txt:
                if participante != '-':
                    txt.write(participante + '\n')
                else:
                    # Apsar do inválido não ser colocado entre os participantes, seu número conta
                    txt.write('-' + '\n')
            motor += 1
    return colecao_a, colecao_b, colecao_c, i, ausentes

# Item 4
def definir_valor_rifa(ref):
    rifa_preco_oficial = ref
    rifa_preco = entrada_decimal('Informe o preço da rifa (valor decimal sem R$) >>> ')
    rifa_preco_oficial = rifa_preco
    return rifa_preco_oficial

# Item 5
def definir_taxa_administrativa(ref):
    rifa_taxa_oficial = ref
    rifa_taxa = entrada_decimal('Informe a taxa administrativa da rifa (decimal sem R$) >>> ')
    rifa_taxa_oficial = rifa_taxa
    return rifa_taxa_oficial

# Item 6
def definir_qtd_nums_sorteados():
    qtd_nums = entrada_num('Informe quantos serão os números sorteados >>> ')
    return qtd_nums

# Item 10
def contar_char(colecao, separador):
    contador = 0
    for i in colecao:
        if i != separador:
            contador += 1
    return contador

# Item 10
def obter_valor_arrecadado(qtd_participantes, valor_rifa):
    return valor_rifa * qtd_participantes

# Item 12
def exibir_infos_gerais(a, b, c, d, e):
    return f"""
    Pontos disponíveis (qtd.)     {a}
    Pontos vendidos (qtd.)        {b}
    Pontos não vendidos (qtd.):   {c}
    Lista de pontos vendidos:     {d}
    Lista de pontos não vendidos: {e}
    """

main()
