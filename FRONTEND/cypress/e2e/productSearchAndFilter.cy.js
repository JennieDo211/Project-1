import { navHeader } from "../pages/navHeader";
import { productListPage } from "../pages/productListPage";

describe ('Product search and filter', () =>{
    beforeEach(() => {
        cy.fixture("productSearchData").as("productSearchData")
        cy.visit("");
    });
    //search
    it (`List of relevant products will be displayed with name product`, () => {
        cy.get('@productSearchData').then((data) => {
            navHeader
            .clickSearchTextBox()
            .typeNameProduct(data.product[0].name)
            .checkListRelevantProductByName(data.product[0].relevantProduct)
        })
    });
    it('No products will be displayed with non-existing name product', () => {
        cy.get('@productSearchData').then((data) => {
            navHeader
            .clickSearchTextBox()
            .typeNameProduct(data.product[1].name)
            .checkNoProductDisplay();
        })
    });
    const data = require('../fixtures/productSearchData.json');
    //filter by Category
    const listCategory = data.category;
    listCategory.forEach((category) => {
        it(`List of products of "${category.name}" will be displayed correct by filtering Categories `, () => {
                navHeader
                .clickCategory(category.name)
                productListPage
                .checkListRelevantProductByFilter(category.relevantProduct);
        })
    });

    //filter by Brands
    const listBrands = data.brands;
    listBrands.forEach((brand) => {
        it(`List of products of "${brand.name}" will be displayed correct by filtering Brands `, () => {
                navHeader
                .clickBrands(brand.name)
                productListPage
                .checkListRelevantProductByFilter(brand.relevantProduct);
        })
    });
    //sort  by Price
    it('List of ascending products by price will be displayed correct with sort', () => {
            navHeader
            .clickShop()
            productListPage
            .sortPriceLowToHigh()
            .checkListAscendingProductByPrice();
        
    });
    it('List of descending products by price will be displayed correct with sort', () => {
            navHeader
            .clickShop()
            productListPage
            .sortPriceHighToLow()
            .checkListDescendingProductByPrice();
    });
})