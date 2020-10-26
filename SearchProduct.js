/// <reference types="Cypress" />
var locators = require('../../support/Locators.js'); //Locator strategy

describe 
("Search Product",function()
{
    it("Search Product by Name",function()
    {  
        cy.viewport(1920, 1080)
        cy.visit(Cypress.env('baseUrl')); //Accessing baseUrl from Cypress.json   
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        
        cy.wait(50000)
        cy.xpath("//*[@id='popup_overlay']").click({force:true});
        cy.xpath("//input[@id='search']").type('Office Chair')
        cy.xpath("//input[@id='searchButton']").click({force:true});
        cy.wait(50000)
        cy.xpath("//li[@id='curSortType']").click({force:true}).xpath("//a[contains(text(),'Price: High to Low')]").click({ force: true })
        cy.xpath("//a[contains(text(),'Princeton Executive Chair in Grey Colour')]").click()
       
    })

}
)