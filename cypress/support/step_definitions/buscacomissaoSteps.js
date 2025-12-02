import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que acesso a página de pesquisa do Senado", () => {
  cy.visit("https://www12.senado.leg.br/hpsenado");
});

When('pesquiso por {string}', (termo) => {
  cy.get('input#searchField').type(termo);
  cy.get('button#searchSubmit').click();
});

Then('devo ver resultados relacionados a {string}', (termo) => {
  cy.contains('div.searchResults', termo).should('exist');
});
