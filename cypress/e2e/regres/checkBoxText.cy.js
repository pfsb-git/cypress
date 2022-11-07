describe("Prueba check box", function(){
    
    beforeEach(function(){

        cy.visit("http://automationpractice.com/");
        cy.get('.sf-menu > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]').click();
    })

    it("Large Tops search", function(){
        cy.get('#layered_category_4').check();
        cy.get('#layered_id_attribute_group_3').check();
        /* Comprobaciones
        varias */

        cy.get('#layered_id_attribute_group_3').uncheck();
    })

    it("Ordenar usando combo, seleccionando un valor", function(){
        cy.get('#selectProductSort').select('Price: Lowest first');
    })

    // No lo encuentra, ya que es case sensitive
    it("Ordenar usando combo, falla al no encontrar el texto", function(){
        cy.get('#selectProductSort').select('Price: Lowest First');
    })


})