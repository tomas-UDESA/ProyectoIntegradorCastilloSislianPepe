document.addEventListener("DOMContentLoaded", function () {
    let email = localStorage.getItem("userEmail");

    let sinEmail = document.getElementById("sinEmail");
    let conEmail = document.getElementById("conEmail");
    let saludo = document.getElementById("saludo");
    let logOut = document.getElementById("logOut");

    if (email === null || email === "") {
        sinEmail.style.display = "block";
        conEmail.style.display = "none";
    } else {
        sinEmail.style.display = "none";
        conEmail.style.display = "block";

        saludo.textContent = "Bienvenido: " + email;
    }
});