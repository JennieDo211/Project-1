export const navHeader = {
    TXT_SEARCH : '.top-header input',
    LST_SEARCH_NAME: '#react-autowhatever-1 .name',
    BTN_CATEGORY: '.bars-icon:eq(0)',
    BTN_CART:'.btn-icon .cart-icon:eq(1)',
    BTN_PROFILE: ':nth-child(3) > .nav-link',
    BTN_DASHBOARD: '.dropdown.show > .dropdown-menu > :nth-child(1)',

    clickSearchTextBox(){
        cy.get(this.TXT_SEARCH).click()
        return this;
    },
    clickBrands(brand){
        cy.get('a.nav-link').contains('Brands').click()
        cy.get('a.brand-link').contains(brand).click()
        return this;
    },
    clickShop(){
        cy.get('a.nav-link').contains('Shop').click()
        return this;
    },
    clickCategory(category){
        cy.get(this.BTN_CATEGORY).click()
        cy.get('.menu-list a').contains(category).click()
        return this;
    },
    navigateToDashBoard(){
        cy.get(this.BTN_PROFILE).click()
        cy.get(this.BTN_DASHBOARD).click()
        return this;

    },
    openCart(){
        cy.get(this.BTN_CART).click()
        return this;
    },
    typeNameProduct(nameProduct){
        cy.get(this.TXT_SEARCH).type(nameProduct)
        return this;
    },
    checkListRelevantProductByName(relevantProduct){
        for(let i=0; i < relevantProduct.length; i++){
            cy.get(this.LST_SEARCH_NAME + ":eq(" + i +")" ).should('have.text', relevantProduct[i]);
        }
        return this;
    },
    checkNoProductDisplay(){
        cy.get(this.LST_SEARCH_NAME).should('not.exist')
        return this;
    },
    clickFirstProductSearch(){
        cy.get(this.LST_SEARCH_NAME + ":eq(0)").click();
        return this;
    },
    deleteTextSearchProduct(){
        cy.get(this.TXT_SEARCH).clear();
        return this;
    }

}