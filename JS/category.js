let categorias = document.querySelector(".categoryul");

fetch("https://dummyjson.com/products/categories")
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    let categoriasApi = '';

    for (let i = 0; i < data.length; i++) {
      categoriasApi += `<li><a href="./category.html?name=${data[i].slug}">${data[i].name}</a></li>`;
    }

    categorias.innerHTML = categoriasApi;
  })
  .catch(function(error) {
    console.log("Error: " + error);
  });

let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get('id');


fetch(`https://dummyjson.com/products/${id}`)
        .then(function(response) {
            return response.json();
        }