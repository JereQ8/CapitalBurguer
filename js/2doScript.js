const contLogueado= document.getElementById("logOrNot")
const formOrNot= document.getElementById("formOrNot")
const formUsuario= document.getElementById("formUsuario")

let arrayRegister=[]

if(localStorage.getItem("registrado")){
    let datos=JSON.parse(localStorage.getItem("registrado")) 
    formOrNot.innerHTML=`<h3 class="saludos">¡Hola ${datos[0]}!</h3> `
}
else{

}

formUsuario.addEventListener("submit",(e)=>{
    e.preventDefault();
    let nombreUsuario= formUsuario.querySelector("#nombre").value
    let gmailUsuario= formUsuario.querySelector("#gmail").value

    arrayRegister.push(nombreUsuario, gmailUsuario)

    localStorage.setItem("registrado", JSON.stringify(arrayRegister));
    console.log(localStorage.getItem("registrado"))
    formOrNot.innerHTML=`Hola ${JSON.parse(localStorage.getItem("registrado")[0]) }`
})






































// if(localStorage.getItem("registrado")){
//     if(localStorage.getItem("registrado")==false){
//         formOrNot.innerHTML=`
//         <form>

//             <input type="name">
//             <input type="gmail">
//             <input type="password">
//             <input type="submit">

//         </form>
//         `
//     }
//     else{
//         formOrNot.innerHTML= `

//         `
//     }
// }













































































































/*
    Cosas a realizar:
    1- Cuando presione un boton de "agregar al carro" deben pasar 2 cosas:
                                - Capturar informacion del div en el que fue presionado el boton(path) 
                                - Agregar al localStorage un objeto creado con la informacion capturada
    
    2- Lo que esta en el storage lo debo pasar al DOM en formato HTML... Recordar parsear lo del storage.

    3- Los botones de cerrar deben:
                - Sacar el elemento del DOM
                - Sacar el elemento del Storage
                - Mostrar nuevamente el carro con las hamburguesas que quedan


    IMPORTANTE: El carro esta completamente vinculado con el storage... Cada vez que toquemos el boton de "sacar del carrito" se debe modificar el array del storage volviendo a cargar el storage con el nuevo array... Para eso debemos identificar cada boton con ID`s



    Boton "agregar al carro" debe:
        - 
*/

// function Hamburguesa(id, nombre, carne, toppinsYAderezos, imagen){
//     this.id=id,
//     this.nombre=nombre,
//     this.carne=carne,
//     this.toppinsYAderezos=toppinsYAderezos,
//     this.imagen= imagen
// }

// const thor= new Hamburguesa(0, "Thor", "Vaca", "Lechuga, Tomate, Mayonesa Casera, Bacon","https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/Hamburguesa-con-Queso.png")
// const legend= new Hamburguesa(1, "Legend", "Cerdo", "Lechuga, Tomate, Barbacoa, Cebolla Caramelizada","https://www.revistaaral.com/images/showid2/4843436?w=900&mh=700")
// const viking= new Hamburguesa(2, "Viking", "Vaca", "Mayonesa Casera, Bacon y panceta ahumada","https://betos.com.ar/wp-content/uploads/2019/12/hambur-doble.png")
// const bacon= new Hamburguesa(3, "Bacon", "Cerdo", "Extra Bacon, Cebolla caramelizada, pepino y tosino","https://s3.eu-central-1.amazonaws.com/www.burgerking.com.mx/wp-content/uploads/sites/3/2021/02/24095706/1200x800_03_WhopperConQueso-1-1.png")
// const fat= new Hamburguesa(4, "Fat", "Vaca", "5 medallones ,Huevo, tosinos, Cheddar","https://www.burgertowers.com/imagenes/Hamburguesa_Gigante_Towers_5pisos.png")
// const beg= new Hamburguesa(5, "BEG", "Cerdo", "4 medallones, Mayonesa Casera, Jamon cocido","https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/Stacker-Cuadruple.png")

