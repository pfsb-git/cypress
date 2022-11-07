
describe('Escribir en busqueda varios textos',function(){

    it('Escribir y limpiar', function(){
        cy.visit('https://automationpractice.com/index.php');
        cy.get("#search_query_top").clear().type("Hola").clear().type("Adios");
    })

})