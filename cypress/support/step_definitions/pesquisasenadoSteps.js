import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

When('pesquiso por {string}', (termo) => {
  cy.get('input#searchField').type(termo);
  cy.get('button#searchSubmit').click();
});

Then('devo ver resultados relacionados a {string}', (termo) => {
  cy.contains('div.searchResults', termo).should('exist');
});
