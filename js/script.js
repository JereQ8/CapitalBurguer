
const botonOrdenar = document.getElementById("ordenar") 
const tituloPedido= document.getElementById("suPedido")
const pedido= document.getElementById("pedido")


function Hamburguesa(nombre, pan, carne, aderezos, verduras, agregados){
    this.nombre = nombre
    this.pan = pan;
    this.carne = carne;
    this.aderezos = aderezos;
    this.verduras = verduras;
    this.agregados = agregados;
}

const thor = new Hamburguesa("Thor","Pan de Manteca", "Cerdo (mediano)", "Mostaza y Ketchup", "Pepino, Tomate, Lechuga", "Cebolla caramelizada")
const legend = new Hamburguesa("Legend","Pan de Papa", "Vaca (mediano)", "Mostaza y Ketchup", "Pepino, Tomate, Lechuga", "Queso Cheddar")
const viking = new Hamburguesa("Viking","Pan de Queso", "2 medallones de Vaca(mediano)", "Mostaza y Ketchup", "Pepino, Tomate, Lechuga", "Cebolla caramelizada")
const beg = new Hamburguesa("BEG","Pan de Manteca", "4 medallones de Cerdo(mediano)", "Mostaza y Ketchup", "Pepino, Tomate, Lechuga", "Queso muzarella") 

const hamburguesas = [thor, legend, viking, beg];


let hamburguesaDeseada;
let cantidadHamburguesas;
let deseaAgrandarElMedallon;


function mostrarHamburguesa(hamburguesa){
    alert(`La hamburguesa ${hamburguesa.nombre} contiene lo siguiente: 
    Pan = ${hamburguesa.pan} 
    Carne = ${hamburguesa.carne} 
    Aderezos = ${hamburguesa.verduras} 
    Verduras = ${hamburguesa.verduras} 
    Agregados = ${hamburguesa.agregados}`)
}

function agregarAlDOM(hamburguesaa){
    tituloPedido.innerHTML= `SU PEDIDO:`;
        pedido.innerHTML=`
        La hamburguesa ${hamburguesaa.nombre} contiene lo siguiente: <br> <br>
        Pan = ${hamburguesaa.pan} <br>
        Carne = ${hamburguesaa.carne} <br>
        Aderezos = ${hamburguesaa.aderezos} <br>
        Verduras = ${hamburguesaa.verduras} <br>
        Agregados = ${hamburguesaa.agregados}`

        pedido.classList.add("pedido")
}


// EVENTO PARA ORDENAR

// botonOrdenar.addEventListener("click",()=>{
//     const usuario = prompt("Ingrese su nombre");

//     while(hamburguesaDeseada != "thor" && hamburguesaDeseada != "legend" && hamburguesaDeseada != "viking" && hamburguesaDeseada != "beg"){
//         hamburguesaDeseada = prompt(`¿Que hamburguesa deseas comer ${usuario}?: 'Thor', 'Legend', 'Viking', 'BEG'`).toLowerCase();
//     }

    
    
//     while(isNaN(cantidadHamburguesas)){
//         cantidadHamburguesas = parseInt(prompt("Elija la cantidad de hamburguesas que desea comprar"));
//     }
    
    
    
    
    

//     if(hamburguesaDeseada == "thor"){
//         mostrarHamburguesa(thor)
//     }
    
//     else if(hamburguesaDeseada == "legend"){
//         mostrarHamburguesa(legend)
//     }
    
//     else if(hamburguesaDeseada == "viking"){
//         mostrarHamburguesa(viking)
//     }
    
//     else if(hamburguesaDeseada == "beg"){
//         mostrarHamburguesa(beg)
//     }
    
    
//     while(deseaAgrandarElMedallon != "si" && deseaAgrandarElMedallon != "no" ){
//         deseaAgrandarElMedallon = prompt("¿Desea agrandar el medallon de carne a GRANDE?").toLowerCase()
//     }
    
//     if(deseaAgrandarElMedallon == "si" && hamburguesaDeseada == "thor"){
//         thor.carne = "Cerdo (GRANDE)";
//     }
    
//     else if(deseaAgrandarElMedallon == "si" && hamburguesaDeseada == "legend"){
//         legend.carne = "Vaca (GRANDE)"
//     }
    
//     else if(deseaAgrandarElMedallon == "si" && hamburguesaDeseada == "viking"){
//         viking.carne = "2 Medallones de Vaca (GRANDES)"
//     }
    
//     else if(deseaAgrandarElMedallon == "si" && hamburguesaDeseada == "beg"){
//         beg.carne = "4 Medallones de Cerdo (GRANDES)"
//     }
    
//     else{
    
//     }
    
//     if(hamburguesaDeseada == "thor"){
//         agregarAlDOM(thor)       
//     }
    
//     else if(hamburguesaDeseada == "legend"){        
//        agregarAlDOM(legend)       
//     }
    
//     else if(hamburguesaDeseada == "viking"){        
//         agregarAlDOM(viking)       
//     }
    
//     else if(hamburguesaDeseada == "beg"){       
//         agregarAlDOM(beg)
//     }
    
// })

