# Projeto DE GRUPO PARA QA COM BDD + CYPRESS + GHERKIN + CUCUMBER

  + Grupo:
    - Reinaldo Lira
    - Vitor Breno
    - Riquelmy Paulino
    - Elidawydson Santos
    - Keivison Vinícius

# Testes Automatizados - IBGE e Senado Federal

Este projeto contém **testes automatizados** utilizando **BDD** com **Cypress**, **Gherkin** e **Cucumber**, para validar funcionalidades nos portais do **IBGE** e do **Senado Federal**.

---

## Tecnologias utilizadas

- **Cypress**: framework de testes end-to-end.
- **Cucumber + Gherkin**: escrita de testes em linguagem natural (BDD).
- **JavaScript/Node.js**: linguagem para implementar os steps dos testes.

---

## Funcionalidades testadas

### Site do IBGE
- Pesquisa de estados e cidades (ex.: Paraíba).  
- Acesso à página "Participe" e verificação do título "Participação Social".

### Site do Senado Federal
- Acesso à opção "Proponha uma nova lei".  
- Acesso à página de "Acesso à informação".  
- Verificação da página de "Acessibilidade".  
- Navegação para "Perguntas Frequentes".

---

## Estrutura do projeto

- `cypress/e2e/features/`: arquivos `.feature` com os cenários em Gherkin.  
- `cypress/support/step_definitions/`: arquivos `.steps.js` com as implementações dos steps.  

---

## Como iniciar

1. Clone o repositório:
```bash
git clone <seu-repositorio>

2. Instale as dependências:
npm install

3.Abra o Cypress:
npx cypress open

