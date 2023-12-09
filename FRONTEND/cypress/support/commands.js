// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { loginPage } from "../pages/loginPage";
Cypress.Commands.add('login',(loginData)=>{
    cy.visit(Cypress.env("login"));
    loginPage
    .typeEmail(loginData.email.valid[0])
    .typePassword(loginData.password.valid[0])
    .clickLogin();
})


import { navHeader } from "../pages/navHeader";
import { productDetailPage } from "../pages/productDetailPage";
Cypress.Commands.add('addToCart',(orderData)=>{
    navHeader
    .clickSearchTextBox()
    .typeNameProduct(orderData.order.product[0].name)
    .clickFirstProductSearch()
    productDetailPage
    .addToCart()

})