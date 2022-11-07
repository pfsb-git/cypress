describe('Acceso a elementos iguales', function(){

    beforeEach(function(){
        cy.visit("http://automationpractice.com/");
    })

    it("Acceder al primer elemento de una que comparten varios elementos", function(){
        // Accedemos al primer elemento de todos los que tengan ese mismo class
        cy.get('[class="sf-with-ul"]').first().click();
    })

    it("Acceder a un elemtno por indice", function(){
        // Búsqueda por indice. Con esta expresión en la consola $x("//a[@class='sf-with-ul']")  busca todos los elementos que hay de esa clase y vemos su índice
        cy.get('[class="sf-with-ul"]').eq(3).click(); // No es visible, dará fallo
        
        cy.get('[class="sf-with-ul"]').eq(1).click(); // No es visible, dará fallo
    })

})