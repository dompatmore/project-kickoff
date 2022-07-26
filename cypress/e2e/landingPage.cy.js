describe('Verification Landing Page', () => {
  it('should be able to go the page', () => {
    cy.visit('http://localhost:3000')
  })
  it("should have a title",()=>{
    cy.title().should('eq','Verification Service')
  })
})