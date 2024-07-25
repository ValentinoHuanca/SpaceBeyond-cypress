const {mocha, it} = require('mocha')

const {login} = require('../../../support/POM/LogInAndlogOut.page')

const {faker} =require('@faker-js/faker')

let userNot=faker.internet.userName()
let passNot=faker.internet.password({length:12})


describe('2548|TS|SpaceBeyond | Account | Log-In and Log-Out',()=>{

    const {username,password} = Cypress.env('Login')
    
    let testEspe= false

    beforeEach('Precondiciones',()=>{
        if(testEspe){
            cy.visit('/')
            cy.submitLog('login')
            login.loginHappy(username,password)
            testEspe=false
        }
        else{
            cy.visit('/')
            cy.submitLog('login')
        }
        
    })
    it('TC1|user logs in the website',()=>{
        cy.url().should('include','login')
        login.loginHappy(username,password)
        cy.get('header button').should('include.text',`${username}`)
    })
    it('TC2|user forgot to enters an username in the login',()=>{
        login.loginNotHappy('',passNot)
        cy.get('[data-react-toolbox="input"] .theme__error___3ilni').should('contain.text','Name is a required field.')
        cy.url().should('contain','login')
    })
    it('TC3|user forgot to enters an password in the login',()=>{
        login.loginNotHappy(userNot,'')
        cy.get('[data-react-toolbox="input"] .theme__error___3ilni').should('contain.text','Password is a required field.')
        cy.url().should('contain','login')
    })

    it('TC4|user forgot to enters an username and password in the login',()=>{
        testEspe=true
        login.loginNotHappy('','')
        cy.get('[data-react-toolbox="input"] .theme__error___3ilni').should('contain.text','Name is a required field.')
        cy.get('[data-react-toolbox="input"] .theme__error___3ilni').should('contain.text','Password is a required field.')
        cy.url().should('contain','login')
    })
    it('TC5|user logs out of the website account',()=>{
        cy.submitLog('notlogin')
        cy.get('header button').should('include.text','Log in')
    })
})