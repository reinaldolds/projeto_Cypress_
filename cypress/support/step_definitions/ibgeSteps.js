import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Cypress.on("uncaught:exception", () => false);

Given("que acesso o portal de cidades e estados do IBGE", () => {
  cy.visit("https://www.ibge.gov.br/cidades-e-estados.html");

  // O site carrega conteúdo via JS, então esperamos a lista aparecer
  cy.get("#municipios", { timeout: 20000 }).should("exist");
});

When('seleciono o estado "Paraíba"', () => {
  // Às vezes a lista não está toda renderizada ainda
  cy.contains("Paraíba", { timeout: 20000 })
    .scrollIntoView()
    .should("be.visible")
    .click({ force: true });
});

Then("devo ver informações sobre o estado da Paraíba", () => {
  cy.get("h1", { timeout: 15000 })
    .should("contain", "Paraíba");
});
