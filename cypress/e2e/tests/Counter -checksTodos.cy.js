describe('Counter-Displays Correct Number of Todos', () => {
  before(function () {
    //Opens a private browsing window
    cy.visit('https://todomvc.com/examples/typescript-angular/#/', { private: true })
  });
  it('adds three todos and checks the todo count', () => {
    //Adds 3 new todos
    cy.get('.new-todo').clear('E');
    cy.get('.new-todo').type('Example{enter}');
    cy.get('.new-todo').clear('E');
    cy.get('.new-todo').type('Example1{enter}');
    cy.get('.new-todo').clear('E');
    cy.get('.new-todo').type('Example2{enter}');

    //Checks count and verifies <strong> tag is present>
    cy.get('.todo-count')
      .find('strong')
      .should('have.text', '3');
  })
})


