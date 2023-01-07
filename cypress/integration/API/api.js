describe('verify the get api',()=>{
    //let tokan ='91e46b9faa99514564dd59eccb81ef4367b7ffdd59f64fd04209d814d5746785'

    it('verify the GET api ',()=>{
        cy.request({
            method:"GET",
            url: 
            'https://gorest.co.in/public/v2/users',
              headers: {
                Bearer:'91e46b9faa99514564dd59eccb81ef4367b7ffdd59f64fd04209d814d5746785'
            }
        }).then(function(response){
            expect(response.status).to.equals(200)
            expect(response.body.length).to.eqls(20)
            return response.body

        })
    })
})