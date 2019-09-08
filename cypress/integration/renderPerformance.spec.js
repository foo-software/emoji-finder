describe('Emoji search', () => {
  it('Types a valid search and erases', async () => {
    cy.viewport('iphone-6');
    cy.visit('http://localhost:3000');
    cy.get('[data-test-id="emojiSearchInput"]')
      .type('h', { delay: 300 })
      .type('o', { delay: 300 })
      .type('u', { delay: 300 })
      .type('s', { delay: 300 })
      .type('e', { delay: 1000 })
      .should('have.value', 'house')
      .type('{backspace}', { delay: 300 })
      .type('{backspace}', { delay: 300 })
      .type('{backspace}', { delay: 300 })
      .type('{backspace}', { delay: 300 })
      .type('{backspace}', { delay: 300 })
      .should('have.value', '');
  });
});
