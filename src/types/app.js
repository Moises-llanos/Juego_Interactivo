// Crear funciones para calcular area y perimetro;

// Inicio del Cuadrado


const perimetroAndAreaC = () => {

    const data = document.querySelector('#perimetro2')
    data.addEventListener('click', () => {
        const value = parseInt(document.querySelector('#lado1').value);
        if (isNaN(value)) return alert('No puede venir vacio o ser un string');
        const perimetro = value * 4
        localStorage.setItem(perimetro, perimetro)
        const p = document.querySelector('p')
        const dato = localStorage.getItem(perimetro)
        p.innerHTML = `El perimetro es: ${dato}`
    })

}

const areaCuadrado = () => {
    const area1 = document.querySelector('#area2')
    area1.addEventListener('click', () => {
        const value = parseInt(document.querySelector('#lado1').value);
        const value2 = parseInt(document.querySelector('#lado2').value);
        if (isNaN(value) || isNaN(value2)) return alert('No puede venir vacio o ser un string');
        if (value != value2) return alert('No es un cuadrado')
        const area = value * value2
        localStorage.setItem(area, area)
        const p = document.querySelector('p')
        const dato = localStorage.getItem(area)
        p.innerHTML = `El Area del Cuadrado es: ${dato}`
    })
}

perimetroAndAreaC()
areaCuadrado()

// Fin del Cuadrado

//Inicio Del Triangulo;

const perimetroTriangulo = () => {
    const perimetro = document.querySelector('#perimetroT')
    perimetro.addEventListener('click', () => {
        const value1 = parseInt(document.querySelector('#baseT').value);
        const value2 = parseInt(document.querySelector('#lado1T').value);
        const value3 = parseInt(document.querySelector('#lado2T').value);
        if (isNaN(value1) || isNaN(value2) || isNaN(value3)) return alert('No Pueden venir vacio o ser un string')
        const perimetroT = (value1 + value2 + value3)
        localStorage.setItem(perimetroT, perimetroT)
        const p = document.querySelector('.parrafo')
        const dato = localStorage.getItem(perimetroT)
        p.innerHTML = `El Perimetro del triangulo es: ${dato}`
    })
}

const areaTriangulo = () => {
    const area = document.querySelector('#areaT')
    area.addEventListener('click', () => {
        const base = parseInt(document.querySelector('#baseT').value)
        const altura = parseInt(document.querySelector('#lado1T').value)
        if (isNaN(base) || isNaN(altura)) return alert('No puede venir vacio o ser un string')
        let area2 = (base * altura) / 2
        localStorage.setItem(area2, area2)
        const p = document.querySelector('.parrafo')
        let dato = localStorage.getItem(area2)
        p.innerHTML = `El Area del triangulo es: ${dato}`
    })
}

perimetroTriangulo()
areaTriangulo()

//Fin del Triangulo

//Inicio de circunferencia 

const areaCircunferencia = () => {
    const area = document.querySelector('#radioC')
    area.addEventListener('click', () => {
        const value = parseInt(document.querySelector('#radio').value);
        if (isNaN(value)) return alert('No puede venir vacio o ser un string')
        const area3 = Number((Math.PI * (value * value)).toFixed(4))
        localStorage.setItem(area3, area3)
        const p = document.querySelector('#circle')
        const dato = localStorage.getItem(area3)
        p.innerHTML = `El area de la circunferencia es: ${dato}`
    })
}

areaCircunferencia()

//Fin circunferencia 

// Boton Flotante

const buttonFlotante = () => {
    const boton = document.querySelector('.flotante');
    boton.addEventListener('click', () => {
        const p1 = document.querySelector('p')
        const p2 = document.querySelector('.parrafo')
        const p3 = document.querySelector('#circle')
        p1.innerHTML = ''
        p2.innerHTML = ''
        p3.innerHTML = ''
    })
}
buttonFlotante()

//Fin button

// Modo dark 

const cambiarColor = (color) => {

    let modo = true
    const dark = document.querySelector('.items4')
    dark.addEventListener('click', () => {
        if (modo) {
            const body = document.querySelector('body')
            body.style.background = color
            return modo = false
        } else if (modo == false) {
            const body = document.querySelector('body')
            body.style.background = '#4460BE'
            return modo = true
        }
    })

}

cambiarColor('#181A35')

//Fin Modo Dark