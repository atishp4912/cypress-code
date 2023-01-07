describe('verify the login functionality',()=>{
    
    it('verify the login ',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').click()

    })
     
    it('verify the login ',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').click()
})
 
it('verify the login ',()=>{
    cy.visit('https://facebook.com/')
    cy.get('#email').type('9175620237')
    cy.get('#passContainer').type('munna4912')
    cy.get('button[name="login"]').click()

})
})