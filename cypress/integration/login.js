

describe('verify the login functionality',()=>{
    it('verify the hrm login',()=>{

        cy.visit('http://orangehrm.qedgetech.com/symfony/web/index.php/auth/login')
        cy.get('input[id="txtUsername"]').type('Admin')
        cy.get('input[id="txtPassword"]').type('admin123')
        cy.get('input[id="btnLogin"]').click()
    })
})