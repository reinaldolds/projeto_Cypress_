#language: pt

Funcionalidade: Pesquisa no site do Senado
  Como usuário
  Quero utilizar a barra de pesquisa
  Para verificar se os resultados aparecem corretamente

  Cenario: Pesquisar um termo e ver resultados
    Dado que acesso a página de pesquisa do Senado
    Quando pesquiso por "Comissões"
    Então devo ver resultados relacionados a "Comissões"
