import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

When('clico em "Acesso à informação"', () => {
  // clica no link baseado no href ou texto
  cy.get('a.link.link-deep')
    .contains('Acesso à informação')
    .click();
});

Then("devo ver o link para a página de Transparência e Prestação de Contas", () => {
  cy.get('#portal-home-link')
    .should('exist')
    .and('have.attr', 'href', 'https://www12.senado.leg.br/transparencia');
});
