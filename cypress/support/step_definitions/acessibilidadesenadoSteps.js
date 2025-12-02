import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que acesso a página principal do Senado para acessibilidade", () => {
  cy.visit("https://www12.senado.leg.br/hpsenado");
});

When('clico em "Acessibilidade"', () => {
  cy.get('a.flex-item--center.link.link-deep')
    .contains('Acessibilidade')
    .click();
});

Then('devo ver o título "Acessibilidade"', () => {
  cy.get('h1').contains('Acessibilidade').should('exist');
});
