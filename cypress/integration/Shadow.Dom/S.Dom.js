//***** Shadow dom ********

describe('to cheak the shadow dom functionality',()=>{
    it('verify the shadow dom functionality',()=>{
        cy.visit('https://books-pwakit.appspot.com/')
        cy.get('button').click()
        cy.get('book-app').shadow().find('app-toolbar').find('input').type('Hello')
       
    })
})