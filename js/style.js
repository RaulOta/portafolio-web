/*==============================================
p = propiedades
m = métodos
==============================================*/

/*==============================================
MENÚ - MÓVIL
==============================================*/

let pMenuMovil = {

    iconoMenu: document.querySelector(".fa-bars"),
    menuMovil: document.querySelector(".contenedor-menu-movil"),
    badera: 0

}

let mMenuMovil = {

    mostrarMenu: ()=>{

        if(pMenuMovil.badera == 0){

            pMenuMovil.menuMovil.style.display = 'block'
            pMenuMovil.badera = 1

        }else{

            pMenuMovil.menuMovil.style.display = 'none'
            pMenuMovil.badera = 0

        }

    }

}

/*==============================================
MODAL MÓVIL - PROYECTOS
==============================================*/
let pModalProyecto = {

    imgMovil: document.querySelectorAll(".img-proyecto-movil"),
    modalMovil: document.querySelectorAll(".descripcion-proyecto-movil"),
    btnClose: document.querySelectorAll(".btn-close")

}


let mModalProyecto = {

    cerrarModal: function(){

        for(let i = 0; i < pModalProyecto.btnClose.length; i++){

            pModalProyecto.btnClose[i].addEventListener("click", (event)=>{

                let idModal = event.target.getAttribute("id")-1
                pModalProyecto.modalMovil[idModal].style.display = 'none'

            })

        }

    },

    mostrarImg: ()=>{

        for(let i = 0; i < pModalProyecto.imgMovil.length; i++){

            pModalProyecto.imgMovil[i].addEventListener("click", mModalProyecto.clickMostrarImg)

        }

    },

    clickMostrarImg: (event)=>{

        // let imgSelecionada = event.target
        // pModalProyecto.modalMovil.style.display = 'inline'
        // console.log(imgSelecionada)

        let idImg = event.target.getAttribute("id")

        for(let i = 0; i < pModalProyecto.modalMovil.length; i++){

            if(idImg == pModalProyecto.modalMovil[i].getAttribute("id")){

                pModalProyecto.modalMovil[i].style.display = 'inline'

                break

            }

        }

    }

}

// MENÚ - MÓVIL

pMenuMovil.iconoMenu.addEventListener("click", mMenuMovil.mostrarMenu)

// MODAL MÓVIL - PROYECTOS

mModalProyecto.cerrarModal()

mModalProyecto.mostrarImg()
