import { signupPage } from "../pages/signUpPage";
import { dashboardPage } from "../pages/dashboardPage";

describe('Sign up', () => {
    beforeEach(() => {
        cy.fixture("signUpData").as("signUpData")
        cy.visit(Cypress.env("signup"));
    });

    it (`Can sign up with valid data in all fields`, () => {
        cy.get('@signUpData').then((data) => {
            signupPage
            .typeEmail(data.email.valid[0])
            .typeFirstName(data.firstname.valid[0])
            .typeLastName(data.lastname.valid[0])
            .typePassword(data.password.valid[0])
            .clickSignUp()
            dashboardPage
            .checkNavigateToDashboardPage()
            .checkProfileUser(data.email.valid[0],data.firstname.valid[0],data.lastname.valid[0]);
        })
      
    });

    it (`Cannot sign up with empty data in mandatory fields`, () => {
            signupPage
            .clickSignUp()
            .checkEmptyEmailMessage()
            .checkEmptyFirstNameMessage()
            .checkEmptyLastNameMessage()
            .checkEmptyPasswordMessage();
    });

    it (`Cannot sign up with black spaces in mandatory fields`, () => {
        cy.get('@signUpData').then((data) => {
            signupPage
            .typeEmail(data.email.blank_space)
            .typeFirstName(data.firstname.blank_space)
            .typeLastName(data.lastname.blank_space)
            .typePassword(data.password.blank_space)
            .clickSignUp()
            .checkEmptyEmailMessage()
            .checkEmptyFirstNameMessage()
            .checkEmptyLastNameMessage()
            .checkEmptyPasswordMessage();
        })
    });
    //cannot sign up with invalid email:
    const infor = require('../fixtures/signUpData.json');
    const listInvalidEmail = infor.email.invalid;
    listInvalidEmail.forEach((email) => {
        it(`Cannot signup with invalid email: "${email}"`, () => {
            cy.get('@signUpData').then((data) => {
                signupPage
                .typeEmail(email)
                .typeFirstName(data.firstname.valid[0])
                .typeLastName(data.lastname.valid[0])
                .typePassword(data.password.valid[0])
                .clickSignUp()
                .checkInvalidEmailMessage();
            })
        })
    })

    //cannot sign up with invalid first name and last name:
    const listInvalidFirstName = infor.firstname.invalid;
    const listInvalidLastName = infor.lastname.invalid;
    for (let i = 0; i < listInvalidFirstName.length; i++) {
      const firstName = listInvalidFirstName[i];
      const lastName = listInvalidLastName[i];
      it(`Cannot signup with invalid fisrtname: "${firstName}" and invalid last name: "${lastName}" `, () => {
        cy.get('@signUpData').then((data) => {
            signupPage
            .typeEmail(data.email.valid[0])
            .typeFirstName(firstName)
            .typeLastName(lastName)
            .typePassword(data.password.valid[0])
            .clickSignUp()
            .checkInvalidFirstNameMessage()
            .checkInvalidLastNameMessage();
        });
      });
    }
    
    //cannot sign up with invalid email:
    it (`Cannot signup with password less than 6 charactes`, () => {
        cy.get('@signUpData').then((data) => {
            signupPage
            .typeEmail(data.email.valid[0])
            .typeFirstName(data.firstname.valid[0])
            .typeLastName(data.lastname.valid[0])
            .typePassword(data.password.invalid[0])
            .clickSignUp()
            .checkInvalidPasswordMessage();
        })
    });
    it (`Cannot signup with email registered before`, () => {
        cy.get('@signUpData').then((data) => {
            signupPage
            .typeEmail(data.email.valid[0])
            .typeFirstName(data.firstname.valid[0])
            .typeLastName(data.lastname.valid[0])
            .typePassword(data.password.invalid[0])
            .clickSignUp()
            .checkEmailRegisteredMessagee();
        })
    });
});
