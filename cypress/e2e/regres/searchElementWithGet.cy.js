/// <reference types="Cypress" />

describe('formas de encontrar un elemento',function(){

    it('buscar en buscador', function(){
        cy.visit('https://automationpractice.com/index.php');
        // Búsqueda por clase, empieza por punto y se cambian los espacios en blanco por puntos
        cy.get('.search_query.form-control.ac_input').type('Por clase')
        // Búsqueda por id, empieza por almohadilla
        cy.get('#search_query_top').type('Por Id')
        // Búsqueda por cualquier propiedad, lleva corchetes
        cy.get('[name="search_query"]').type('Por propiedad')

        // Borra 
        cy.get('[placeholder="Search"]').clear()

    })

})