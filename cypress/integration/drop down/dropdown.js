describe('verify the radio button,checkbox,dropdown', () => {
    it('verify the radio function ', () => {

        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        //check
        cy.get('input[value="green"]').check().should('be.checked')
        cy.get('input[value="orange"]').should('not.be.checked')

        //click()
        cy.get('input[value="green"]').click().should('be.checked')
        cy.get('input[value="orange"]').should('not.be.checked')

        //validate every raido
        cy.get('#radio-buttons').find('input').each(function (el) {
            cy.wrap(el).check().should('be.checked')
        })
    })

    it('verify the checkbox', () => {

        // check() and uncheck() method
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value="option-1"]').check().should('be.checked')
        cy.get('input[value="option-1"]').uncheck().should('not.be.checked')
        // using click function()
        // cy.get('input[value="option-3"]').click().should('not.be.checked')
        // cy.get('input[value="option-3"]').click().should('be.checked')

        // checking all check box via arrays as parameter
        //  cy.get('input[type="checkbox"]').check(['option-1','option-2','option-3','option-4']).should('be.checked')
        //  cy.get('input[type="checkbox"]').uncheck(['option-1','option-2','option-3','option-4']).should('not.to.checked')
         // using 
         
         cy.get('input[type="checkbox"]').each(function(el){
            cy.wrap(el).check().should('be.checked')
            cy.wrap(el).uncheck().should('not.be.checked')
        })


   })
   it('verify the drop down ',function(){

    cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')

    // selecting by the value
    cy.get('#dropdowm-menu-1').type('c#')
      // cy.get('#dropdowm-menu-1').children().eq(1).should('have.text',"C#")

        // selecting by the text

        //  cy.get('#dropdowm-menu-1').select('C#')
        //  cy.get('#dropdowm-menu-1').children().eq(1).should('have.text',"C#")

        let selectedValues = ["C#",'Maven',"CSS"]
        cy.get('.section-title').first().find('select').each(function(el,index){
         cy.wrap(el).select(selectedValues[index]).should('contain',selectedValues[index])

      })
 })

 it.only('verify the drop down ',function(){
     cy.visit('http://google.com')
     cy.get('[name="q"]').type('javascript')

      cy.get('[role=option]').find('span').each(function(el){
          cy.log(el.text())
        if(el.text().includes('javascript tutorial')){
              cy.wrap(el).click()
          }
    //  })
    // cy.url().should('contain','tutorial')

 })

})

})
   
