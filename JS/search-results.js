let queryString = location.search
console.log(queryString)
let queryStringObj = new URLSearchParams(queryString)
console.log(queryStringObj)

let busqueda = queryStringObj.get("busqueda")

console.log(busqueda)

fetch(`https://dummyjson.com/products/search?q=${busqueda}`)
.then(res => res.json())
.then(function(data){
    console.log(data)
})