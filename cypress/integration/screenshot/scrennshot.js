describe('screenshot',()=>{
    it('complete screen shot in cypress ',()=>{


        
        cy.visit('https://www.google.com')

        cy.get('input[name = "q"]').as('inputname')
        cy.get('@inputname').type('python')
        // cy.wait(5000)
        // //cy.get('inputname').clear()
        // cy.wait(3000)


        cy.pause()
        cy.screenshot() 
        
        // Entire page
        cy.reload()//
    })
})