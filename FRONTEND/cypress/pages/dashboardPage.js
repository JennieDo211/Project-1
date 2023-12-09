export const dashboardPage = {
    
    TXT_EMAIL: ".one-line-ellipsis",
    TXT_FIRSTNAME: 'input[name="firstName"]',
    TXT_LASTNAME: 'input[name="lastName"]',
    BTN_ORDER: '.panel-links > :nth-child(4) > a',
    BTN_LABEL_ORDER:'.mb-1 .order-label',


    checkNavigateToDashboardPage(){
        cy.url().should('include', '/dashboard')
        return this;
    },
    checkProfileUser(email,firstName,lastName){
        cy.get(this.TXT_EMAIL).contains(email).should("be.visible");
        cy.get(this.TXT_FIRSTNAME).should('have.value', firstName);
        cy.get(this.TXT_LASTNAME).should('have.value', lastName);
        return this;
    },
    clickTrackOrder(){
        cy.get(this.BTN_ORDER).contains("Order").click()
        return this;
    },
    clickOrderWantToTrack(orderID){
        cy.get(this.BTN_LABEL_ORDER).contains(orderID).click()
        return this;
    },
    checkOrderCancelSuccessful(orderID){
        cy.get(this.BTN_LABEL_ORDER).contains(orderID).should("not.be.visible")
        return this;
    }
}