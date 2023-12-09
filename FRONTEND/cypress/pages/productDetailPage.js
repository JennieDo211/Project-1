export const productDetailPage ={
    LBL_PRODUCT_NAME: '.item-details h1',
    LBL_PRODUCT_BRAND: '.item-details .by a',
    LBL_PRODUCT_DESC: '.item-details .item-desc',
    LBL_PRODUCT_PRICE: '.item-details .price',
    TXT_QUANTITY:'.item-customize input',
    BTN_ADD_TO_CART:'.item-actions button',

    checkInformationProduct(product){
        cy.get(this.LBL_PRODUCT_NAME).should('have.text', product.name);
        cy.get(this.LBL_PRODUCT_BRAND).should('have.text', product.brand);
        cy.get(this.LBL_PRODUCT_DESC).should('have.text', product.desc);
        cy.get(this.LBL_PRODUCT_PRICE).should('have.text', product.price);
        return this;
    },
    addToCart(){
        cy.get(this.BTN_ADD_TO_CART).click({force: true});
        return this;
    },
    typeQuantity(quantity){
        cy.get(this.TXT_QUANTITY).clear();
        cy.get(this.TXT_QUANTITY).type(quantity);
        return this;
    }

    
}