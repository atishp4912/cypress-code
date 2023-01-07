describe('verify the google ', () => {
    it('verify the google', () => {

        cy.visit('https://www.google.com')
        cy.title().should('include', 'Google')
        cy.title().should('eq', 'Google')
        const c = cy.title()
        cy.get('input[name="q"]', { log: false })
        cy.get('input[name="q"]', { witinSubject: document.getElementsByTagName('li') })
        cy.get('input[name="q"]').should('be.visible')
        //cy.get('input[name = "q"]').should('be.disabled')
        cy.get('input[name="q"]').should('not.have.attr', 'class', 'hello')
        cy.get('.YacQv gsfi').type('q')

    })

    it('Verify the title in cypress', () => {

        cy.visit('https://www.google.com')
        cy.get('input[class="gLFyf gsfi"]').type('python')
        cy.log('by').then(() => {
            console.log('by console')


        })
        it.only('verify the google test', () => {
            cy.visit('https://www.goole.com')
                .should('have.attr', 'name')
                .type('python').find('#textbox')
                .should('have.value', 'python')
                .and('have.value', 'python')

        })
    })
})