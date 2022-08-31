const templateFooter=document.getElementById("template-footer").content
const templateCarrito= document.getElementById("template-carrito").content
const contenedorHamburguesas= document.getElementById("contenedorHamburguesas").content
const cont_cards= document.getElementById("cards")
const cont_items=document.getElementById("items")
const cont_footer= document.getElementById("footer")
const fragment= document.createDocumentFragment()
let carrito= {}

document.addEventListener("DOMContentLoaded", () => {
    fetchData()
    if(localStorage.getItem("carrito")){
        carrito= JSON.parse(localStorage.getItem("carrito"))
        pintarCarrito()
    }
})

cont_cards.addEventListener("click",e=>{
    addCarrito(e)
})

const fetchData= async () => {
    const res= await fetch("../assets/infoBurguers/infoHamburguesas.json")
    const data= await res.json()
    pintarCards(data);

}

cont_items.addEventListener("click", e=>{
    accionBoton(e)
})



const pintarCards= data => {
    data.forEach((burguer)=>{
        contenedorHamburguesas.querySelector("h4").textContent= burguer.name;
        contenedorHamburguesas.querySelector("p").textContent= burguer.ingredients.join(", ");
        contenedorHamburguesas.querySelector("img").setAttribute("src", burguer.image);
        contenedorHamburguesas.querySelector("button").dataset.id= burguer.id;
        contenedorHamburguesas.querySelector("b").textContent=burguer.precio 
        
        const clone= contenedorHamburguesas.cloneNode(true)
        fragment.appendChild(clone)
    })
    cont_cards.appendChild(fragment)
}


const addCarrito= e =>{
    if(e.target.classList.contains("botonComprar")){
        const producto={
            id: e.target.dataset.id,
            title: e.target.parentElement.parentElement.querySelector("h4").textContent,
            precio:e.target.parentElement.parentElement.querySelector("b").textContent,
            cantidad:1
        }

        if(carrito.hasOwnProperty(producto.id)){
            producto.cantidad= carrito[producto.id].cantidad + 1
        }

        carrito[producto.id]={...producto}
        pintarCarrito()

    }
}

const pintarCarrito= () => {
    cont_items.innerHTML=""
    Object.values(carrito).forEach((producto)=>{
        templateCarrito.querySelector("th").textContent=producto.id;
        templateCarrito.querySelectorAll("td")[0].textContent=producto.title;
        templateCarrito.querySelectorAll("td")[1].textContent=producto.cantidad;
        templateCarrito.querySelector("span").textContent=producto.precio * producto.cantidad;
        templateCarrito.querySelector('.btn-info').dataset.id = producto.id
        templateCarrito.querySelector('.btn-danger').dataset.id = producto.id

        const clone=templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })

    cont_items.appendChild(fragment)

    pintarFooter()

    localStorage.setItem("carrito", JSON.stringify(carrito))
}

const pintarFooter= () => {
    cont_footer.innerHTML="";
    if(Object.keys(carrito).length === 0){
        cont_footer.innerHTML=`
        <th scope="row" style= "padding-top:50%;" colspan="5">Carrito vacío - comience a comprar!</th>
        `

        return
    }
    const nCantidad = Object.values(carrito).reduce((acc, { cantidad }) => acc + cantidad, 0)
const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio ,0)

    templateFooter.querySelectorAll('td')[0].textContent = nCantidad
    templateFooter.querySelector('span').textContent = nPrecio

    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)

    cont_footer.appendChild(fragment)

    const boton = document.querySelector('#vaciar-carrito')
    boton.addEventListener('click', () => {
        carrito = {}
        pintarCarrito()
    })
}

const accionBoton= (e) => {

    if(e.target.classList.contains("btn-info")){
        const producto= carrito[e.target.dataset.id];
        producto.cantidad++
        carrito[e.target.dataset.id]={...producto}
        pintarCarrito()
    }

    if(e.target.classList.contains("btn-danger")){
        const producto = carrito[e.target.dataset.id]
        producto.cantidad--
        if(producto.cantidad===0){
            delete carrito[e.target.dataset.id]  
        }
        else{
            carrito[e.target.dataset.id]={...producto}
        }

        pintarCarrito()
        
    }

    e.stopPropagation()

}































