/// <reference types="Cypress"/>

describe('Test de regresión para GEF - Aulas ', function() {

  beforeEach(function(){
    cy.log("Ejecutando precondiciones de cada Test")
    // Acceso a la página
    
  })
  
  afterEach(function(){
    cy.log("Ejecutando las postcondiciones de cada test")
  })
  

  // TESTS
  it ('Acceso sin token', function (){
    //cy.get('.ms-auto > :nth-child(2) > .nav-link').click();
    cy.visit("https://demointranet.preving.com/gef-frontend/");
    cy.get('#usuario').should('be.visible');
    
    //cy.get('#search_query_top').type('dress');
    //cy.get('#searchbox > .btn').click();
    //cy.get('.lighter').contains('"dress"');
  })

  it ('Acceso con token', function (){
    cy.visit("https://demointranet.preving.com/sso/login-form.do")
    cy.get('#usuario').clear().type('exevi_user');
    cy.get('#clave').clear().type('Ex3vi_us3r');
    cy.get('button').click();
    cy.get('[align="left"] > tbody > :nth-child(1) > :nth-child(4) > a > img').click();

    cy.get('.h3').contains('Aulas');
    //cy.get('#search_query_top').type('dress');
    //cy.get('#searchbox > .btn').click();
    //cy.get('.lighter').contains('"dress"');
  })


})

