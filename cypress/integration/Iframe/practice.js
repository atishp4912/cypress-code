

// describe('verify the iframe',function(){
//     it('verify the iframe',function(){
//         cy.visit('https://demo.automationtesting.in/Frames.html')
//         cy.get('iframe[id="singleframe"]').then((ele)=>{
//             let body =ele.contents().find('body')
//             cy.wrap(body).as('eleone')
//             cy.get('@eleone').find('div[class="container"]').children().find('input[type="text"]:first')
//         })

//     })
// })























// describe('verify the navigation bar',function(){
//     it('verify the active link in nav iframe- using jquery',function(){

//         cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
//         cy.get('#frame').then(function($iframe){
//             let body = $iframe.contents().find('body')
//             cy.wrap(body).as('body')
//             cy.get('@body').find('a[href ="index.html"]').parent().should('have.class','active')
//         })
//     })



//     // using  javascript
//     it('verify the active link using javascript',function(){
//         cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
//         cy.get('#frame').then(function(iframe){
//             let body = iframe[0].contentDocument.body
//             cy.wrap(body).as('body')
//             cy.get('@body').find('a[href="index.html"]').parent().should('have.class','active')
//         })
//     })

    
// })