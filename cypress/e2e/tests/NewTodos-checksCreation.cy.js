beforeEach(function () {
    //Opens a private browsing window
    cy.visit('https://todomvc.com/examples/typescript-angular/#/', { private: true })
});

describe('New Todos - check creation of new todos when todo list is empty', () => {
    it('adds "Example" to the todo list and checks the new todo is added', () => {
        //Checks todo list is emppty
        cy.get('.todo-list').children().should('not.exist');

        //Inputs a new todo
        cy.get('.new-todo').clear('E');
        cy.get('.new-todo').type('Example{enter}');

        //Check the new todo is appended to the todo list
        cy.get('.todo-list').should('contain', 'Example');

        //Check the input element is clear
        cy.get('.new-todo').should('have.value', '');
    })

    it('adds "test" to the todo list and checks the new todo is added', () => {
        //Checks todo list is emppty
        cy.get('.todo-list').children().should('not.exist');

        //Inputs a new todo
        cy.get('.new-todo').clear('E');
        cy.get('.new-todo').type('test{enter}');

        //Check the new todo is appended to the todo list
        cy.get('.todo-list').should('contain', 'test');

        //Check the input element is clear
        cy.get('.new-todo').should('have.value', '');
    })
})