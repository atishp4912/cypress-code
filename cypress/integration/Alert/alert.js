describe('verify the alert', () => {
    beforeEach(function () {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    })

    it('verify  the alert', () => {
        cy.on('window:alert', function (str) {
            expect(str).to.eqls('I am a JS Alert')
        })
        cy.contains('Click for JS Alert').click()
        cy.get('#result').should('be.visible').and('have.text', 'You successfully clicked an alert')

    })
    it('verify the confirm', () => {
        cy.on('window:alert', function (str) {
            expect(str).to.eqls('Click for JS Confirm')
        })
        cy.contains('Click for JS Confirm').click()
        cy.get('#result').should('be.visible').and('have.text', 'You clicked: Ok')
    })
    it('verify the jspromt', () => {
        cy.on('window:alert', function (str) {
            expect(str).to.eqls('Click for JS Prompt')
        })
        cy.contains('Click for JS Prompt').click()
        cy.get('#result').should('be.visible').and('have.text', 'You entered: solve')
    })



    it('verify the js confirm - Cancel ', function () {
        cy.window().then(function (obj) {
            cy.stub(obj, 'prompt').returns(null)

        })
        cy.contains('Click for JS Prompt').click()
        cy.get('#result').should('be.visible')
            .and('have.text', 'You entered: null')

    })


    it('verify the js confirm - OK ', function () {
        cy.window().then(function (obj) {
            cy.stub(obj, 'confirm').returns(true)
        })
        cy.contains('Click for JS Confirm').click()
        cy.get('#result').should('be.visible')
            .and('have.text', 'You clicked: Ok')
    })


    it('verify the js confirm - Cacel ', function () {
        cy.window().then(function (obj) {
            cy.stub(obj, 'confirm').returns(false)
        })
        cy.contains('Click for JS Confirm').click()
        cy.get('#result').should('be.visible')
            .and('have.text', 'You clicked: Cancel')
            cy.screenshot() 
    })

})


























   

