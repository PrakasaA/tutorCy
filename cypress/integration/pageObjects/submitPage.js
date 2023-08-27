class submitPage 
{
protocomerce()
{
    return cy.get('.navbar-brand')
}
nameBox()    
{
    return cy.get('input[name="name"]:nth-child(2)')
}

emailBox()
{
    return cy.get('input[name="email"]:nth-child(2)')
}

passwordBox()
{
    return cy.get('#exampleInputPassword1')
}

checkBox()
{
    return cy.get('#exampleCheck1')
}

genderBox()
{
    return cy.get('#exampleFormControlSelect1')
}

employmentStatus()
{
    return cy.get('.form-group:nth-child(7)')
}
radiobtnStudent()
{
    return cy.get('#inlineRadio1')
}
radiobtnEmployed()
{
    return cy.get('#inlineRadio2')
}
birthdayBox()
{
    return  cy.get('input[name="bday"]:nth-child(2)')
}

submitButton()
{
    return cy.get('.btn')
}
bindingData()
{
    return cy.get('.ng-untouched')
}

alert()
{
    return cy.get('strong')
}
}

export default submitPage