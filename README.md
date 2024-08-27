# SpaceBeyond-cypress
Bienvenido a mi muestra de conocimientos en cypress, aplicando mis conocimientos en constante crecimiento.
A continuacion se explicara como ejecutar los diferentes casos de prueba

## Branch

Hay tres branches, las cuales tienen un caso de prueba cada uno:
NOTA:por cada US genero una branch
* LogInAndLogOut
* ClasificarSegunDestinoColorPrecio
* Datepicker

## instalar dependencias

ejecute el comando "npm i" y "npm i --legacy-peer-deps"()

## abrir cypress

se debe escribir en la terminal "npm test"

## Ejecutar pruebas en terminal
Se puede ejecutar en tres navegadores chrome, firefox y edge.

1. **Chrome**:
    ```
    npm run test-reporter-edge **/*/<nameTestSuite>
    ````
2. **Firefox**:
    ```
    npm run test-reporter-firefox **/*/<nameTestSuite>
    ````    
3. **edge**
    ```
    npm run test-reporter-edge **/*/<nameTestSuite>
    ````

estos comando se deben ejecutar en la terminal, generaran cada uno tres informes(uno en html,json y xml) en distintas rutas(cypress/junit-report y mochawesome-report)