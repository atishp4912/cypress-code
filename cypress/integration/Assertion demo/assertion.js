
describe('verify the Assertion demo',function(){
    it('Assertion demo',function(){

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include','orangehrmlive.com')
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contain','orangehrm')

        //use multiple assertion [should]

        cy.url().should('include','orangehrmlive.com')
        .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('contain','orangehrm')

         //use multiple assertion [and]
         cy.url().should('include','orangehrmlive.com')
         .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
         .and('contain','orangehrm')

         cy.title().should('include','Orange')
         .and('eq','OrangeHRM')
         .and('contain','HRM')

         cy.get('img[src="/web/images/ohrm_branding.png?1660914792648"]').should('be.visible')
         .and('exist')

         cy.xpath('//a').should('have.length',5)
    })
})