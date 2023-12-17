const listaJuegos = document.getElementById('lista-juegos-dia') || document.getElementById('lista-juegos-noche')
const juegos = document.querySelectorAll('.juego')
const btnVotar = document.querySelectorAll('button')

let tiempo = 0
let focus = 0

juegos[0].style.borderColor = "#bf00c5"
juegos[0].parentElement.style.boxShadow = '0 10px 80px -20px #bf00c5'
juegos[0].children[2].style.borderColor = "#bf00c5"

btnVotar[0].focus()

// fetch('http://localhost:?juegos=' + listaJuegos.id.split('-')[2])
//     .then(e => e.json())
//     .then(e => {
//         e.forEach((juego, i) => {
//             const { id, nombre, img } = juego
//             listaJuegos += `
//                 <li>
//                     <div class="juego">
//                         <span class="nombre">${nombre}</span>
//                         <div class="contenedor-img">
//                             <img src="${img}" alt="">
//                         </div>
//                         <div class="numero">
//                             <span> ${i + 1} </span>
//                         </div>
//                         <button id="${id}"><i class="fa-solid fa-play"></i> JUGAR</button>
//                     </div>
//                 </li>
//             `
//         })
//     })

document.onkeyup = (e) => {

    switch (e.keyCode) {
        case 37:
            if (focus > 0) focus -= 1

            break

        case 39:
            if (focus < btnVotar.length - 1) focus += 1

            break

        case 32:
            const elementoFocus = document.activeElement
            const juego = elementoFocus.parentElement

            // fetch('http://localhost:', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({id: elementoFocus.id})
            // })
            //     .then(e => e.json())
            //     .then(e => { })

            break

        default:
            break
    }


    btnVotar[focus].focus()

    tiempo = 0
}

listaJuegos.onscroll = () => {
    const scroll = listaJuegos.scrollLeft

    juegos.forEach((e, i) => {

        const juego = e.parentElement

        if (scroll < juegos[i].offsetLeft) {
            juego.style.boxShadow = '0 10px 80px -20px #bf00c5'
            e.style.borderColor = '#bf00c5'
            e.children[2].style.borderColor = '#bf00c5'
        } else {
            e.style.borderColor = '#49004b'
            juego.style.boxShadow = 'none'
            e.children[2].style.borderColor = '#49004b'
        }

        if (i > 0) {
            if (scroll < juegos[i].offsetLeft && scroll > juegos[i - 1].offsetLeft) {
                juego.style.boxShadow = '0 10px 80px -20px #bf00c5'
                e.style.borderColor = '#bf00c5'
                e.children[2].style.borderColor = '#bf00c5'
            }
            else {
                juego.style.boxShadow = 'none'
                e.style.borderColor = '#49004b'
                e.children[2].style.borderColor = '#49004b'

            }
        }
    })
}

document.onkeydown = (e) => {

    tiempo += 1

    if (e.keyCode == 37 && tiempo >= 80) window.location.href = "../index.html"
}
