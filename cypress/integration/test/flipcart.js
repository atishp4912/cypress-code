

describe('verify the test ',()=>{
    it('verify the login functionality',()=>{

        cy.visit('https://demo.guru99.com/insurance/v1/index.php')
        cy.get('#email').type()
    })
})