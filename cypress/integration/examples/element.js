/// <reference types="cypress" />
// import 'cypress-iframe'

describe('howToPickElement',()=> {

    it('interacWithElement',()=> {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    // checkbox example
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    cy.get('input[type="checkbox"]').check(['option2','option3'])
    
    // Static Dropdown
    cy.get('select').select('option1').should('have.value','option1')

    // Dynamic Dropdown
    cy.get('#autocomplete').type('ind')
    cy.get('.ui-menu-item div').contains('Indonesia').click()
    cy.get('#autocomplete').should('have.value','Indonesia')

    // Visible Element
    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click()
    cy.get('#displayed-text').should('be.visible')

    // Pop ups/Alert
    cy.get('#alertbtn').click()
    cy.get('#confirmbtn').click()
    //window:alert
    // cy.on('window:alert',(str)=>
    // {
    //     expect(str).to.equal('Hello , share this practice page and share your knowledge')
    // })

    // childTab/Windows
    cy.get('#opentab').invoke('removeAttr','target').click()
    cy.origin('https://www.qaclickacademy.com/',()=>{
        cy.get('.mt-50 h2').should('contain','QAClick Academy')
        cy.go('back')
        
    })

    // Web Table
    cy.get('.table-display tbody tr td:nth-child(2)').contains('Python').next().then((price)=>
    {
        const priceText= price.text()
        expect(priceText).to.equal('25')
    })
    
    // Mouse Hover
    cy.get('div .mouse-hover-content').invoke('show')
    cy.contains('Top').click()
    cy.url().should('include','top')

    // iFrame
    // cy.frameLoaded('#courses-iframe')
    // cy.iframe().find('a[href="mentorship"]').eq(0).click()
    // cy.iframe().find('div h1').should('contains','Mentorship')

    })
})