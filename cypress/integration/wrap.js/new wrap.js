describe('verify the wrap function',()=>{

    let getInfo =function(x,y){
        return new Promise(function(reslove,reject){
            setTimeout(function(){
                reslove(x+y)
            },2000)
        })
    }

    it('verify the wrap function',()=>{

        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').then(function(el){
            el.val('hello')
            cy.wrap(el).type('hello')
            
        })
    })
    it('verify the cypress wrap',()=>{
        // string
        let name = 'munna pawar'
        cy.wrap(name).should('eq', 'munna pawar')

        // object
        let info ={firstname:'munna',lastname:'pawar'}
        cy.wrap(info).should('have.a.property','firstname','munna')
        cy.wrap(info).should('have.a.property','lastname','pawar')

        // Array
        let names =['munna','amar','om']
        cy.wrap(names).should('include','amar')

        let a1 = getInfo(10,10)
        // cypress
        // wrap helps to wait until asyn call is finished, for sychronus execution
        cy.wrap(a1).should('eq',20)
    })

    it('veriy the cypress wrap element',()=>{
        expect(1).to.eq(2)
    })
})
