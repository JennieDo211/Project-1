export const successfulOrderPage ={
    ORDER_ID: '.order-message a:eq(0)',
    
    checkOrderSuccessful(){
        cy.get(this.ORDER_ID).should("be.visible");
        return this;
    },

}