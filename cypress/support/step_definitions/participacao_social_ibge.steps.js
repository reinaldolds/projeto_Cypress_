import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Ignorar erros JS do site
Cypress.on("uncaught:exception", () => false);

Given("que acesso a página principal do IBGE", () => {
  cy.visit("https://www.ibge.gov.br/cidades-e-estados.html");
  cy.get("body", { timeout: 10000 }).should("be.visible");
});

When('clico no link "Participe"', () => {
  cy.get('a.link-barra.link-externo-barra')
    .contains("Participe")
    .click();
});

Then('devo ver o título "Participação Social"', () => {
  cy.get('#breadcrumbs-current', { timeout: 10000 })
    .should("contain.text", "Participação Social");
});
