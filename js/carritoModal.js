const carrito= document.getElementById("carrito");


class Hamburguesas{
    constructor(nombre, imagen, detalle){
        this.nombre=nombre,
        this.imagen=imagen,
        this.detalle=detalle,
        this.html=`
        <div>
            <h3> ${this.nombre} </h3>
            <img class="img-card" src="${this.imagen}"/>
            <p> ${this.detalle} </p>
        </div>
        `
    }
}

const thor= new Hamburguesas("Thor", "https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/Hamburguesa-con-Queso.png","Pan de papa, 1 Medallon de Vaca, Cheddar, Cebolla caramelizada ");
const legend= new Hamburguesas("Legend", "https://www.revistaaral.com/images/showid2/4843436?w=900&mh=700","1 Medallon de Vaca, Cheddar, Nachos, Lechuga, tomate, Barbacoa ");
const viking= new Hamburguesas("Viking", "https://betos.com.ar/wp-content/uploads/2019/12/hambur-doble.png","2 Medallon de Vaca, 2 fetas de Queso, Tomate, lechuga, ");
const bacon= new Hamburguesas("Bacon", "https://s3.eu-central-1.amazonaws.com/www.burgerking.com.mx/wp-content/uploads/sites/3/2021/02/24095706/1200x800_03_WhopperConQueso-1-1.png","1 Medallon de Vaca, Cheddar, Aretes de Cebolla, Ketchup, Tomate, Lechuga ");
const fat= new Hamburguesas("Fat", "https://www.burgertowers.com/imagenes/Hamburguesa_Gigante_Towers_5pisos.png","Pan de papa, 5 Medallones de Vaca, Cheddar, Cebolla caramelizada, Huevo frito, Tocino");
const beg= new Hamburguesas("BEG", "https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/Stacker-Cuadruple.png","4 Medallones de Vaca, Cheddar, Jamon cocido ");

let arrayHamburguesasCarrito=[]
let arrayHamburguesas=[thor, legend, viking, bacon, fat, beg]



for(let i=0; i <=arrayHamburguesas.length-1 ; i++){
    const botonAgregarAlCarrito = document.querySelector(`.agregarAlCarrito${i}`);
    botonAgregarAlCarrito.addEventListener("click", ()=>{
        Swal.fire({
            title: `Seguro que quieres comprar la Hamburguesa "${arrayHamburguesas[i].nombre}"?`,
            text: `Esta hamburguesa contiene:
            ${arrayHamburguesas[i].detalle}
            `,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText:"Cancelar compra" ,
            confirmButtonText: 'Si, deseo comprarla!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                `Muchas Gracias! Pronto le llegara su hamburguesa "${arrayHamburguesas[i].nombre}"`,
                '',
                'success'
              )
            }
          })
    })
}



