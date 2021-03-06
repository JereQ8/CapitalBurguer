
const botonOrdenar = document.getElementById("ordenar") 
const tituloPedido= document.getElementById("suPedido")
const pedido= document.getElementById("pedido")

function Hamburguesa(pan, carne, aderezos, verduras, agregados){
    this.pan = pan;
    this.carne = carne;
    this.aderezos = aderezos;
    this.verduras = verduras;
    this.agregados = agregados;
}

const thor = new Hamburguesa("Pan de Manteca", "Cerdo (mediano)", "Mostaza y Ketchup", "Pepino, Tomate, Lechuga", "Cebolla caramelizada")
const legend = new Hamburguesa("Pan de Papa", "Vaca (mediano)", "Mostaza y Ketchup", "Pepino, Tomate, Lechuga", "Queso Cheddar")
const viking = new Hamburguesa("Pan de Queso", "2 medallones de Vaca(mediano)", "Mostaza y Ketchup", "Pepino, Tomate, Lechuga", "Cebolla caramelizada")
const beg = new Hamburguesa("Pan de Manteca", "4 medallones de Cerdo(mediano)", "Mostaza y Ketchup", "Pepino, Tomate, Lechuga", "Queso muzarella") 

const hamburguesas = [thor, legend, viking, beg];


let hamburguesaDeseada;
let cantidadHamburguesas;
let deseaAgrandarElMedallon;

// EVENTO PARA ORDENAR

botonOrdenar.addEventListener("click",()=>{
    const usuario = prompt("Ingrese su nombre");

    while(hamburguesaDeseada != "thor" && hamburguesaDeseada != "legend" && hamburguesaDeseada != "viking" && hamburguesaDeseada != "beg"){
        hamburguesaDeseada = prompt(`¿Que hamburguesa deseas comer ${usuario}?: 'Thor', 'Legend', 'Viking', 'BEG'`).toLowerCase();
    }
    
    while(isNaN(cantidadHamburguesas)){
        cantidadHamburguesas = parseInt(prompt("Elija la cantidad de hamburguesas que desea comprar"));
    }
    
    
    
    
    
    if(hamburguesaDeseada == "thor"){
        alert(`La hamburguesa 'Thor' contiene lo siguiente: 
               Pan = ${thor.pan} 
               Carne = ${thor.carne} 
               Aderezos = ${thor.verduras} 
               Verduras = ${thor.verduras} 
               Agregados = ${thor.agregados}` )
    }
    
    else if(hamburguesaDeseada == "legend"){
        alert(`La hamburguesa 'Legend' contiene lo siguiente: 
               Pan = ${legend.pan} 
               Carne = ${legend.carne} 
               Aderezos = ${legend.verduras} 
               Verduras = ${legend.verduras} 
               Agregados = ${legend.agregados}` )
    }
    
    else if(hamburguesaDeseada == "viking"){
        alert(`La hamburguesa 'Viking' contiene lo siguiente: 
               Pan = ${viking.pan} 
               Carne = ${viking.carne} 
               Aderezos = ${viking.verduras} 
               Verduras = ${viking.verduras} 
               Agregados = ${viking.agregados}` )
    }
    
    else if(hamburguesaDeseada == "beg"){
        alert(`La hamburguesa 'Beg' contiene lo siguiente: 
               Pan = ${beg.pan} 
               Carne = ${beg.carne} 
               Aderezos = ${beg.verduras} 
               Verduras = ${beg.verduras} 
               Agregados = ${beg.agregados}` )
    }
    
    
    while(deseaAgrandarElMedallon != "si" && deseaAgrandarElMedallon != "no" ){
        deseaAgrandarElMedallon = prompt("¿Desea agrandar el medallon de carne a GRANDE?").toLowerCase()
    }
    
    if(deseaAgrandarElMedallon == "si" && hamburguesaDeseada == "thor"){
        thor.carne = "Cerdo (GRANDE)";
    }
    
    else if(deseaAgrandarElMedallon == "si" && hamburguesaDeseada == "legend"){
        legend.carne = "Vaca (GRANDE)"
    }
    
    else if(deseaAgrandarElMedallon == "si" && hamburguesaDeseada == "viking"){
        viking.carne = "2 Medallones de Vaca (GRANDES)"
    }
    
    else if(deseaAgrandarElMedallon == "si" && hamburguesaDeseada == "beg"){
        beg.carne = "4 Medallones de Cerdo (GRANDES)"
    }
    
    else{
    
    }
    
    if(hamburguesaDeseada == "thor"){

        tituloPedido.innerHTML= `SU PEDIDO:`;
        pedido.innerHTML=`
        La hamburguesa 'Thor' contiene lo siguiente: <br> <br>
        Pan = ${thor.pan} <br>
        Carne = ${thor.carne} <br>
        Aderezos = ${thor.aderezos} <br>
        Verduras = ${thor.verduras} <br>
        Agregados = ${thor.agregados}`

        pedido.classList.add("pedido")

        
    }
    
    else if(hamburguesaDeseada == "legend"){
        

        tituloPedido.innerHTML= `SU PEDIDO:`;
        pedido.innerHTML=`
        La hamburguesa 'Legend' contiene lo siguiente: <br> <br>
        Pan = ${legend.pan} <br>
        Carne = ${legend.carne} <br>
        Aderezos = ${legend.aderezos} <br>
        Verduras = ${legend.verduras} <br>
        Agregados = ${legend.agregados}`

        pedido.classList.add("pedido")

        
    }
    
    else if(hamburguesaDeseada == "viking"){
        
        tituloPedido.innerHTML= `SU PEDIDO:`;
        pedido.innerHTML=`
        La hamburguesa 'Viking' contiene lo siguiente: <br> <br>
        Pan = ${viking.pan} <br>
        Carne = ${viking.carne} <br>
        Aderezos = ${viking.aderezos} <br>
        Verduras = ${viking.verduras} <br>
        Agregados = ${viking.agregados}`

        pedido.classList.add("pedido")

        
    }
    
    else if(hamburguesaDeseada == "beg"){
        
        tituloPedido.innerHTML= `SU PEDIDO:`;
        pedido.innerHTML=`
        La hamburguesa 'BEG' contiene lo siguiente: <br> <br>
        Pan = ${beg.pan} <br>
        Carne = ${beg.carne} <br>
        Aderezos = ${beg.aderezos} <br>
        Verduras = ${beg.verduras} <br>
        Agregados = ${beg.agregados}`

        pedido.classList.add("pedido")

        
    }
    
    else{
        alert("La hamburguesa deseada no existe")
    }
    
    
})

