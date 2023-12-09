export const loginPage ={
    TXT_EMAIL : 'input[name="email"]:eq(0)',
    TXT_PASSWORD: 'input[name="password"]',
    BTN_LOGIN: '.login-form button:first-child',
    COLOR_RED: 'rgb(220, 53, 69)',
    ERROR_MESSAGE : '.invalid-message',
    ERROR_NOTI: '.notification-message',
    //Actions
    typeEmail(email){
        cy.get(this.TXT_EMAIL).type(email)
        return this;
    },
    typePassword(password){
        cy.get(this.TXT_PASSWORD).type(password);
        return this;
    },
    clickLogin(){
        cy.get(this.BTN_LOGIN).click({force:true});
        return this;
    },
    //Assertion 
    checkEmptyEmailMessage(){
        cy.get(this.TXT_EMAIL).should('have.css', 'border-color', this.COLOR_RED);
        cy.get(this.ERROR_MESSAGE).contains("Email is required.").should('be.visible');
        return this;
    },
    checkEmptyPasswordMessage(){
        cy.get(this.TXT_EMAIL).should('have.css', 'border-color', this.COLOR_RED);
        cy.get(this.ERROR_MESSAGE).contains("Password is required.").should('be.visible');
        return this;
    },
    checkInvalidEmailMessage(){
        cy.get(this.TXT_EMAIL).should('have.css', 'border-color', this.COLOR_RED);
        cy.get(this.ERROR_MESSAGE).contains("Email format is invalid.").should('be.visible');
        return this;
    },
    checkInvalidPasswordMessage(){
        cy.get(this.TXT_PASSWORD).should('have.css', 'border-color', this.COLOR_RED);
        cy.get(this.ERROR_MESSAGE).contains("Password must be at least 6 characters.").should('be.visible');
        return this;
    },
    checkIncorrectPassworMessage() {
        cy.get(this.ERROR_NOTI).should('be.visible').and('have.text', 'Password Incorrect');
        return this;
    },
    checkEmailNotFoundMessage(){
        cy.get(this.ERROR_NOTI).should('be.visible').and('have.text', 'No user found for this email address.');
        return this;
    }
}