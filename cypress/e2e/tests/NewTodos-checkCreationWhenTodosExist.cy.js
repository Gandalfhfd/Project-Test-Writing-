beforeEach(function () {
    //Opens a private browsing window
    cy.visit('https://todomvc.com/examples/typescript-angular/#/', { private: true })
  });
  
  describe('New Todos - check creation of new todos when todos exist in the list', () => {
      it('populates the todo list and checks when an additional todo is added', () => {
        //Inputs a new todo
        cy.get('.new-todo').clear('E');
        cy.get('.new-todo').type('Example{enter}');
        
        //Inputs a new todo
        cy.get('.new-todo').clear('E');
        cy.get('.new-todo').type('test{enter}');

        //Check the new todo is appended to the todo list
        cy.get('.todo-list').should('contain', 'test');

        //Check the input element is clear
        cy.get('.new-todo').should('have.value', '');
      })
    
      it('populates the todo list and checks when an additional todo is added', () => {
        //Populating the todo list
        cy.get('.new-todo').clear('E');
        cy.get('.new-todo').type('Example{enter}');
        cy.get('.new-todo').clear('E');
        cy.get('.new-todo').type('Example1{enter}');
        
        //Inputs a new todo
        cy.get('.new-todo').clear('E');
        cy.get('.new-todo').type('test{enter}');

        //Check the new todo is appended to the todo list
        cy.get('.todo-list').should('contain', 'test');

        //Check the input element is clear
        cy.get('.new-todo').should('have.value', '');
      })

      it('populates the todo list and checks when an additional todo is added', () => {
        //Populating the todo list
        cy.get('.new-todo').clear('E');
        cy.get('.new-todo').type('Example{enter}');
        cy.get('.new-todo').clear('E');
        cy.get('.new-todo').type('Example1{enter}');
        cy.get('.new-todo').clear('E');
        cy.get('.new-todo').type('Example3{enter}');
        cy.get('.new-todo').clear('E');
        cy.get('.new-todo').type('Example4{enter}');
        cy.get('.new-todo').clear('E');
        cy.get('.new-todo').type('Example5{enter}');
        
        //Inputs a new todo
        cy.get('.new-todo').clear('E');
        cy.get('.new-todo').type('test{enter}');

        //Check the new todo is appended to the todo list
        cy.get('.todo-list').should('contain', 'test');

        //Check the input element is clear
        cy.get('.new-todo').should('have.value', '');
      })
    })