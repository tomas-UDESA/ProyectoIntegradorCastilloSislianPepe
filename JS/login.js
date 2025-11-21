document.addEventListener("DOMContentLoaded", function () {
    let loginForm = document.getElementById("loginForm");
    let emailInput = document.getElementById("email");
    let passwordInput = document.getElementById("contraseña");
    let errorEmail = document.getElementById("errorEmail");
    let errorPassword = document.getElementById("errorPassword");

    loginForm.addEventListener("submit", function (event) {
        let email = emailInput.value.trim();
        let password = passwordInput.value;

        errorEmail.innerText = "";
        errorPassword.innerText = "";

        let hayError = false;
        if (email === "") {
            errorEmail.innerText = "El email es obligatorio";
            hayError = true;
        }
        else if (password === "") {
            errorPassword.innerText = "La contraseña es obligatoria";
            hayError = true;
        }
        else if (password.length < 6) {
            errorPassword.innerText = "La contraseña debe tener al menos 6 caracteres";
            hayError = true;
        }
        if (hayError) {
            event.preventDefault();
        } else {
            localStorage.setItem("userEmail", email);
        }
    });
});