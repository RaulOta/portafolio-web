/*==============================================
p = propiedades
m = métodos
==============================================*/

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

pModalProyecto.btnClose.addEventListener("click", mModalProyecto.cerrarModal)

mModalProyecto.mostrarImg()
