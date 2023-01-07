Cypress.Command.add('login',(id,password)=>{
    cy.visit('/')
    cy.get('#txtUsername').type('Admin')
    cy.get('#txtPassword').type('admin123')
    cy.get('#btnLogin').click()
})