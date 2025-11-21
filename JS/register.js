document.addEventListener("DOMContentLoaded", function () {
    let registerForm = document.getElementById("registerForm");

    let emailInput = document.getElementById("reg-email");
    let passwordInput = document.getElementById("reg-password");
    let password2Input = document.getElementById("reg-password2");
    let termsInput = document.getElementById("reg-terms");

    let errorEmail = document.getElementById("errorEmail");
    let errorPassword = document.getElementById("errorPassword");
    let errorPassword2 = document.getElementById("errorPassword2");
    let errorTerms = document.getElementById("errorTerms");

    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();
        let email = emailInput.value.trim();
        let password = passwordInput.value;
        let password2 = password2Input.value;

        errorEmail.innerText = "";
        errorPassword.innerText = "";
        errorPassword2.innerText = "";
        errorTerms.innerText = "";

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
        else if (password2 === "") {
            errorPassword2.innerText = "Debe reescribir la contraseña";
            hayError = true;
        }
        else if (password !== password2) {
            errorPassword2.innerText = "Las contraseñas no coinciden";
            hayError = true;
        }

        if (!hayError) {
            localStorage.setItem("userEmail", email);
            registerForm.submit();
        }
    });
});