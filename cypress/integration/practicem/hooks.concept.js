////<reference types = "cypress" />

describe('Hooks', ()=>{

    before(()=>{
        cy.log('runs before every test')
    })

    beforeEach(()=>{
        cy.log('runs before each test')
    })

    afterEach(()=>{

        cy.log('runs after the each test')

    })
    after(() =>{
        cy.log('run after every test')

    })

    it('Test case one ',()=>{
        cy.log('Test case one')
    })

    it('Test case Two',()=>{
        cy.log('Test case two')
        expect('1').to.equals('1')
    })

})