describe ("Pruebas de asertos", function(){
    
    it("vamos a ver una igualdad", function(){
        expect(1==10, "Ambos terminos han de ser iguales y no lo son").to.equal(true);
    })
    // Otra forma de hacer lo mismo
    it("tiene que ser verdadero", function(){
        expect(2==2).to.be.true;
    })

    it("vamos a ver que no sea una igualdad", function(){
        expect(1==2).to.equal(false);
    })
    // Otra forma de hacer lo mismo
    it("tiene que ser falso", function(){
        expect(1==2).to.be.false;
    })

    it("vamos a ver que una resta esté bien", function(){
        expect(1-1).to.equal(0);
    })
    it("vamos a ver que una resta NO esté bien", function(){
        expect(1-1).to.not.equal(2);
    })
  
    var a = 1;
    it("tiene que existir la variable", function(){
        expect(a).to.exist;
    })
    it("variable menor a 10", function(){
        expect(a).to.be.lessThan(10);
    })
    it("Variable mayor a 10", function(){
        expect(25, "El valor de a debe ser menor a 25").to.be.greaterThan(a);
    })

})