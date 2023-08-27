/// <reference types="cypress" />

describe('submitPage',()=>{
    it('verify succes submit data',()=> {
        cy.fixture('User').then((data)=>{
        cy.visit('https://rahulshettyacademy.com/angularpractice')
        cy.get('input[name="name"]:nth-child(2)').type(data.name)
        cy.get('input[name="email"]:nth-child(2)').type(data.email)
        cy.get('#exampleInputPassword1').type(data.password)
        cy.get('#exampleCheck1').check()
        cy.get('#exampleFormControlSelect1').select('Male')
        cy.get('#inlineRadio2').check()
        cy.get('input[name="bday"]:nth-child(2)').type(data.bday)
        cy.get('.btn').click()
        cy.get('strong').should('have.text','Success!')
        
        })
       
        
    })
})