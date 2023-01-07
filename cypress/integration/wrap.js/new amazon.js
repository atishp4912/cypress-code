describe('verify the amazon',()=>{
    it('verify the test',()=>{
        cy.on('uncought:excption', (err,runnable)=>{
            return false;
        });

        cy.visit('https://www.amazon.com/')
        cy.get('#twotabsearchtextbox').type('puma')
        cy.get('#nav-flyout-searchAjax').click()
        cy.get('div[class="s-desktop-width-max s-desktop-content s-opposite-dir sg-row"]').each(function(el){
            cy.log(el)
        })

    })
})