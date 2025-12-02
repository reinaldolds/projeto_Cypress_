# language: pt

Funcionalidade: Acessar autenticação do gov.br
  Cenário: Login via portal da Receita Federal
    Dado que estou na página inicial da Receita Federal
    Quando clico em "Entrar com gov.br"
    Então devo ser redirecionado para a página de login do gov.br
    E devo ver o título "Identifique-se no gov.br com:"
