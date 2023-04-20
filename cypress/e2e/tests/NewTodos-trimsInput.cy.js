beforeEach(function () {
    //Opens a private browsing window
    cy.visit('https://todomvc.com/examples/typescript-angular/#/', { private: true })
  });

describe('New Todos - checks trim is applied to users input', () => {

    it('checks trim is applied to "test"', () => {
      //Inputs a new todo
      cy.get('.new-todo').type('test{enter}');

      //Check the todo is appended to the list
      cy.get('.todo-list').should('contain', 'test');

      //Inspect element for no whitespace
      cy.get('.todo-list')
          .find('label')
          .should('not.have.text', ' ');
      //cy.get('.todo-list').should('not.have.text', ' ');
    })
  
    it('checks trim is applied to "test "', () => {
  //Inputs a new todo
        cy.get('.new-todo').clear();
        cy.get('.new-todo').type('test {enter}');

        //Check the todo is appended to the list
        cy.get('.todo-list').should('contain', 'test');

        //Inspect element for no whitespace
        cy.get('.todo-list')
            .find('label')
            .should('not.have.text', ' ');
        //cy.get('.todo-list').should('not.have.text', ' ');
    })
  
    it('checks trim is applied to " test"', () => {
          //Inputs a new todo
          cy.get('.new-todo').type(' test{enter}');

          //Check the todo is appended to the list
          cy.get('.todo-list').should('contain', 'test');
  
          //Inspect element for no whitespace
          cy.get('.todo-list')
              .find('label')
              .should('not.have.text', ' ');
          //cy.get('.todo-list').should('not.have.text', ' ');
    })
    it('checks trim is applied to " test "', () => {
        //Inputs a new todo
        cy.get('.new-todo').type(' test {enter}');

        //Check the todo is appended to the list
        cy.get('.todo-list').should('contain', 'test');

        //Inspect element for no whitespace
        cy.get('.todo-list')
            .find('label')
            .should('not.have.text', ' ');
        //cy.get('.todo-list').should('not.have.text', ' ');
    })
  })
 