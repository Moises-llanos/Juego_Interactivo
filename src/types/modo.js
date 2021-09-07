// Modo dark 

const cambiarColor = (color) => {

    let modo = true
    const dark = document.querySelector('.items4')
    dark.addEventListener('click', () => {
        if (modo) {
            const items = document.querySelector('.items4')
            items.innerHTML = 'Clear Mode'
            const body = document.querySelector('body')
            body.style.background = color
            return modo = false
        } else if (modo == false) {
            const items = document.querySelector('.items4')
            items.innerHTML = 'Mode Dark'
            const body = document.querySelector('body')
            body.style.background = '#4460BE'
            return modo = true
        }
    })

}

cambiarColor('#181A35')

//Fin Modo Dark