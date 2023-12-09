export const orderDetailPage ={
    BTN_ACTIONS: '.input-btn span',
    clickCancel(){
        cy.get(this.BTN_ACTIONS).contains("Cancel Order").click()
        return this;
    }

}

