export const cartComponent ={
    CART: '.mini-cart',
    LBL_NAME_PRODUCT: '.cart-body h2',
    CART_ITEM: '.cart-list .item-box',
    BTN_DELETE_CART: '.item-details button[aria-label="remove NAME from cart"]',
    EMPTY_CART: '.empty-cart',
    BTN_CLOSE_CART:'.close-icon',
    BTN_PLACE_ORDER: '.checkout-actions span',

    checkCartOpen(){
        cy.get(this.CART).should('be.visible')
        return this;
    },
    checkProductAdded(product){
        cy.get(this.CART_ITEM).should('include.text', product.name);
        cy.get(this.CART_ITEM).should('include.text', product.price);
        return this;
    },
    checkProductNotExistInCart(product){
        cy.get(this.CART).should('not.include.text', product.name);
        cy.get(this.CART).should('not.include.text', product.price);
        return this;
    },
    deleteProductFromCartByIcon(product){
        cy.get(`.item-details button[aria-label="remove ${product} from cart"]`).click();
        return this;
    },
    checkCartEmpty(){
        cy.get(this.EMPTY_CART).should("be.visible")
        return this;
    },
    closeCart(){
        cy.get(this.BTN_CLOSE_CART).click();
        return this;
    },
    clickPlaceOrder(){
        cy.get(this.BTN_PLACE_ORDER).contains("Place Order").click()
        return this;
    },
    checkNoBtnPlaceOrder(){
        cy.get(this.BTN_PLACE_ORDER).should('have.length', 0)
        return this;
    }
}