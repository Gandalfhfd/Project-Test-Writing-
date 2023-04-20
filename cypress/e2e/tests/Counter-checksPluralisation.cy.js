beforeEach(function () {
  //Opens a private browsing window
  cy.visit('https://todomvc.com/examples/typescript-angular/#/', { private: true })
});

describe('Counter-Checks items are pluralised correctly', () => {
    it('adds two todos and verifies the item is pluralised correctly', () => {
      //Adds 2 new todos
      cy.get('.new-todo').clear('E');
      cy.get('.new-todo').type('Example{enter}');
      cy.get('.new-todo').clear('E');
      cy.get('.new-todo').type('Example1{enter}');
  
      //Views todo list and verifies pluralised form
      cy.get('.todo-count').should('contain', 'items left');
    })
  
    it('adds one todo and verifies the item is pluralised correctly', () => {
      //Adds 1 new todos
      cy.get('.new-todo').clear('E');
      cy.get('.new-todo').type('Example{enter}');
  
      //Views todo list and verifies pluralised form
      cy.get('.todo-count').should('contain', 'item left');
    })
  
    it('adds and completes one todo, and verifies the item is pluralised correctly', () => {
      //Adds and completes one todo
      cy.get('.new-todo').clear('E');
      cy.get('.new-todo').type('Example{enter}');
      cy.get('.toggle').check()
  
      //Views todo list and verifies pluralised form
      cy.get('.todo-count').should('contain', 'items left');
    })
  })
  