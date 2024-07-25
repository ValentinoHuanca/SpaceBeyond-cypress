class Login{
    get={
        inputUsername:()=> cy.get('#login [type="text"]'),
        inputPassword:()=> cy.get('#login [type="password"]'),
        errorMensaje:()=> cy.get('[data-react-toolbox="input"] .theme__error___3ilni'),
        submitBtn:()=> cy.get('[form="login"]')
    }

    loginHappy(username,password){
        this.get.inputUsername().type(`${username}`)
        this.get.inputPassword().type(`${password}`)
        this.get.submitBtn().click()
    }

    loginNotHappy(username,password){
        username && this.get.inputUsername().type(`${username}`)
        password && this.get.inputPassword().type(`${password}`)
        this.get.submitBtn().click()
    }

}

export const login= new Login
