# language: pt

Funcionalidade: Consulta de estados no portal do IBGE

  Cenário: Pesquisar estado Paraíba e verificar código
    Dado que acesso o portal de cidades e estados do IBGE
    Quando busco pelo estado "Paraíba"
    Então devo ver o código "25" para o estado da Paraíba
