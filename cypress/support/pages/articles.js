class articlesPage{
    //constructor(){
    //    this.banner = '.lighter';
    //}
    //verifyArticle = (article) =>{
    //    cy.get(this.banner).contains(article);
    //}

    verifyArticle = (article) =>{
        cy.fixture('articles.json').then((locators) => {
            cy.get(locators.banner).contains(article);
        })
    }

}
export default new articlesPage();