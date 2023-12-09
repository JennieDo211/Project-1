import { navHeader } from "../pages/navHeader";
import { productDetailPage } from "../pages/productDetailPage";
import { cartComponent } from "../pages/cartComponent";

describe ('Product search and filter', () =>{
    beforeEach(() => {
        cy.fixture("cartData").as("cartData")
        cy.fixture("loginData").as("loginData")
        cy.get('@loginData').then((loginData)=>{
            cy.login(loginData);
        })
    });
    it (`Can add to cart when product in stock`, () => {
        cy.get('@cartData').then((data) => {
            navHeader
            .clickSearchTextBox()
            .typeNameProduct(data.validCart.product[0].name)
            .clickFirstProductSearch()
            productDetailPage
            .checkInformationProduct(data.validCart.product[0])
            .addToCart()
            cartComponent
            .checkCartOpen()
            .checkProductAdded(data.validCart.product[0])
        })
    });
    it (`Can not add to cart when product out of stock`, () => {
        cy.get('@cartData').then((data) => {
            navHeader
            .clickSearchTextBox()
            .typeNameProduct(data.invalidCart.product[0].name)
            .clickFirstProductSearch()
            productDetailPage
            .checkInformationProduct(data.invalidCart.product[0])
            .addToCart()
            navHeader
            .openCart()
            cartComponent
            .checkProductNotExistInCart(data.invalidCart.product[0])
        })
    });
    it (`Can not add to cart with quantity < 1`, () => {
        cy.get('@cartData').then((data) => {
            navHeader
            .clickSearchTextBox()
            .typeNameProduct(data.invalidCart.product[1].name)
            .clickFirstProductSearch()
            productDetailPage
            .checkInformationProduct(data.invalidCart.product[1])
            .typeQuantity(data.invalidCart.product[1].quantity)
            .addToCart()
            navHeader
            .openCart()
            cartComponent
            .checkProductNotExistInCart(data.invalidCart.product[1])
        })
    });
    it (`Can delete from by clicking Trash Icon when Cart has only 1 product`, () => {
        cy.get('@cartData').then((data) => {
            navHeader
            .clickSearchTextBox()
            .typeNameProduct(data.validCart.product[0].name)
            .clickFirstProductSearch()
            productDetailPage
            .addToCart()
            cartComponent
            .deleteProductFromCartByIcon(data.validCart.product[0].name)
            .checkProductNotExistInCart(data.validCart.product[0])
            .checkCartEmpty()

        })
    });
    it (`Can delete from by clicking Trash Icon when Cart has more than 1 product`, () => {
        cy.get('@cartData').then((data) => {
            //add 2 product
            navHeader
            .clickSearchTextBox()
            .typeNameProduct(data.validCart.product[0].name)
            .clickFirstProductSearch()
            productDetailPage.addToCart()
            cartComponent.closeCart()
            navHeader
            .clickSearchTextBox()
            .deleteTextSearchProduct()
            .typeNameProduct(data.validCart.product[1].name)
            .clickFirstProductSearch()
            productDetailPage.addToCart()
            //delete and check
            cartComponent
            .deleteProductFromCartByIcon(data.validCart.product[0].name)
            .checkProductNotExistInCart(data.validCart.product[0])
        })
    });
    
})