// let arrayHamburguesas=[thor, legend, viking, bacon, fat, beg]
// let arrayHamburguesasCarrito=[]



// const boton1= document.querySelector(".agregarAlCarrito1")
// const boton2= document.querySelector(".agregarAlCarrito2")
// const boton3= document.querySelector(".agregarAlCarrito3")
// const boton4= document.querySelector(".agregarAlCarrito4")
// const boton5= document.querySelector(".agregarAlCarrito5")
// const boton6= document.querySelector(".agregarAlCarrito6")
// const contProductosElegidos= document.getElementById("productosElegidos")

// for(let i= 0; i<=5; i++){
//     const boton= document.querySelector(`.agregarAlCarrito${i}`);

    

//     boton.addEventListener("click",()=>{

        // Sumo la hamburguesa al carrito(al array)

        // arrayHamburguesasCarrito.push(arrayHamburguesas[i]);

        // vacio el html del carrito para que funcione el "innerHTML +="

        // contProductosElegidos.innerHTML="";

        // Recorro el nuevo array del carrito con un forEach y en cada vuelta hago un innerHTML

        // arrayHamburguesasCarrito.forEach((burguer)=>{
        //      contProductosElegidos.innerHTML+=`
        //  <div class="productoElegido">
        //                <div class="cont-botonEliminar">
        //                    <button class="sacarDelCarrito${i}">Eliminar del carrito</button>
        //                </div>
        //                <div class="cont-infoHamburguesa">
        //                    <h3 class="nombreHamburguesa">${burguer.nombre}</h3>
        //                    <img class="fotoHamburguesa" src="${burguer.imagen}" alt="">
        //                    <p class="detallesHamburguesa">${burguer.toppinsYAderezos}</p>
        //                </div>
        //    </div> 
        //  `

        // declaro constante encapsulando el boton de "sacarDelCarrito" y agregandole un evento que renueve el dom y saque el elemento del array

        // const botonCerrar= document.querySelector(`.sacarDelCarrito${i}`);
        
        // botonCerrar.addEventListener("click",()=>{
            // vacio el carrito para luego de sacar el elemento volver a pintar con el nuevo array del carrito

            // contProductosElegidos.innerHTML="";

            // elimino el elemento del array del carrito

            // arrayHamburguesasCarrito.splice(i, 1);

            // elimino el elemento del dom simplemente pintando el array nuevo en el dom de nuevo

    //         arrayHamburguesasCarrito.forEach((burger, indice)=>{
    //             contProductosElegidos.innerHTML+=`
    //             <div class="productoElegido">
    //                    <div class="cont-botonEliminar">
    //                        <button class="sacarDelCarrito${indice}">Eliminar del carrito</button>
    //                    </div>
    //                    <div class="cont-infoHamburguesa">
    //                        <h3 class="nombreHamburguesa">${arrayHamburguesasCarrito[indice].nombre}</h3>
    //                        <img class="fotoHamburguesa" src="${arrayHamburguesasCarrito[indice].imagen}" alt="">
    //                        <p class="detallesHamburguesa">${arrayHamburguesasCarrito[indice].toppinsYAderezos}</p>
    //                    </div>
    //        </div> 
    //             `
    //         })
    //     })

    //     })

        


    // })

    // 

        

// }








// boton1.addEventListener("click", pasarAlDOM0);
// boton2.addEventListener("click", pasarAlDOM1);
// boton3.addEventListener("click", pasarAlDOM2);
// boton4.addEventListener("click", pasarAlDOM3);
// boton5.addEventListener("click", pasarAlDOM4);
// boton6.addEventListener("click", pasarAlDOM5);


 













































































































