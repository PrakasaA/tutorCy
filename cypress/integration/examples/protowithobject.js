/// <reference types="cypress"/>

import submitPage from "../pageObjects/submitPage";


describe('user submit data',()=>{

    it('verify succes submit data',()=> {
        const SubmitPage=new submitPage()
        cy.fixture('User').then((userdata)=>{
    cy.visit('https://rahulshettyacademy.com/angularpractice')
    SubmitPage.protocomerce().should('have.text','ProtoCommerce')
    SubmitPage.nameBox().type(userdata.name)
    SubmitPage.nameBox().should('have.attr','minlength','2')
    SubmitPage.emailBox().type(userdata.email)
    SubmitPage.emailBox().should('have.attr','type','text')
    SubmitPage.passwordBox().type(userdata.password)
    SubmitPage.passwordBox().should('have.attr','placeholder','Password')
    SubmitPage.checkBox().check()
    SubmitPage.checkBox().should('be.checked')
    SubmitPage.genderBox().select('Male')
    SubmitPage.genderBox().should('contains.text','Male')
    SubmitPage.employmentStatus().contains('Student').click()
    SubmitPage.radiobtnStudent().should('be.checked')
    SubmitPage.birthdayBox().type(userdata.bday)
    SubmitPage.birthdayBox().should('have.attr','type','date')
    SubmitPage.submitButton().click()
    SubmitPage.bindingData().should('have.value',userdata.name)
    SubmitPage.alert().should('have.text','Success!')

    
    })
    })
})