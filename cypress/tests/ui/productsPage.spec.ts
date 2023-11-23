describe("Products Page", () => {
  beforeEach(() => {
    cy.intercept("http://localhost:8000/api/product", {
      fixture: "products.json",
    }).as("products");
    cy.visit("/products");
  });

  it("Should display products correctly", () => {
    cy.wait(2000);

    cy.get('[data-test="product-card"]').should("exist");

    cy.get('[data-test="product-card"]')
      .first()
      .within(() => {
        cy.get('[data-test="product-image"]').should("exist");
        cy.get('[data-test="product-name"]').should("exist");
        cy.get('[data-test="product-price"]').should("exist");
      });
  });
  it("Should add a product to the cart successfully", () => {
    cy.wait(2000);
    cy.get('[data-test="button-add-to-cart"]').first().as("addToCartBtn");
    cy.get("@addToCartBtn").click();
    cy.get(".Toastify__toast--success").should("exist");
    cy.wait(2000);
    cy.visit("/cart");
    cy.get('[data-test="cart-item"]').should("exist");
  });
});
