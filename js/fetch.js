
const contenedorHamburguesas= document.getElementById("contenedorHamburguesas")

fetch("https://my-burger-api.herokuapp.com/burgers")
.then((data)=> data.json())
.then((dataJson)=>dataJson.map((burger)=>{
    console.log(burger)
    contenedorHamburguesas.innerHTML+= `
        <div>
            <h2> ${burger.name} </h2>
            <h4> Ingredientes </h4>
            <div> ${burger.ingredients.join(", ")} </div>
        </div>
    `
}))


