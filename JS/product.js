let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get('id');
    
const marca = document.querySelector("#product-brand");
const desc = document.querySelector("#product-description");
const precio = document.querySelector("#product-price");
const imagen = document.querySelector("#product-image")
const categoria = document.querySelector("#product-category-link")
const stock = document.querySelector("#product-stock")
const etiquetas = document.querySelector("#product-tags")
const coments = document.querySelector("#reviews-container")

        fetch(`https://dummyjson.com/products/${id}`)
        .then(function(response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            imagen.src = data.thumbnail;
            marca.textContent = data.brand;
            desc.textContent = data.description;
            precio.textContent = data.price
            categoria.textContent = data.category
            stock.textContent = data.stock
            etiquetas.textContent = data.tags
            coments.textContent = data.reviews
    

            
            
            

        })
        .catch(function (error) {
            console.log("Se detectó un error", error);
        });
    
    





