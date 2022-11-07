/// <reference types="Cypress"/>
import indexPage from '../../support/pages/index';
import articlesPage from '../../support/pages/articles';

// Suite de login correcto https://www.youtube.com/watch?v=z6ZK_FC2lkE
describe('Test cases de búsqueda ', function() {

  // Se ejecuta antes de todas las pruebas
  before(function(){
    cy.log("Ejecutando precondiciones iniciales")
  })
  // Se ejecuta antes de cada prueba
  beforeEach(function(){
    // Acceso a la página
    cy.visit("https://automationpractice.com/")
    cy.get('#search_query_top').clear();
  })
  // Se ejecuta despues de cada prueba
  afterEach(function(){
    cy.log("Ejecutando las postcondiciones de cada test")
  })
  // Se ejecuta al final de todas las pruebas
  after(function(){
    cy.log("Ejecutando las postcondiciones finales")
  })


  // Busqueda directa
  it ('Búsqueda con resultados', function (){
    cy.get('#search_query_top').type('dress');
    cy.get('#searchbox > .btn').click();
    cy.get('.lighter').contains('"dress"');
  })

  // Utilizando el pageObject
  it ('Búsqueda con resultados utilizando PageObject', function (){
    indexPage.search('hat');    
    articlesPage.verifyArticle('hat');

    cy.miLogFormat('Log for me');
  })

})

