import { dashboardPage } from "../pages/dashboardPage";
import { loginPage } from "../pages/loginPage";

describe('Login', () => {
    beforeEach(() => {
        cy.fixture("loginData").as("loginData")
        cy.visit(Cypress.env("login"));
    });
    it("Can login with valid data in all fields", () => {
        cy.get("@loginData").then((data) => {
            loginPage
            .typeEmail(data.email.valid[0])
            .typePassword(data.password.valid[0])
            .clickLogin();
            dashboardPage
            .checkNavigateToDashboardPage();
        })
    });
    it (`Cannot login with empty data in mandatory fields`, () => {
        loginPage
        .clickLogin()
        .checkEmptyEmailMessage()
        .checkEmptyPasswordMessage();
    });
    it (`Cannot sign up with black spaces in mandatory fields`, () => {
        cy.get("@loginData").then((data) => {
            loginPage
            .typeEmail(data.email.blank_space)
            .typePassword(data.password.blank_space)
            .clickLogin()
            .checkEmptyEmailMessage()
            .checkEmptyPasswordMessage();
    })
    });
    //cannot sign up with invalid email:
    const infor = require('../fixtures/loginData.json');
    const listInvalidEmail = infor.email.invalid;
    listInvalidEmail.forEach((email) => {
    it(`Cannot login with invalid email: "${email}"`, () => {
        cy.get("@loginData").then((data) => {
            loginPage
            .typeEmail(email)
            .typePassword(data.password.valid[0])
            .clickLogin()
            .checkInvalidEmailMessage();
        })
    })
    });
    it (`Cannot login with password less than 6 charactes`, () => {
        cy.get("@loginData").then((data) => {
            loginPage
            .typeEmail(data.email.valid[0])
            .typePassword(data.password.invalid[0])
            .clickLogin()
            .checkInvalidPasswordMessage();
        })
    });
    it (`Cannot login with wrong password`, () => {
        cy.get("@loginData").then((data) => {
            loginPage
            .typeEmail(data.email.valid[0])
            .typePassword(data.password.invalid[1])
            .clickLogin()
            .checkIncorrectPassworMessage();
        })
    });
    it (`Cannot login with user that haven't registered before`, () => {
        cy.get("@loginData").then((data) => {
            loginPage
            .typeEmail(data.email.not_exist)
            .typePassword(data.password.valid[0])
            .clickLogin()
            .checkEmailNotFoundMessage();
        })
    });
});

