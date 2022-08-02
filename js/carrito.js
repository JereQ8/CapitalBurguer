const boton1= document.querySelector(".agregarAlCarrito1")
const boton2= document.querySelector(".agregarAlCarrito2")
const boton3= document.querySelector(".agregarAlCarrito3")
const boton4= document.querySelector(".agregarAlCarrito4")
const boton5= document.querySelector(".agregarAlCarrito5")
const boton6= document.querySelector(".agregarAlCarrito6")
const contProductosElegidos= document.querySelector(".productosElegidos")
const sacarDelCarrito = document.querySelector(".sacarDelCarrito");

let arrayHamburguesas = []
let nombreHamburguesa
let imagenHamburguesa
let detallesHamburguesa

if(localStorage.getItem("Hamburguesas")){
    const localHamburguesas = JSON.parse(localStorage.getItem("Hamburguesas")) ;
    console.log(localHamburguesas)
    arrayHamburguesas = localHamburguesas
}

else{
    localStorage.setItem("Hamburguesas",JSON.stringify(arrayHamburguesas));
    const localHamburguesas = localStorage.getItem("Hamburguesas")
}

function Hamburguesa(nombre, imagen, detalles){
    this.nombre= nombre,
    this.imagen= imagen,
    this.detalles= detalles
}



const getDatos= (e)=>{


    nombreHamburguesa = e.path[2].children[1].innerText;
    imagenHamburguesa = e.path[2].children[0].attributes[0].textContent;
    detallesHamburguesa = e.path[2].children[2].innerText;

    console.log(nombreHamburguesa)
    console.log(imagenHamburguesa)
    console.log(detallesHamburguesa)

    const hamburguesa = new Hamburguesa(nombreHamburguesa, imagenHamburguesa, detallesHamburguesa)
    
    arrayHamburguesas.push(hamburguesa)

    localStorage.setItem("Hamburguesas", JSON.stringify(arrayHamburguesas) )
 
}


const sacarDelCarro = (e)=>{
    console.log(e)
}

window.addEventListener("load",()=>{
    let datosCarro = JSON.parse(localStorage.getItem("Hamburguesas")) ;
    console.log(datosCarro)

    datosCarro.forEach((burguer)=>{
        contProductosElegidos.innerHTML += contProductosElegidos.innerHTML=`
    <div class="productoElegido">
                <div class="cont-botonEliminar">
                    <button class="sacarDelCarrito">Eliminar del carrito</button>
                </div>
                <div class="cont-infoHamburguesa">
                    <h3 class="nombreHamburguesa">${burguer.nombre}</h3>
                    <img class="fotoHamburguesa" src="${burguer.imagen}" alt="">
                    <p class="detallesHamburguesa">${burguer.detalles}</p>
                </div>
    </div> 
    `
    let botonCerrar=document.querySelector(".sacarDelCarrito");
    botonCerrar.addEventListener("click", (e)=>{
        e.path[2].remove()
        console.log(e.path)
    })
    })
})

// boton1.addEventListener("click", getDatos)
// boton2.addEventListener("click", getDatos)
// boton3.addEventListener("click", getDatos)
// boton4.addEventListener("click", getDatos)
// boton5.addEventListener("click", getDatos)
// boton6.addEventListener("click", getDatos)












































// contProductosElegidos.innerHTML=`
//     <div class="productoElegido">
//                 <h3 class="nombreHamburguesa">${nombreHamburguesa}</h3>
//                 <img class="fotoHamburguesa" src="${imagenHamburguesa}" alt="">
//                 <p class="detallesHamburguesa">${detallesHamburguesa}</p>
//     </div> 
//     `




















// const pasarAlDOM = ()=>{
    
// }

// const pasarDatosAlDOM = (e)=>{
//     nombreHamburguesa = e.path[2].children[1].innerText;
//     imagenHamburguesa = e.path[2].children[0].attributes[0].textContent;
//     detallesHamburguesa = e.path[2].children[2].innerText;

    // contProductosElegidos.innerHTML +=`
    // <div class="productoElegido">
    //             <div class="cont-botonEliminar">
    //                 <button class="sacarDelCarrito">Eliminar del carrito</button>
    //             </div>
    //             <div class="cont-infoHamburguesa">
    //                 <h3 class="nombreHamburguesa">${nombreHamburguesa}</h3>
    //                 <img class="fotoHamburguesa" src="${imagenHamburguesa}" alt="">
    //                 <p class="detallesHamburguesa">${detallesHamburguesa}</p>
    //             </div>
    // </div> 
    // `;
// }

// const sacarDelCarro = (e) => {
//     console.log(e)
// }

// sacarDelCarrito.addEventListener("click", sacarDelCarro)


// boton1.addEventListener("click", sacarDelCarro)
// boton1.addEventListener("click", pasarDatosAlDOM)
// boton2.addEventListener("click", pasarDatosAlDOM)
// boton3.addEventListener("click", pasarDatosAlDOM)
// boton4.addEventListener("click", pasarDatosAlDOM)
// boton5.addEventListener("click", pasarDatosAlDOM)
// boton6.addEventListener("click", pasarDatosAlDOM)






