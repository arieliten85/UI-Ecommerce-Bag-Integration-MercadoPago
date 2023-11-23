describe("Home-Page Test", function () {
  beforeEach(() => {
    cy.intercept("http://localhost:8000/api/product", {
      fixture: "products.json",
    }).as("products");
    cy.visit("/");
  });

  it("Should navigate to the next and prev product in the slider", function () {
    cy.get('[data-test="slick-container"]').first().scrollIntoView();

    cy.get(".slick-next").first().should("exist").should("be.visible");
    cy.wait(1000);
    // Obtener la primera imagen
    cy.get(".slick-slide")
      .first()
      .find(".itemImages img")
      .invoke("attr", "src")
      .then((firstImage) => {
        // Hacer clic en el botón siguiente
        cy.get(".slick-next").first().click();

        // Esperar a que la nueva imagen esté cargada
        cy.get(".slick-slide.slick-active .itemImages img")
          .invoke("attr", "src")
          .should("not.equal", firstImage);

        cy.wait(1500);

        // Hacer clic en el botón previo
        cy.get(".slick-prev").first().click();

        // Esperar a que la primera imagen vuelva a estar visible
        cy.get(".slick-slide")
          .first()
          .find(".itemImages img")
          .invoke("attr", "src")
          .should("equal", firstImage);
      });
  });
});
