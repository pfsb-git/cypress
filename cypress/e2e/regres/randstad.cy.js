/// <reference types="Cypress"/>

// Suite de login correcto
describe('login correcto', function() {

    // login correcto para usuarios básicos
    it ("Login correcto candidato", function(){
      cy.visit('https://myrandstad.randstad.es/area-privada/candidatos/acceso.aspx')
      cy.get('#onetrust-accept-btn-handler').click().then()
      cy.get('.lbox__form__row > :nth-child(2) > .btn').click()
  
    })
    // login correcto para usuarios avanzados
    
    
  })
  
  