/// <reference types="Cypress" />

const FRONT_URL = `https://${Cypress.env('GITHUB_USER')}-st-frontend.herokuapp.com/.`
const FRONT_URL_PROD = `https://${Cypress.env('GITHUB_USER')}-st-frontend-prod.herokuapp.com/.`

describe("Verifica os multi-ambientes e modo de desenvolvimento", () => {
  it("Será validado que a tag de desenvolvimento foi encontrada no frontend de desenvolvimento", () => {
    cy.visit(FRONT_URL);
    cy.contains("Em desenvolvimento").should("exist");
  });
  
  it("Será validado que a tag de desenvolvimento não existe no frontend de produção", () => {
    cy.visit(FRONT_URL_PROD);
    cy.contains("Em desenvolvimento").should("not.exist");
  });
});
