document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("register-form");
    if (!form) return;

    let emailInput = document.getElementById("reg-email");
    let passInput = document.getElementById("reg-password");
    let pass2Input = document.getElementById("reg-password2");
    let errorEl = document.getElementById("register-error");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        if (errorEl) errorEl.textContent = "";

        let email = emailInput ? emailInput.value.trim() : "";
        let pass = passInput ? passInput.value : "";
        let pass2 = pass2Input ? pass2Input.value : "";

        if (!email) {
            if (errorEl) errorEl.textContent = "El email es obligatorio.";
            return;
        }

        if (!pass) {
            if (errorEl) errorEl.textContent = "La contraseña es obligatoria.";
            return;
        }

        if (pass.length < 6) {
            if (errorEl) errorEl.textContent = "La contraseña debe tener al menos 6 caracteres.";
            return;
        }

        if (pass !== pass2) {
            if (errorEl) errorEl.textContent = "Las contraseñas no coinciden.";
            return;
        }

        window.location.href = "./login.html";
    });
});