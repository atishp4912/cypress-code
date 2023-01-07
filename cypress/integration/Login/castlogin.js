describe('verify the recast login',()=>{
    it('verify the login',()=>{

        cy.visit('https://app.recast.studio/auth/login/?next=/?ref=header-login')
        cy.get('#login-form > div:nth-child(2)').type('atishp4912@gmail.com')
        cy.get('#login-form > div:nth-child(2)').type('Munna@19dec')
        cy.get('#root > div > section > section > main > div').should('be.visible')

    })
})