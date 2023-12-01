describe('Cadastro', ()=>{
  it('Usuário deve se tornar um entregador', ()=>{
    cy.viewport(1920, 1080)
    cy.visit('https://buger-eats.vercel.app')

    cy.get('a[href="/deliver"]').click()

    var entregador = {
      nome: 'Nicolas Kumabe',
      cpf: '0000014141',
      email: 'nicolas@gmail.com',
      whatsapp: '11999999999',
      endereco:{
        cep: '04534011',
        rua: 'Rua Joaquim Floriano',
        numero: '1000',
        complemento: 'Apt 142',
        bairro: 'Itaim Bibi',
        cidade_uf: 'São Paulo/SP'
      }
    }

    cy.get('input[name=name').type(entregador.nome)
    cy.get('input[name=cpf').type(entregador.cpf)
    cy.get('input[name=email').type(entregador.email)
    cy.get('input[name=whatsapp').type(entregador.whatsapp)

    cy.get('input[name="postalcode"]').type(entregador.endereco.cep)
    cy.get('input[type=button][value="Buscar CEP"]').click()

    cy.get('input[name="address-number"]').type(entregador.endereco.numero)
    cy.get('input[name="address-details"]').type(entregador.endereco.complemento)

    cy.get('input[name="address"]').should('have.value', entregador.endereco.rua)
    cy.get('input[name="district"]').should('have.value', entregador.endereco.bairro)
    cy.get('input[name="city-uf"]').should('have.value', entregador.endereco.cidade_uf)
  })  
})