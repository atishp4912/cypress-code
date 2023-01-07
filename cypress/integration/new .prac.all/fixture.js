import info from '../../fixtures/usermunna.json';

describe('verify the contactus form with multiple testcase by index no',function(){

    info.forEach(function(data,index){
        it(`verify the multiple terst cases - ${index}`,function(){
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(data.firstName)
            cy.get('input[name="last_name"]').type(data.lastName)
            cy.get('input[name="email"]').type(data.email)
            cy.get('textarea[name="message"]').type(data.massage)
            cy.get('input[value="SUBMIT"]').click()

        })
    })
})