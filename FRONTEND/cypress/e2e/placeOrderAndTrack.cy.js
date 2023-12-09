import { navHeader } from "../pages/navHeader";
import { cartComponent } from "../pages/cartComponent";
import { successfulOrderPage } from "../pages/successfulOrderPage";
import { dashboardPage } from "../pages/dashboardPage";
import { orderDetailPage } from "../pages/orderDetailPage";

describe ('Place and track order', () =>{
    beforeEach(() => {
        cy.fixture("orderData").as("orderData")
        cy.fixture("loginData").as("loginData")
        cy.get('@loginData').then((loginData)=>{
            cy.login(loginData);
        })
    });
    it (`Can place order sucessfully`, () => {
        cy.get('@orderData').then((data) => {
            cy.addToCart(data)
            cartComponent
            .clickPlaceOrder();
            successfulOrderPage
            .checkOrderSuccessful();
        })
    });
    it (`Can not place order with emptycart`, () => {
            navHeader.openCart()
            cartComponent
            .checkNoBtnPlaceOrder();
    });
    it(`Can place order sucessfully and cancel it`, () => {
        cy.get('@orderData').then((data) => {
            cy.addToCart(data)
            cartComponent
            .clickPlaceOrder()
            successfulOrderPage
            .checkOrderSuccessful()
            navHeader
            .navigateToDashBoard()
            dashboardPage
            .clickTrackOrder()
            .clickOrderWantToTrack(data.order.orderID)
            orderDetailPage
            .clickCancel()
            dashboardPage
            .checkOrderCancelSuccessful(data.order.orderID)
        
        })
    });
    
})