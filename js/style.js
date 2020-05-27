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
    modalMovil: document.querySelector(".descripcion-proyecto-movil"),
    btnClose: document.querySelector(".btn-close")

}


let mModalProyecto = {

    cerrarModal: function(){

        pModalProyecto.modalMovil.style.display = 'none'

    },

    mostrarImg: ()=>{

        for(var i = 0; i < pModalProyecto.imgMovil.length; i++){

            pModalProyecto.imgMovil[i].addEventListener("click", mModalProyecto.prueba)

        }

    },

    prueba: (event)=>{

        let imgSelecionada = event.target
        pModalProyecto.modalMovil.style.display = 'inline'
        console.log(imgSelecionada)

    }

}

pMenuMovil.iconoMenu.addEventListener("click", mMenuMovil.mostrarMenu)

pModalProyecto.btnClose.addEventListener("click", mModalProyecto.cerrarModal)

mModalProyecto.mostrarImg()
