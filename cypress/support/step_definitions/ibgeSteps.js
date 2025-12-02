import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Ignorar erros JS do site
Cypress.on("uncaught:exception", () => false);

Given("que acesso o portal de cidades e estados do IBGE", () => {
  cy.visit("https://www.ibge.gov.br/cidades-e-estados.html");

  // Espera o campo de pesquisa estar visível
  cy.get("#autoComplete", { timeout: 20000 }).should("be.visible");
});

When('busco pelo estado {string}', (estado) => {
  cy.get("#autoComplete")
    .clear()
    .type(`${estado}{enter}`); // digita o estado e pressiona Enter
});

Then('devo ver o código {string} para o estado da Paraíba', (codigo) => {
  cy.contains("p.codigo", `Código: ${codigo}`, { timeout: 15000 }).should("exist");
});
