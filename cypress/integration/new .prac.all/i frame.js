describe('verify the i frame', () => {

    let getIframeBody = function (id) {
        return cy.get(`#${id}`).its('0.contentDocument.body').should('not.be.empty')
            .then(cy.wrap)

    }
    it('verify the actie linlk i frame using jqery', () => {
        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then(function ($iframe) {
            let body = $iframe.contents().find('body')
            cy.wrap(body).as('bdy')
            cy.get('@bdy').find("a[href='index.html']").parent().should('have.class', 'active')
        })

        it('verify the actice link using javascript', () => {
            cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
            cy.get('#frame').then(function (iframe) {
                let body = iframe[0].contentsDocument.body
                cy.wrap(body).as('body')
                cy.get('#body').find('a[href="index.html"]').parent().should('have.class', 'active')

            })


            it('verify the active link in nav using Javascript', function () {

                cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
                getIframeBody('frame').then(function(body){
                    cy.wrap(body).as('body')
                    cy.get('#body').find('a[href="index.html"]').parent().should('have.class','active')
                })


            })
        })
    })
})