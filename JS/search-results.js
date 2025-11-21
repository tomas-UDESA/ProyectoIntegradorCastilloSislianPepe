// Menos 3 caracteres

let formulario = document.getElementById("searchForm");
let campoBusqueda = document.getElementById("searchbar");

formulario.addEventListener("submit", function(event) {
    let texto = campoBusqueda.value.trim();

    if (texto === "") {
        event.preventDefault();
        alert("El campo de búsqueda no puede estar vacío.");
    } else if (texto.length < 3) {
        event.preventDefault();
        alert("El término buscado debe tener al menos 3 caracteres.");
    }
});

// Busqueda

document.addEventListener("DOMContentLoaded", function () {
    let params = new URLSearchParams(window.location.search);
    let termino = params.get("buscar") || params.get("busqueda") || "";

    let titulo = document.querySelector(".hcate");
    let mensaje = document.querySelector(".sin_resultados");
    let contenedor = document.querySelector(".categoriasindex.searchprodu");

    if (titulo) {
        if (termino) {
            titulo.textContent = 'Resultados de búsqueda para: "' + termino + '"';
        } else {
            titulo.textContent = "Resultados de búsqueda";
        }
    }

    if (!contenedor) {
        return;
    }

    if (!termino) {
        contenedor.innerHTML = "";
        if (mensaje) {
            mensaje.style.display = "block";
            mensaje.textContent = "No se ingresó ningún término de búsqueda.";
        }
        return;
    }

    fetch("https://dummyjson.com/products/search?q=" + encodeURIComponent(termino))
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            contenedor.innerHTML = "";
            let productos = data.products || [];

            if (!productos.length) {
                if (mensaje) {
                    mensaje.style.display = "block";
                    mensaje.textContent = 'No hay resultados para el término: "' + termino + '"';
                }
                return;
            }

            if (mensaje) {
                mensaje.style.display = "none";
            }

            productos.forEach(function (p) {
                let precioTexto = "$" + p.price;
                let imagen = p.thumbnail;
                if (Array.isArray(p.images) && p.images.length > 0) {
                    imagen = p.images[0];
                }

                let tarjeta = `
                    <div class="divcate searchcate">
                        <img src="${imagen}" alt="${p.title}" class="produim">
                        <p class="produtit">${p.title}</p>
                        <p class="produdes">${p.description}</p>
                        <p class="produprec">${precioTexto}</p>
                        <a href="./product.html?id=${p.id}" class="produinfo">Ver detalle.</a>
                    </div>
                `;

                contenedor.innerHTML += tarjeta;
            });
        })
        .catch(function () {
            contenedor.innerHTML = "";
            if (mensaje) {
                mensaje.style.display = "block";
                mensaje.textContent = "Ocurrió un error al buscar productos.";
            }
        });
});