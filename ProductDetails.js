/// <reference types="Cypress" />
var strftime = require('strftime')
var locators = require('../../support/Locators.js'); //Locator strategy

describe 
("Search",function()
{
    it("Product Details",function()
    {
       
        cy.viewport(1920, 1080)
        cy.visit("https://www.pepperfry.com/princeton-executive-chair-by-durian-1834343.html?type=search&pos=1:1&total_result=649&searchterm=office%20chair&as=0&sort=price|desc"); //Accessing baseUrl from Cypress.json 
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.wait(4000)
        cy.xpath("//*[@id='popup_overlay']").click({force:true});
    
        cy.xpath("//h1[contains(text(),'Princeton Executive Chair in Grey Colour')]").should("contains.text","Princeton Executive Chair in Grey Colour")
        
        cy.request('https://www.pepperfry.com/princeton-executive-chair-by-durian-1834343.html?type=search&pos=1:1&total_result=649&searchterm=office%20chair&as=0&sort=price|desc').then((response) => {
        cy.writeFile('cypress/fixtures/Test01.txt', response.body)

        
})
        
        
       
        
        



        

       
    })

}
)