#language: pt

Funcionalidade: Consulta pública no site do Senado Federal
  Como usuário
  Quero acessar a opção "Proponha uma nova lei"
  Para verificar se a navegação está funcionando corretamente

  Cenario: Acessar link de proposição de nova lei
    Dado que estou na página do Senado
    Quando clico em "Proponha uma nova lei"
    Então devo ver o link para a página inicial do portal
