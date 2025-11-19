document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector(".form_user");
    if (!form) return;

    let emailInput = document.getElementById("email");
    let passwordInput = document.getElementById("contraseña");
    let errorEl = document.getElementById("login-error");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        if (errorEl) errorEl.textContent = "";

        var email = emailInput ? emailInput.value.trim() : "";
        var password = passwordInput ? passwordInput.value : "";

        if (!email) {
            if (errorEl) errorEl.textContent = "El email es obligatorio.";
            return;
        }

        if (!password) {
            if (errorEl) errorEl.textContent = "La contraseña es obligatoria.";
            return;
        }

        if (password.length < 6) {
            if (errorEl) errorEl.textContent = "La contraseña debe tener al menos 6 caracteres.";
            return;
        }

        try {
            localStorage.setItem("userEmail", email);
        } catch (err) {}

        window.location.href = "./index.html";
    });
});