const{dateP} = require('../../../support/POM/Datepicker.Page')

describe('TS| US 2345 | SpaceBeyond | Datepicker | Buscar destino por fecha y grupo de pasajeros',()=>{
    beforeEach('Precondiciones',()=>{
        cy.visit('/')
    })
    
    it('Validar buscar destino por fecha de partida y retorno junto con tipo de pasajero',()=>{
        dateP.randomDR()
        dateP.randomA()
        dateP.randomC()
        cy.get('.Hero__hero___1FDXn [data-react-toolbox="button"]').click()
        cy.get('[class="theme__card___2nWQb GalleryItem__gallery-item___2P8g-"]').should('be.visible')
    })
    it('Validar buscar destino solo por fecha de partida y retorno',()=>{
        dateP.randomDR()
        cy.get('.Hero__hero___1FDXn [data-react-toolbox="button"]').click()
        cy.get('[data-react-toolbox="input"] [tabindex="-1"]').eq(0).should('contain.value','1')
        cy.get('[class="theme__card___2nWQb GalleryItem__gallery-item___2P8g-"]').should('be.visible')
    })
    it('Validar buscar destino solo por cantidad y tipo de pasajeros',()=>{
        dateP.randomA()
        dateP.randomC()
        cy.get('.Hero__hero___1FDXn [data-react-toolbox="button"]').click()
        cy.get('[class="theme__input___qUQeP theme__input___1TiDt theme__input___1TiDt"]').eq(0).should('not.contain.value',null)
        cy.get('[class="theme__card___2nWQb GalleryItem__gallery-item___2P8g-"]').should('be.visible')  
    })
    it('Validar buscar destino por misma fecha de partida y retorno',()=>{
        dateP.dayDREq()
        cy.get('[class="theme__inputElement___27dyY theme__inputElement___1oBGc WhiteDatePicker__inputElement___3d9uL theme__filled___1UI7Z"]').eq(1).then((r)=>{
            let rS=r.attr('value')
            //console.log(rS)
            //console.log(typeof rS)
            let rStA=rS.split(' ')
            //console.log(rStA)
            let dayR=parseInt(rStA[0])
            let dayD=dayR-1
            let dayDeS=dayD.toString()
            rStA[0]=dayDeS
            //console.log(rStA)
            let d =rStA.join(' ')
            cy.get('[class="theme__inputElement___27dyY theme__inputElement___1oBGc WhiteDatePicker__inputElement___3d9uL theme__filled___1UI7Z"]').eq(0).should('contain.value',`${d}`)

        })

    })
})