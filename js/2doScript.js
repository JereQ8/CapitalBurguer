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





