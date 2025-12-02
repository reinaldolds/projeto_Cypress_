# language: pt

Funcionalidade: Consulta de estados no portal do IBGE

  Cenário: Acessar a página de cidades e estados
    Dado que acesso o portal de cidades e estados do IBGE
    Quando seleciono o estado "Paraíba"
    Então devo ver informações sobre o estado da Paraíba
