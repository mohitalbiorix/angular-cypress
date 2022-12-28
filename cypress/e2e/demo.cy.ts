describe('First page',()=>{
    it('should be visit home page', ()=>{
      cy.visit("http://localhost:4200/home")
    })
  })
  

describe('should be redirect', ()=>{
  it('should be redirect', ()=>{
    cy.visit("http://localhost:4200/home")
    // cy.contains('About').click();
    cy.get('.btn').click() 
    cy.url().should('include', '/about')
  })

  it('Does not do much!', () => {
    expect(true).to.equal(false)
  })
})
