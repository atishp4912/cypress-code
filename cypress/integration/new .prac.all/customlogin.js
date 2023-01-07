Cypress.Command.add('Lgin',(id, password)=> {

    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('#txtUsername').type('Admin')
    cy.get('#txtPassword').type('admin123')
    cy.get('#btnLogin').click()
})