describe('verify the get navigation bar',function(){

    //jquery ------ javascript

    // .contents()
    let getIframeBody = function(id){
        return cy.get(`#${id}`)
        .its('0.contentDocument.body').should('not.be.empty')
        .then(cy.wrap)

    }
    it('verify the active link in nav Iframe- using jquery',function(){

        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then(function($iframe){
            let body = $iframe.contents().find('body')
            cy.wrap(body).as('bdy')
            cy.get('@bdy').find("a[href='index.html']").parent().should('have.class','active')
        })
      //  cy.get('a[href="index.html"]').parent().should('have.class','active')
    })

    it('verify the active link in nav using Javascript',function(){

        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then(function(iframe){
            let body = iframe[0].contentDocument.body
            cy.wrap(body).as('bdy')
            cy.get('@bdy').find('a[href="index.html"]').parent().should('have.class','active')
        })
      //  cy.get('a[href="index.html"]').parent().should('have.class','active')
    })

    
    it('verify the active link in nav using Javascript',function(){

        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
        getIframeBody('frame').then(function(bdy){
            cy.wrap(bdy).as('bdy')
            cy.get('@bdy').find('a[href="index.html"]').parent().should('have.class','active')

        })
})

})
