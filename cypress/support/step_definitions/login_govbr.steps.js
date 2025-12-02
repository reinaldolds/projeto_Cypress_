import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página inicial da Receita Federal", () => {
  cy.visit("https://www.gov.br/receitafederal/pt-br");

  cy.get("body").then(($body) => {
    if ($body.find("#onetrust-accept-btn-handler").length > 0) {
      cy.get("#onetrust-accept-btn-handler").click({ force: true });
    }
  });
});

When('clico em "Entrar com gov.br"', () => {
  cy.contains("Entrar com gov.br", { timeout: 15000 }).click();
});

Then("devo ser redirecionado para a página de login do gov.br", () => {
  cy.url().should("include", "sso.acesso.gov.br");
});

Then('devo ver o título "Identifique-se no gov.br com:"', () => {
  cy.contains("Identifique-se no gov.br com:", { timeout: 15000 }).should("be.visible");
});
