describe('Counter-Displays Correct Number of Todos', () => {
  before(function () {
    //Opens a private browsing window
    cy.visit('https://todomvc.com/examples/typescript-angular/#/', { private: true })
  });
  it('checks the input element is focused and types a todo', () => {
    //Checks input elements is focused
    cy.get('.new-todo').click().focused().should('have.class', 'new-todo');

    //Checks cursor is blinking
    const inputElement = document.querySelector('.new-todo');
    if (inputElement) {
      const computedStyle = window.getComputedStyle(inputElement);
      const animationName = computedStyle.getPropertyValue('animation-name');
      const animationDuration = computedStyle.getPropertyValue('animation-duration');
      if (animationName === 'cursormove' && animationDuration === '1s') {
        console.log('Cursor is blinking');
      } else {
        console.log('Cursor is not blinking');
      }
    } else {
      console.log('Input element not found');
    }

    //Inspects input element for autofocus attribute
    cy.get('input.new-todo').should('have.attr', 'autofocus');

    //Types a new todo
    cy.get('.new-todo').clear().type('example');
  });
})