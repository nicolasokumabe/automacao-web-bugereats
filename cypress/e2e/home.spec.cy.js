




describe('home page', () => {
    it('app deve estar online', () => {
      // cy.viewport(1440, 900)
      cy.viewport(1920, 1080)
      cy.visit('https://buger-eats.vercel.app')
      cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
      cy.get('a[href="/deliver"]').should('have.text', 'Cadastre-se para fazer entregas').click()
      cy.get('#page-deliver')
    })
})