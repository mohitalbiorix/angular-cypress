describe('The Home page', () => {
  it('successfully loaded', () => {
    cy.visit('https://example.cypress.io');
    
    // for pause test
    // cy.pause();
    
    cy.contains('focus');
    cy.contains('focus').click();
    cy.url().should('include', '/commands/actions')
    // action-email -> css className
    cy.get('.action-email')
  .type('fake@email.com').should('have.value', 'fake@email.com')
  })
})


describe('My First Case', ()=>{
  it('should not match', ()=>{
    expect(true).to.equal(true)
  })
})