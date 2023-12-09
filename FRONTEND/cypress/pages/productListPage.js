export const productListPage ={
    BTN_PRODUCT_NAME: '.item-name',
    BTN_PRODUCT_PRICE: '.price',
    BTN_DDL_SORT:'.react-select__value-container',
    DDL_SORT_LOW_HIGH: '.react-select__menu div:eq(3)',
    DDL_SORT_HIGH_LOW: '.react-select__menu div:eq(2)',
    

    sortPriceLowToHigh(){
        cy.get(this.BTN_DDL_SORT).click()
        cy.get(this.DDL_SORT_LOW_HIGH).click()
        return this;
    },
    sortPriceHighToLow(){
        cy.get(this.BTN_DDL_SORT).click()
        cy.get(this.DDL_SORT_HIGH_LOW).click()
        return this;
    },
    checkListRelevantProductByFilter(relevantProduct){
        for(let i=0; i < relevantProduct.length; i++){
            cy.get(this.BTN_PRODUCT_NAME).should('include.text', relevantProduct[i]);
        }
        return this;
    },
    checkListAscendingProductByPrice() {
        cy.get(this.BTN_PRODUCT_PRICE).should(($prices) => {
          for (let i = 0; i < $prices.length - 1; i++) {
            const currentPrice = parseFloat($prices.eq(i).text().replace('$', '').trim());
            const nextPrice = parseFloat($prices.eq(i + 1).text().replace('$', '').trim());
            expect(currentPrice).to.be.lte(nextPrice);
          }
        });
        return this;
    },
    checkListDescendingProductByPrice() {
        cy.get(this.BTN_PRODUCT_PRICE).should(($prices) => {
          for (let i = 0; i < $prices.length - 1; i++) {
            const currentPrice = parseFloat($prices.eq(i).text().replace('$', '').trim());
            const nextPrice = parseFloat($prices.eq(i + 1).text().replace('$', '').trim());
            expect(currentPrice).to.be.gte(nextPrice);
          }
        });
        return this;
    },

      
}