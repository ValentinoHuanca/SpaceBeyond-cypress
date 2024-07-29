const {galery}= require('../../../support/POM/Galery.Page')

describe('TS',()=>{
    beforeEach('Precondiciones',()=>{
        cy.visit('https://demo.testim.io')
    })
    it('TC1',()=>{
        galery.planetRandom()
        cy.get('.Box__box___2XzJ2.Gallery__items-box___2hOZl [data-react-toolbox="card"]').should('be.visible')

    })
    it('TC2',()=>{
        galery.ColorRandom()
        cy.get('.Box__box___2XzJ2.Gallery__items-box___2hOZl [data-react-toolbox="card"]').should('be.visible')
    })
    it('TC3',()=>{
        galery.sliderRandom()
        cy.get('.Box__box___2XzJ2.Gallery__items-box___2hOZl [data-react-toolbox="card"]').should('be.visible')
        
    })
})