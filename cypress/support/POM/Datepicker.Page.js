function randomNumInt(min, max) {
	return Math.floor(Math.random() * (max - min) + min)
}

class DateP {
    get={
        inputDeparting:()=>cy.get('[class="theme__input___qUQeP theme__input___1TiDt theme__input___1TiDt"]').eq(0),
        inputReturning:()=>cy.get('[class="theme__input___qUQeP theme__input___1TiDt theme__input___1TiDt"]').eq(1),
        inputNextMonth:()=>cy.get('[id="right"]'),
        inputLastMonth:()=>cy.get('[id="left"]'),
        monthName:()=>cy.get('[class="theme__title___2Ue3-"]'),
        dayMonth:()=>cy.get('[class="theme__day___3cb3g"]'),
        dayActive:()=>cy.get('.theme__day___3cb3g.theme__active___2k63V span'),
        dayMonthDis:()=>cy.get('[class="theme__day___3cb3g theme__disabled___2N4Gy"]'),
        btnOk:()=>cy.get('.theme__navigation___3eiS- button').eq(1),
        inputAdults:()=>cy.get('[data-react-toolbox="input"] [tabindex="-1"]').eq(0),
        inputChildren:()=>cy.get('[data-react-toolbox="input"] [tabindex="-1"]').eq(1),
        listAC:()=>cy.get('.theme__values___1jS4g.WhiteDropDown__values___3lOeL li'),
        btnSelectD:()=>cy.get('.Hero__hero___1FDXn [data-react-toolbox="button"]')

    }
    randomD(){
        //se exporta los months
        const {months}= Cypress.env('datepicker')
        let monthsL=[30,31,31,30,31,30]
        let year='2024'
        //se da click en el inputDeparting
        this.get.inputDeparting().click()
        //se corre una funcion de numAleatorio para ver si se pasa al mes siguiente
        let clickRandom=randomNumInt(0,3)
        let con=0
        while(con!=clickRandom){
            con++
            this.get.inputNextMonth().click()
        }
        let i
        let selectDay
        let iM1
        //aca se divide en dos rutas posibles, dependiendo si se pasa al mes siguiente o no
        if(clickRandom==0){
            //aca obtenemos el name del mes 
            this.get.monthName().then((nameMon)=>{
                const nameMString=nameMon.text()
                //luego se compara con la lista de meses que se dispone
                for(i in months){
                    if(nameMString==`${months[i]} ${year}`){
                        iM1=+i
                        break
                    }
                }
                //se obtiene el valor de la celda activa
                this.get.dayActive().then((dayA)=>{
                    let dayAString=dayA.text()
                    const dayANum=+dayAString
                    //se resta el valor de la calda activa y el valor de los dias que trae ese mes
                    selectDay=randomNumInt(0,(monthsL[iM1]-dayANum))
                        //si el selectDay es igual a cero, se porcede a dar click en el btn de OK
                        if(selectDay==0){
                            this.get.btnOk().click()
                        }
                        //en caso contrario al selectDay se le resta 1 y se busca su pocicion, se selecciona y se da click en OK
                        else{
                            let selectDayCD1=selectDay-1
                            this.get.dayMonth().eq(`${selectDayCD1}`).click()
                            this.get.btnOk().click()
                        }
                })     
            })

        }
        //si se pasa del mes inicial, primero se obtiene el mes
        else{
            let iM2=0
            this.get.monthName().then((nameMon)=>{
                const nameMString=nameMon.text()
                //luego se compara con la base, y se busca el valor de los dias de ese mes
                for(i in months){
                    if(nameMString==`${months[i]} ${year}`){
                        iM2=parseInt(i)
                        break
                    }
                }
                console.log(iM2)
                console.log(typeof iM2)
                //luego se elige un numero random dentro del rango, se le resta 1
                selectDay=randomNumInt(0,monthsL[iM2])
                console.log(selectDay)
                let prueba=selectDay-1
                console.log(prueba)
                //y finalmente se ubica su pocicion y se da click en el btn OK
                this.get.dayMonth().eq(`${prueba}`).click()
                this.get.btnOk().click()
            })
        }
         
    }
    randomR(){
        const {months}= Cypress.env('datepicker')
        let monthsL=[30,31,31,30,31,30]
        let year='2024'
        this.get.inputReturning().click()
        let clickRandom=randomNumInt(0,3)
        let con=0
        while(con!=clickRandom){
            con++
            this.get.inputNextMonth().click()
        }
        let i
        let selectDay
        let iM1
        if(clickRandom==0){
            //aca obtenemos el name del mes 
            this.get.monthName().then((nameMon)=>{
                const nameMString=nameMon.text()
                //luego se compara con la lista de meses que se dispone
                for(i in months){
                    if(nameMString==`${months[i]} ${year}`){
                        iM1=parseInt(i)
                        break
                    }
                }
                //se obtiene el valor de la celda activa
                this.get.dayActive().then((dayA)=>{
                    let dayAString=dayA.text()
                    const dayANum=+dayAString
                    //se resta el valor de la calda activa y el valor de los dias que trae ese mes
                    selectDay=randomNumInt(0,(monthsL[iM1]-dayANum))
                        //si el selectDay es igual a cero, se porcede a dar click en el btn de OK
                        if(selectDay==0){
                            this.get.btnOk().click()
                        }
                        //en caso contrario al selectDay se le resta 1 y se busca su pocicion, se selecciona y se da click en OK
                        else{
                            let selectDayCD1=selectDay-1
                            this.get.dayMonth().eq(`${selectDayCD1}`).click()
                            this.get.btnOk().click()
                        }
                })     
            })

        }
        //si se pasa del mes inicial, primero se obtiene el mes
        else{
            let iM2
            this.get.monthName().then((nameMon)=>{
                const nameMString=nameMon.text()
                //luego se compara con la base, y se busca el valor de los dias de ese mes
                for(i in months){
                    if(nameMString==`${months[i]} ${year}`){
                        iM2=parseInt(i)
                        break
                    }
                }
                console.log(iM2)
                console.log(typeof iM2)
                //luego se elige un numero random dentro del rango, se le resta 1
                selectDay=randomNumInt(0,monthsL[iM2])
                console.log(selectDay)
                let prueba=selectDay-1
                console.log(prueba)
                //y finalmente se ubica su pocicion y se da click en el btn OK
                this.get.dayMonth().eq(`${prueba}`).click()
                this.get.btnOk().click()
            })
        }
    }
    randomDR(){
        let monthDeparting, dayDepartingI
        const {months}= Cypress.env('datepicker')
        let monthsL=[30,31,31,30,31,30,31]
        let year='2024'
        //Departing--------------------------------------
        this.get.inputDeparting().click()
        //se corre una funcion de numAleatorio para ver si se pasa al mes siguiente
        let clickRandom=randomNumInt(0,2)
        let con=0
        while(con!=clickRandom){
            con++
            this.get.inputNextMonth().eq(0).click()
        }
        let i
        let selectDay
        let iM1
        //aca se divide en dos rutas posibles, dependiendo si se pasa al mes siguiente o no
        if(clickRandom==0){
            //aca obtenemos el name del mes 
            this.get.monthName().then((nameMon)=>{
                const nameMString=nameMon.text()
                //luego se compara con la lista de meses que se dispone
                for(i in months){
                    if(nameMString==`${months[i]} ${year}`){
                        iM1=parseInt(i)
                        break
                    }
                }
                monthDeparting=months[iM1]
                //se obtiene el valor de la celda activa
                this.get.dayActive().then((dayA)=>{
                    let dayAString=dayA.text()
                    const dayANum=+dayAString
                    //se resta el valor de la calda activa y el valor de los dias que trae ese mes
                    selectDay=randomNumInt(0,(monthsL[iM1]-dayANum))
                        //si el selectDay es igual a cero, se porcede a dar click en el btn de OK
                        if(selectDay==0){
                            dayDepartingI=selectDay
                            this.get.btnOk().click()
                        }
                        //en caso contrario al selectDay se le resta 1 y se busca su pocicion, se selecciona y se da click en OK
                        else{
                            let selectDayCD1=selectDay-1
                            dayDepartingI=selectDayCD1+0
                            this.get.dayMonth().eq(`${selectDayCD1}`).click()
                            this.get.btnOk().click()
                        }
                })     
            })

        }
        //si se pasa del mes inicial, primero se obtiene el mes
        else{
            let iM2=0
            this.get.monthName().then((nameMon)=>{
                const nameMString=nameMon.text()
                //luego se compara con la base, y se busca el valor de los dias de ese mes
                for(i in months){
                    if(nameMString==`${months[i]} ${year}`){
                        iM2=parseInt(i)
                        break
                    }
                }
                monthDeparting=months[iM2]
                console.log(iM2)
                console.log(typeof iM2)
                //luego se elige un numero random dentro del rango, se le resta 1
                selectDay=randomNumInt(0,monthsL[iM2])
                console.log(selectDay)
                let prueba=selectDay-1
                console.log(prueba)
                dayDepartingI=prueba+0
                //y finalmente se ubica su pocicion y se da click en el btn OK
                this.get.dayMonth().eq(`${prueba}`).click()
                this.get.btnOk().click()
            })
        }
        //Returning---------------------------
        let iM3=0
        let iM4=0
        let iM5=0
        this.get.inputReturning().click()
        let clickRandom1=randomNumInt(0,3)
        let con1=0
        while(con1!=clickRandom1){
            con1++
            this.get.inputNextMonth().eq(0).click()
        }
        this.get.monthName().then((nameMon)=>{
            let nameMString=nameMon.text()
            if(nameMString==monthDeparting){
                for(i in months){
                    if(nameMString==`${months[i]} ${year}`){
                        iM3=parseInt(i)
                        break
                    }
                }
                let indiDepr=dayDepartingI+1
                this.get.dayMonth().then((days)=>{
                    let daysLen=(days.length)+1
                    selectDay=randomNumInt(indiDepr,daysLen)
                    if(selectDay==daysLen){
                        this.get.btnOk().click()
                    }
                    else{
                        this.get.dayMonth().eq(`${selectDay}`).click()
                        this.get.btnOk().click()
                    }
                })
                
                

            }
            else if(con1==0){
                for(i in months){
                    if(nameMString==`${months[i]} ${year}`){
                        iM4=parseInt(i)
                        break
                    }
                }
                this.get.dayActive().then((daySelect1)=>{
                    let daySelect1S=daySelect1.text()
                    let daySelect1N=(parseInt(daySelect1S)-1)
                    selectDay=randomNumInt(0,(monthsL[iM4]-1))
                    if(selectDay==daySelect1N){
                        this.get.btnOk().click()
                    }
                    else{
                        selectDay=randomNumInt(0,(monthsL[iM4]-2))
                        this.get.dayMonth().eq(`${selectDay}`).click()
                        this.get.btnOk().click()
                    }
                })
                
                
            }
            else{
                for(i in months){
                    if(nameMString==`${months[i]} ${year}`){
                        iM5=parseInt(i)
                        break
                    }
                }
                selectDay=randomNumInt(0,(monthsL[iM5]-1))
                this.get.dayMonth().eq(`${selectDay}`).click()
                this.get.btnOk().click()
            }
        })

    }
    randomA(){
        this.get.inputAdults().click()
        let iAdul=randomNumInt(1,4)
        this.get.listAC().eq(`${iAdul}`).click()
    }
    randomC(){
        this.get.inputChildren().click()
        let iChil=randomNumInt(6,9)
        this.get.listAC().eq(`${iChil}`).click()
    }
    dayDREq(){
        const {months}= Cypress.env('datepicker')
        let monthsL=[30,31,31,30,31,30,31]
        let year='2024'
        let monthNameD=""
        let dayDep,i
        let monNameRS=""
        //Departing----------------------------------------------------
        this.get.inputDeparting().click()
        let clickRandom=randomNumInt(0,3)
        let con=0
        let selectDay,selectDay1
        while(con!=clickRandom){
            con++
            this.get.inputNextMonth().eq(0).click()
        }
        if(con==0){
            this.get.monthName().then((m)=>{
                console.log(m.text())
                monthNameD = m.text()
                console.log(monthNameD)
                this.get.dayMonth().then((d)=>{
                let days=(d.length)
                selectDay=randomNumInt(0,days)
                    if(selectDay==0){
                        dayDep=selectDay
                        this.get.btnOk().click()
                    }
                    else{
                        dayDep=selectDay-1
                        this.get.dayMonth().eq(`${dayDep}`).click()
                        this.get.btnOk().click()
                    }
                })
            
            })
        }
        else{
            let iM1
            this.get.monthName().then((m)=>{
                console.log(m.text())
                monthNameD = m.text()
                //console.log(monthNameD)
                for(i in months){
                if(monthNameD==`${months[i]} ${year}`){
                    iM1=parseInt(i)
                    break
                }
                //console.log(iM1)
                }
                //console.log(i)
                selectDay1=randomNumInt(0,(monthsL[i]-1))
                //console.log(selectDay1)
                dayDep=selectDay1
                this.get.dayMonth().eq(`${selectDay1}`).click()
                this.get.btnOk().click()
            
            })
            
            
        }
        //Returning---------------------------------------
        
        this.get.inputReturning().click()
        this.get.monthName().then((m1)=>{
            monNameRS=m1.text()
            console.log(monthNameD)
            console.log(monNameRS)
            if(monNameRS==monthNameD){
                console.log('mismo mes')
                this.get.dayMonth().then((d)=>{
                    let days=(d.length)
                    console.log(dayDep)
                    this.get.dayMonth().eq(`${dayDep}`).click()
                })
                this.get.btnOk().click()
            }
            else{
                console.log('mes distinto')
                let iM2
                this.get.inputLastMonth().eq(0).click()
                this.get.dayMonth().eq(`${dayDep}`).click()
                this.get.btnOk().click()
            }
        })
        
    }
}
export const dateP = new DateP