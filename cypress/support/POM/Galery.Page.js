function NumeroRandomEntero(min, max) {
	return Math.floor(Math.random() * (max - min) + min)
}
function numeroFloatRandom(min, max) {
    return Math.random() * (max - min) + min;
  }





class Galery{
    get={
        inputLaunchPlanet:()=>cy.get('.flexboxgrid__row___1y_mg [tabindex="-1"]').eq(2),
        listPlanetAndColor:()=>cy.get('.theme__values___1jS4g'),
        inputPlanetColor:()=>cy.get('.flexboxgrid__row___1y_mg [tabindex="-1"]').eq(3),
        sliderSelect:()=>cy.get('.theme__knob____QAHG.PurpleSlider__knob___lSlRq'),
        listDest:()=>cy.get('[class="theme__card___2nWQb GalleryItem__gallery-item___2P8g-"]')
    }

    planetRandom(){
        const {planet}=Cypress.env('ClasificarDest')
        this.get.inputLaunchPlanet().click()
        let numeroPlanet=NumeroRandomEntero(0,8)
        let planetSelect=planet[numeroPlanet]
        this.get.listPlanetAndColor().contains(`${planetSelect}`).click()
    }

    ColorRandom(){
        const {color}=Cypress.env('ClasificarDest')
        this.get.inputPlanetColor().click()
        let numeroPlanet=NumeroRandomEntero(0,4)
        this.get.listPlanetAndColor().contains(`${color[numeroPlanet]}`).click()
    }

    sliderRandom(){
        let sliderRandom=numeroFloatRandom(5.47059,100)
        this.get.sliderSelect().invoke('attr','style',`left:${sliderRandom}%`).click()
    }

}

export const galery= new Galery