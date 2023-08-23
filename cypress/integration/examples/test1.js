/// <reference types="cypress" />



describe('working with inputs', () => {
    
it('registerID', () =>{

    cy.visit('https://rahulshettyacademy.com/angularpractice/')

    cy.get('.navbar-brand').should('have.text','ProtoCommerce')
    cy.get(':nth-child(1) > .form-control').type('Arizal Prakasa')
    cy.get(':nth-child(2) > .form-control').type('jobprakasa@gmail.com')
    cy.get('#exampleInputPassword1').type('jerrymouse')
    cy.get('#exampleCheck1').check()
    cy.get('#exampleFormControlSelect1').select(0)
    cy.get(':nth-child(8) > .form-control').type('1996-05-11')
    cy.get('.btn').click()
    cy.get('.ng-untouched').should('have.value','Arizal Prakasa')
    cy.get('strong').should('have.text','Success!')

})
})