function NumeroRandomEntero(min, max) {
	return Math.floor(Math.random() * (max - min) + min)
}






class Galery{
    get={
        inputLaunchPlanet:()=>cy.get('.flexboxgrid__row___1y_mg [tabindex="-1"]').eq(2),
        listPlanetAndColor:()=>cy.get('.theme__values___1jS4g'),
        inputPlanetColor:()=>cy.get('.flexboxgrid__row___1y_mg [tabindex="-1"]').eq(3),
    }

    planetRandom(){
        this.get.inputLaunchPlanet().click()
        let planets=['Madan','Shenji','Tongli','Flagstaff','Sant Cugat Del Valles','Shaheying','Tayabamba','Babahoyo','Cuozhou']
        let numeroPlanet=NumeroRandomEntero(0,8)
        this.get.listPlanetAndColor().contains(`${planets[numeroPlanet]}`).click()
    }

    ColorRandom(){
        this.get.inputPlanetColor().click()
        let color=['Green','Red','Blue','Brown','Purple']
        let numeroPlanet=NumeroRandomEntero(0,4)
        this.get.listPlanetAndColor().contains(`${color[numeroPlanet]}`).click()
    }

}

export const galery= new Galery