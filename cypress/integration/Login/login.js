describe('verify the facebook login',()=>{
    it('verify the login',()=>{

        cy.visit('https://www.facebook.com/')
        cy.get('#email').type('9175620237')
        cy.get('#pass').type('munna4912')
        cy.wait(4000)
        cy.get('#u_0_9_2L').click()

    })
})