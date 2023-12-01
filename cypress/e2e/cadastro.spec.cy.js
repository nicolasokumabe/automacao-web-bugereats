describe('Cadastro', ()=>{
  it('Usuário deve se tornar um entregador', ()=>{
    cy.viewport(1920, 1080)
    cy.visit('https://buger-eats.vercel.app')

    cy.get('a[href="/deliver"]').click()

    var entregador = {
      nome: 'Nicolas Kumabe',
      cpf: '0000014141',
      email: 'nicolas@gmail.com',
      whatsapp: '11999999999'
    }

    cy.get('input[name=name').type(entregador.nome)
    cy.get('input[name=cpf').type(entregador.cpf)
    cy.get('input[name=email').type(entregador.email)
    cy.get('input[name=whatsapp').type(entregador.whatsapp)
  })  
})