// const pasarAlDOM0= ()=>{
//     contProductosElegidos.innerHTML+=`
//     <div class="productoElegido">
//                      <div class="cont-botonEliminar">
//                          <button class="sacarDelCarrito${0}">Eliminar del carrito</button>
//                      </div>
//                      <div class="cont-infoHamburguesa">
//                          <h3 class="nombreHamburguesa">${arrayHamburguesas[0].nombre}</h3>
//                          <img class="fotoHamburguesa" src="${arrayHamburguesas[0].imagen}" alt="">
//                          <p class="detallesHamburguesa">${arrayHamburguesas[0].toppinsYAderezos}</p>
//                      </div>
//          </div> 
//     `
//     const botonCerrar0= document.querySelector(`sacarDelCarrito0`)
//     arrayBotonesCerrar.push(botonCerrar0)
// }

// const pasarAlDOM1= ()=>{
//     contProductosElegidos.innerHTML+=`
//     <div class="productoElegido">
//                      <div class="cont-botonEliminar">
//                          <button class="sacarDelCarrito${1}">Eliminar del carrito</button>
//                      </div>
//                      <div class="cont-infoHamburguesa">
//                          <h3 class="nombreHamburguesa">${arrayHamburguesas[1].nombre}</h3>
//                          <img class="fotoHamburguesa" src="${arrayHamburguesas[1].imagen}" alt="">
//                          <p class="detallesHamburguesa">${arrayHamburguesas[1].toppinsYAderezos}</p>
//                      </div>
//          </div> 
//     `

//     const botonCerrar1= document.querySelector(`sacarDelCarrito1`)
//     arrayBotonesCerrar.push(botonCerrar1)
// }

// const pasarAlDOM2= ()=>{
//     contProductosElegidos.innerHTML+=`
//     <div class="productoElegido">
//                      <div class="cont-botonEliminar">
//                          <button class="sacarDelCarrito${2}">Eliminar del carrito</button>
//                      </div>
//                      <div class="cont-infoHamburguesa">
//                          <h3 class="nombreHamburguesa">${arrayHamburguesas[2].nombre}</h3>
//                          <img class="fotoHamburguesa" src="${arrayHamburguesas[2].imagen}" alt="">
//                          <p class="detallesHamburguesa">${arrayHamburguesas[2].toppinsYAderezos}</p>
//                      </div>
//          </div> 
//     `
//     const botonCerrar2= document.querySelector(`sacarDelCarrito2`)
//     arrayBotonesCerrar.push(botonCerrar2)
// }

// const pasarAlDOM3= ()=>{
//     contProductosElegidos.innerHTML+=`
//     <div class="productoElegido">
//                      <div class="cont-botonEliminar">
//                          <button class="sacarDelCarrito${3}">Eliminar del carrito</button>
//                      </div>
//                      <div class="cont-infoHamburguesa">
//                          <h3 class="nombreHamburguesa">${arrayHamburguesas[3].nombre}</h3>
//                          <img class="fotoHamburguesa" src="${arrayHamburguesas[3].imagen}" alt="">
//                          <p class="detallesHamburguesa">${arrayHamburguesas[3].toppinsYAderezos}</p>
//                      </div>
//          </div> 
//     `
//     const botonCerrar3= document.querySelector(`sacarDelCarrito3`)
//     arrayBotonesCerrar.push(botonCerrar3)
// }

// const pasarAlDOM4= ()=>{
//     contProductosElegidos.innerHTML+=`
//     <div class="productoElegido">
//                      <div class="cont-botonEliminar">
//                          <button class="sacarDelCarrito${4}">Eliminar del carrito</button>
//                      </div>
//                      <div class="cont-infoHamburguesa">
//                          <h3 class="nombreHamburguesa">${arrayHamburguesas[4].nombre}</h3>
//                          <img class="fotoHamburguesa" src="${arrayHamburguesas[4].imagen}" alt="">
//                          <p class="detallesHamburguesa">${arrayHamburguesas[4].toppinsYAderezos}</p>
//                      </div>
//          </div> 
//     `
//     const botonCerrar4= document.querySelector(`sacarDelCarrito4`)
//     arrayBotonesCerrar.push(botonCerrar4)
// }

