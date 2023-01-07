describe('verify the shadow dom', () => {
    it('verify the shadow dom', () => {
        cy.visit('http://127.0.0.1:5500/cypress/integration/Shadow.Dom/index.html')
        cy.get('#channelname').type('chinmay').should('have.value', "chinmay")

    })
    it('validate the shadow dom element', function () {
        cy.visit('http://127.0.0.1:5500/cypress/integration/Shadow.Dom/index.html')
        cy.contains('Add Shadow DOM').click()
        cy.get('#shadowHost').shadow()
            .find('h2')
            .should('have.text', 'I belong to Shadow DOM')
    })
    it('verify th shadow dom',()=>{
        cy.visit('http://127.0.0.1:5500/cypress/integration/Shadow.Dom/index.html')
        cy.contains('Add Shadow DOM').click()
        cy.get('#shadowHost').shadow().find('#name').type('munna').should('have.value','munna')
    })


    it('validate the shadow dom element', function () {
        cy.visit('http://127.0.0.1:5500/cypress/integration/Shadow.Dom/index.html')

        cy.contains('Add Shadow DOM').click()
        cy.get('#shadowHost').then(function (el) {
            let [dom] = el.get()
            expect(dom.shadowRoot.querySelector('h2').textContent).to.eq('I belong to Shadow DOM')
        })

        it.only('validate the shadow dom element', function () {
            cy.visit('http://127.0.0.1:5501/cypress/index.html')
            cy.contains('Add Shadow DOM').click()
            cy.get('h2').first().should('have.text','I belong to Shadow DOM')
           
        })
    
        it.only('validate the shadow dom element', function () {
            cy.visit('http://127.0.0.1:5501/cypress/index.html')
            cy.contains('Add Shadow DOM').click()
            cy.get('h2',{includeShadowDom:true}).first().should('have.text','I belong to Shadow DOM')
           
        })
    
    })
})