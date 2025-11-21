let formulario = document.querySelector(".searchbarform");
let campoBusqueda = document.querySelector(".searchbar");

if (formulario && campoBusqueda) {

    formulario.onsubmit = function (evento) {

        let texto = campoBusqueda.value.trim();

        if (texto === "") {
            evento.preventDefault();
            alert("El campo de búsqueda no puede estar vacío.");
        }

        else if (texto.length < 3) {
            evento.preventDefault();
            alert("El término buscado debe tener al menos 3 caracteres.");
        }

    };
}

    fetch("https://dummyjson.com/products/category/smartphones")
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            let productos = data.products;

            for (let i = 0; i < productos.length && i < 10; i++) {

                let p = productos[i];

                let tarjeta =
                    `<div class="divcate"> 
                        <img src="${p.thumbnail}" alt="'  p.title  '" class="produim">
                        <p class="produtit">${p.title}  </p>
                        <p class="produdes">${p.description} </p>
                        <p class="produprec">${p.price} </p> 
                        <a href"./product.html?id=${p.id}" class="produinfo">Ver detalle.</a> 
                    </div>`;

                primeraSeccion.innerHTML += tarjeta;
            }
        })
        .catch(function (error) {
            console.log("Error en primera sección:", error);
        });


    fetch("https://dummyjson.com/products/category/groceries")
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            let productos = data.products;

            for (let i = 0; i < productos.length && i < 10; i++) {

                let p = productos[i];

                let tarjeta =
                    `<div class="divcate">' +
                        <img src="${p.thumbnail}" alt="' ${p.title}  '" class="produim"> 
                        <p class="produtit">${p.title}</p>
                        <p class="produdes">${p.description}</p>
                        <p class="produprec">${p.price}</p> 
                        <a href="./product.html?id=${producto.id}" class="produinfo">Ver detalle.</a>
                    </div>`;

segundaSeccion.innerHTML += tarjeta;
            }
        })
        .catch(function (error) {
            console.log("Error en segunda sección:", error);
        });