// const pasarAlDOM5= ()=>{
//     contProductosElegidos.innerHTML+=`
//     <div class="productoElegido">
//                      <div class="cont-botonEliminar">
//                          <button class="sacarDelCarrito${5}">Eliminar del carrito</button>
//                      </div>
//                      <div class="cont-infoHamburguesa">
//                          <h3 class="nombreHamburguesa">${arrayHamburguesas[5].nombre}</h3>
//                          <img class="fotoHamburguesa" src="${arrayHamburguesas[5].imagen}" alt="">
//                          <p class="detallesHamburguesa">${arrayHamburguesas[5].toppinsYAderezos}</p>
//                      </div>
//          </div> 
//     `
//     const botonCerrar5= document.querySelector(`sacarDelCarrito5`)
//     arrayBotonesCerrar.push(botonCerrar5)
// }










// const boton1= document.querySelector(".agregarAlCarrito1")
// const boton2= document.querySelector(".agregarAlCarrito2")
// const boton3= document.querySelector(".agregarAlCarrito3")
// const boton4= document.querySelector(".agregarAlCarrito4")
// const boton5= document.querySelector(".agregarAlCarrito5")
// const boton6= document.querySelector(".agregarAlCarrito6")
// const contProductosElegidos= document.getElementById("productosElegidos")

// let nombreHamburguesa
// let imagenHamburguesa
// let detallesHamburguesa
// let idHamburguesa;
// let datosStorage
// let arrayBotonesCerrar=[]


// let arrayStorageHamburguesas = [] 

// if(localStorage.getItem("hamburguesas")){
//     console.log(localStorage.getItem("hamburguesas"))
//     JSON.parse(localStorage.getItem("hamburguesas")).forEach((burguer, index)=>{
//         contProductosElegidos.innerHTML+=`
//         <div class="productoElegido">
//                     <div class="cont-botonEliminar">
//                         <button class='sacarDelCarrito${index}'>Eliminar del carrito</button>
//                     </div>
//                     <div class="cont-infoHamburguesa">
//                         <h3 class="nombreHamburguesa">${burguer.nombre}</h3>
//                         <img class="fotoHamburguesa" src="${burguer.imagen}" alt="">
//                         <p class="detallesHamburguesa">${burguer.detalles}</p>
//                     </div>
//         </div> 
//         `

//         const sacarDelCarrito= document.querySelector(`.sacarDelCarrito${index}`)
//         arrayBotonesCerrar.push(sacarDelCarrito)
        
//     })
// }





// else{
//     localStorage.setItem("hamburguesas",JSON.stringify(arrayStorage))
// }

// // arrayBotonesCerrar.forEach((boton)=>{
// //     // console.log(boton.parentElement.parentElement) // .remove()
// //     // console.log(boton.attributes[0].value)  //Encontrar el elemento html asi le declaro como variable y de esa forma le agrego un evento
// //     const botonCerrar= document.querySelector(`.${boton.attributes[0].value}`)

// //     console.log(botonCerrar)
// //     botonCerrar.addEventListener("click", (e)=>{
// //         // e.path[2].remove()
// //         // console.log(e.path[0].attributes[0].nodeValue)
// //         const claseDelElemento = e.path[0].attributes[0].nodeValue;
// //         console.log(claseDelElemento)

// //         JSON.parse(localStorage.getItem("hamburguesas")).forEach((burger, index)=>{
// //             console.log(burger.id) 
// //             if(burger.id==claseDelElemento){
// //                 console.log(arrayStorageHamburguesas)
// //                 arrayStorageHamburguesas.splice(index, 1);
// //                 localStorage.setItem("hamburguesas", JSON.stringify(arrayStorageHamburguesas) )
// //             }
// //             else{

