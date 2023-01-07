

describe('verify the test case',()=>{
    it('verify the test',()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //cy.get('h1').should('have.text','Practice Page')
    
        cy.get('#radio-btn-example > fieldset > legend').click()
        cy.get('.radioButton').check(['radio1'],['radio2'],['radio3']).should('be.visible')
        
        
        
    })
    it('verify the deopdown menu',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('body > div:nth-child(3) > div.cen-right-align > fieldset > legend').click()
        cy.get('#dropdown-class-example').select(['option1'],['option2'],['option3'])


        cy.get('#checkbox-example > fieldset > legend').click()
    })
    it.only('verify the deopdown menu',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#openwindow').click()
})
})