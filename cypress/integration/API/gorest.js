//refrence type='cypress'//

describe('verify the gorest api', function () {

    let acessToken = '91e46b9faa99514564dd59eccb81ef4367b7ffdd59f64fd04209d814d5746785'
    it('verify the get method', function () {

        cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v2/users",
            Headers: {
                'Authorization': `Bearer ${acessToken}`
            }
        }).then(function (res) {
            expect(res.status).to.eq(200)
            expect(res.body?.length).to.eq(10)
            expect(res.duration).to.be.lessThan(700)

            res.body.forEach(element => {
                expect(element).to.have.keys(['id', 'name', 'email', 'status', 'gender'])
            });

            res.body.forEach(element => {
                expect(element.id).not.to.null
                expect(element.name).not.to.null
                expect(element.email).not.to.null
                expect(element.status).not.to.null
                expect(element.gender).not.to.null

            })
        })
    })

    it('verify the Create user API for Go rest', function () {
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                'Authorization': `Bearer ${acessToken}`
            },
            body: {
                name: "Tenali Ramakrishna",
                gender: "male",
                email: `c.ashdddna${Math.floor(Math.random() * 100000)}@gmail.com`,
                status: "active"
            }

        }).then(function ({ status, body, duration }) {
            expect(status).to.eq(201)
            expect(body).to.have.all.keys("id", "name", "email", "gender", "status")
            expect(duration).to.be.lessThan(1000)

        })
    })

    it('verify the Put api ', function () {
        cy.request({
            method: "PUT",
            url: "https://gorest.co.in/public/v2/users/25",
            headers: {
                'Authorization': `Barer ${acessToken}`
            },
            Body: {
                name: "Allasani Peddana",
                email: `allasani.peana${Math.floor(Math.random() * 100000)}@gmail.com`,
                status: "active"
            }
        }).then(function (res) {
            expect(res.status).to.eq(201)
        })
    })

})