// //             }
// //         })
// //     })
// // })


// arrayBotonesCerrar.forEach((boton)=>{
//     console.log(boton.className)
//     const botoncerrar=document.querySelector(`.${boton.className}`)
//     botoncerrar.addEventListener("click",(e)=>{
//         console.log(e.target)
//     })
// })


// function Hamburguesa(id, nombre, imagen, detalles){
//     this.id = id,
//     this.nombre = nombre,
//     this.imagen = imagen,
//     this.detalles = detalles
// }


// const agregarStorageAlDom = ()=>{
//     datosStorage = JSON.parse(localStorage.getItem("hamburguesas")) ;
//     contProductosElegidos.innerHTML="";
//     datosStorage.forEach((burguer, index)=>{
//         contProductosElegidos.innerHTML+=`
//         <div class="productoElegido">
//                     <div class="cont-botonEliminar">
//                         <button class="sacarDelCarrito${index}">Eliminar del carrito</button>
//                     </div>
//                     <div class="cont-infoHamburguesa">
//                         <h3 class="nombreHamburguesa">${burguer.nombre}</h3>
//                         <img class="fotoHamburguesa" src="${burguer.imagen}" alt="">
//                         <p class="detallesHamburguesa">${burguer.detalles}</p>
//                     </div>
//         </div> 
//         `
//     })
// }

// const hamburguesaNueva = ()=>{
//     const hamburguesa = new Hamburguesa(idHamburguesa, nombreHamburguesa, imagenHamburguesa, detallesHamburguesa)
//     arrayStorageHamburguesas.push(hamburguesa)

//     localStorage.setItem("hamburguesas",JSON.stringify(arrayStorageHamburguesas) )

//     console.log(hamburguesa)
// }

// const getDatos = (e)=>{
//     nombreHamburguesa = e.path[2].childNodes[3].textContent;
//     imagenHamburguesa = e.path[2].childNodes[1].attributes[0].textContent
//     detallesHamburguesa = e.path[2].childNodes[5].textContent
//     idHamburguesa=  e.path[0].attributes[0].value;

//     hamburguesaNueva()
//     agregarStorageAlDom()
// }

// let arrayBotones=[boton1, boton2, boton3, boton4, boton5, boton6]
// let arrayStorage=[]
// let arrayHamburguesas= []









// const actualizarStorage= (e)=>{
//     console.log(e.path)
// }



// arrayBotones.forEach((boton)=>{

//     boton.addEventListener("click", getDatos)
// })
















































// const thor= new Hamburguesa(1, "Thor", "https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/Hamburguesa-con-Queso.png", "Lorem, ipsum dolor sit amet consectetur adipisicing.")

// const legend= new Hamburguesa(2, "Legend", "https://www.revistaaral.com/images/showid2/4843436?w=900&mh=700",  "Lorem, ipsum dolor sit amet consectetur adipisicing.")

// const viking= new Hamburguesa(3, "Viking", "https://betos.com.ar/wp-content/uploads/2019/12/hambur-doble.png", "Lorem, ipsum dolor sit amet consectetur adipisicing.")

// const bacon= new Hamburguesa(4, "Bacon", "https://s3.eu-central-1.amazonaws.com/www.burgerking.com.mx/wp-content/uploads/sites/3/2021/02/24095706/1200x800_03_WhopperConQueso-1-1.png", "Lorem, ipsum dolor sit amet consectetur adipisicing.")

// const fat= new Hamburguesa(5, "FAT", "https://www.burgertowers.com/imagenes/Hamburguesa_Gigante_Towers_5pisos.png", "Lorem, ipsum dolor sit amet consectetur adipisicing.")

// const beg= new Hamburguesa(6, "BEG", "https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/Stacker-Cuadruple.png", "Lorem, ipsum dolor sit amet consectetur adipisicing.")

// arrayHamburguesas=[thor, legend, viking, bacon, fat, beg]