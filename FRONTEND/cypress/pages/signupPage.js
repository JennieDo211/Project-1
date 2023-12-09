export const signupPage ={
    TXT_EMAIL : 'input[name="email"]:eq(0)',
    TXT_FIRSTNAME: 'input[name="firstName"]',
    TXT_LASTNAME: 'input[name="lastName"]',
    TXT_PASSWORD: 'input[name="password"]',
    COLOR_RED: 'rgb(220, 53, 69)',
    ERROR_MESSAGE : '.invalid-message',
    ERROR_NOTI: '.notification-message',
    //Actions
    typeEmail(email){
        cy.get(this.TXT_EMAIL).type(email)
        return this;
    },
    typeFirstName(firstName){
        cy.get(this.TXT_FIRSTNAME).type(firstName);
        return this;
    },
    typeLastName(lastName){
        cy.get(this.TXT_LASTNAME).type(lastName);
        return this;
    },
    typePassword(password){
        cy.get(this.TXT_PASSWORD).type(password);
        return this;
    },
    clickSignUp(){
        cy.get('span').contains("Sign Up").click({force:true});
        return this;
    },
    //Assertion 
    checkEmptyEmailMessage(){
        cy.get(this.TXT_EMAIL).should('have.css', 'border-color', this.COLOR_RED);
        cy.get(this.ERROR_MESSAGE).contains("Email is required.").should('be.visible');
        return this;
    },
    checkEmptyFirstNameMessage(){
        cy.get(this.TXT_FIRSTNAME).should('have.css', 'border-color', this.COLOR_RED);
        cy.get(this.ERROR_MESSAGE).contains("First Name is required.").should('be.visible');
        return this;
    },
    checkEmptyLastNameMessage(){
        cy.get(this.TXT_LASTNAME).should('have.css', 'border-color', this.COLOR_RED);
        cy.get(this.ERROR_MESSAGE).contains("Last Name is required.").should('be.visible');
        return this;
    },
    checkEmptyPasswordMessage(){
        cy.get(this.TXT_EMAIL).should('have.css', 'border-color', this.COLOR_RED);
        cy.get(this.ERROR_MESSAGE).contains("Password is required.").should('be.visible');
        return this;
    },
    checkInvalidEmailMessage(){
        cy.get(this.TXT_EMAIL).should('have.css', 'border-color', this.COLOR_RED);
        cy.get(this.ERROR_MESSAGE).contains("The email format is invalid.").should('be.visible');
        return this;
    },
    checkInvalidFirstNameMessage(){
        cy.get(this.TXT_FIRSTNAME).should('have.css', 'border-color', this.COLOR_RED);
        cy.get(this.ERROR_MESSAGE).contains("The first name format is invalid.").should('be.visible');
        return this;
    },
    checkInvalidLastNameMessage(){
        cy.get(this.TXT_LASTNAME).should('have.css', 'border-color', this.COLOR_RED);
        cy.get(this.ERROR_MESSAGE).contains("The last name format is invalid.").should('be.visible');
        return this;
    },
    checkInvalidPasswordMessage(){
        cy.get(this.TXT_PASSWORD).should('have.css', 'border-color', this.COLOR_RED);
        cy.get(this.ERROR_MESSAGE).contains("The password must be at least 6 characters.").should('be.visible');
        return this;
    },
    checkEmailRegisteredMessage(){
        cy.get(this.ERROR_NOTI).should('be.visible').and('have.text', 'That email address is already in use.');
        return this;
    }
}
