describe("home pages content", () => {
  it("should contain proper text", () => {
    cy.visit("/").contains("content of home page");
  });
});
