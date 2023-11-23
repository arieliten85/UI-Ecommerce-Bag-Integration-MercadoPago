describe("ProductListPage", () => {
  const FRONT_BASE_URL = "http://localhost:3000/";

  beforeEach(() => {
    cy.intercept("http://localhost:8000/api/product", {
      fixture: "products.json",
    }).as("products");
    cy.visit("/");
  });
  it("Navbar should render correctly", () => {
    cy.get('[data-test="navbar-container"]').should("be.visible");

    cy.get('[data-test="logo-nav"]').click();
    cy.url().should("eq", `${FRONT_BASE_URL}`);
  });
});
