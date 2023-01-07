describe('verify the intercept', () => {
    //    beforeEach(function(){

    //    })

    it('verify the user per request', function () {
        it('verify the user per request', function () {
            cy.intercept({
                method: 'GET',
                url: "https://jsonplaceholder.typicode.com/posts"

            }).as('getUser')

            cy.visit('https://jsonplaceholder.typicode.com/')
            cy.get('a[href="/posts"]').first().click()
            cy.wait('@getUser').then(function ({ request, response }) {
                expect(response.statusCode).to.eq(200)
                expect(response.body).to.have.length(100)
            })
        })
        //..............................................................................
        it('verify the user per request', function () {
            cy.intercept({
                method: 'GET',
                url: "https://jsonplaceholder.typicode.com/posts"

            }, {
                fullName: "Atish"
            }).as('getUser')

            cy.visit('https://jsonplaceholder.typicode.com/')
            cy.get('a[href="/posts"]').first().click()
            cy.wait('@getUser').then(function ({ request, response }) {
                expect(response.statusCode).to.eq(200)
            })

            //..................................................................................
        })
        it('verify the get user', () => {
            cy.fixture('user2').then(function (users) {
                //cy.log('user')
                cy.intercept({
                    method: 'GET',
                    url: 'https://jsonplaceholder.typicode.com/posts'
                }, users).as('@getUser')
                cy.visit('https://jsonplaceholder.typicode.com/')
                cy.get('a[href="/posts"]').first().click()
                cy.wait('@getUser').then(function ({ resolve, rejet }) {
                    expect(response.statusCode).to.eq(200)
                })
            })
        })
    })
})