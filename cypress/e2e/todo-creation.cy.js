describe("todo creation", () => {
  it("should create todo∂", () => {
    cy.visit("/posts")
      .getCy("todo-submit")
      .should("be.disabled")

      .getCy("todo-input")
      .type("name")

      .getCy("todo-submit")
      .click()

      .getCy(`todo-item-0`)
      .contains("name");
  });
});
