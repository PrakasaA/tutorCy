/// <reference types="cypress"/>

describe('user submit data',()=>{
    it('verify succes submit data',()=> {
        
        cy.visit('https://rahulshettyacademy.com/angularpractice')
        cy.SubmitID('userdata')
        })
    })
