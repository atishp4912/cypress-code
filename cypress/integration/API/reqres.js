

describe('verify the regres api',()=>{
    it('verify the GET api',()=>{
        cy.request({
            method:"GET",
            url:'https://reqres.in/api/users?page=2'
        }).then(function(response){
            expect(response.status).to.eq(200)
        })
    })
    /////////////////////////////////////////////////////////////////

    it('verify the POST ',()=>{
        cy.request({
            method:"POST",
            url:'https://reqres.in/api/users',
            body:
                {
                    "name": "morpheus",
                    "job": "leader"
                }
            
        }).then(function(response){
            expect(response.status).to.eq(201)
        })
    
    })
    ////////////////////////////////////////////////////////////////

    it('verify the put',()=>{
        cy.request({
            method:"PUT",
            url:'https://reqres.in/api/users/2',
            body:{
                
                    "name": "morpheus",
                    "job": "zion resident"
                
            }
        }).then(function(reponse){
            expect(reponse.status).to.eq(200)
        })
    })

////////////////////////////////////////////////////////////////////

    it('verify the delete method',()=>{
        cy.request({
            method:"DELETE",
            url:'https://reqres.in/api/users/2'
        }).then(function(response){
            expect(response.status).to.eq(204)
        })
    })
})

///////////////////////////////////////////////////////////////////