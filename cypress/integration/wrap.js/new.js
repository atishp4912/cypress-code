
describe('verify thr Amazon url with dynamic dropdown',()=>{
    it('verify the dynamic dropdown',()=>{
        cy.visit('https://www.amazon.in/')
        cy.get('#twotabsearchtextbox').type('apple-13promax')
        cy.get('.autocomplete-results-container').find('.s-suggestion-container').each(function(el){
            cy.wrap(el).invoke('text').then(function(str){
                cy.log(str.trim())
                if(str.trim() == "apple-13promax"){
                    cy.wrap(el).click({force:true})
                }
                    
            })
        })
    })
})