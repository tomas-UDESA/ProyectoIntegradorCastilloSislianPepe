let primeraSeccion = document.getElementById("productos");
let segundaSeccion = document.getElementById("masVendidos");

if (primeraSeccion) {
    primeraSeccion.innerHTML = "";

    fetch("https://dummyjson.com/products/category/smartphones?limit=10")
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            let productos = data.products;

            for (let i = 0; i < productos.length && i < 10; i++) {
                let p = productos[i];

                let tarjeta =
                    `<div class="divcate">
                        <img src="${p.thumbnail}" class="produim">
                        <p class="produtit">${p.title}</p>
                        <p class="produdes">${p.description}</p>
                        <p class="produprec">$${p.price}</p>
                        <a href="./product.html?id=${p.id}" class="produinfo">Ver detalle.</a>
                    </div>`;

                primeraSeccion.innerHTML += tarjeta;
            }
        })
        .catch(function (error) {
            console.log("Error en smartphones:", error);
        });
}

if (segundaSeccion) {
    segundaSeccion.innerHTML = "";

    fetch("https://dummyjson.com/products/category/groceries?limit=10")
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            let productos = data.products;

            for (let i = 0; i < productos.length && i < 10; i++) {
                let p = productos[i];

                let tarjeta =
                    `<div class="divcate">
                        <img src="${p.thumbnail}" class="produim">
                        <p class="produtit">${p.title}</p>
                        <p class="produdes">${p.description}</p>
                        <p class="produprec">$${p.price}</p>
                        <a href="./product.html?id=${p.id}" class="produinfo">Ver detalle.</a>
                    </div>`;

                segundaSeccion.innerHTML += tarjeta;
            }
        })
        .catch(function (error) {
            console.log("Error en groceries:", error);
        });
}