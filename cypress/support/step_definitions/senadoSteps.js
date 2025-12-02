import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página do Senado", () => {
  cy.visit("https://www12.senado.leg.br/hpsenado"); 
});

When('clico em "Proponha uma nova lei"', () => {
  cy.contains('strong.title.mt-0', 'Proponha uma nova lei').click();
});

Then("devo ver o link para a página inicial do portal", () => {
  cy.get('#portal-home-link').should('exist');
});
