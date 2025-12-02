import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou no site do governo", () => {
  cy.visit("https://www.gov.br/pt-br");
});

When("eu pesquiso por ENEM", () => {
  // abre o campo de busca
  cy.get('button#campus-search-open')
    .should('be.visible')
    .click();

  // digita no campo verdadeiro
  cy.get('input[name="SearchableText"]')
    .should('be.visible')
    .type("ENEM{enter}");
});

Then("devo ver os resultados relacionados", () => {
  cy.contains("ENEM", { timeout: 10000 }).should("exist");
});
