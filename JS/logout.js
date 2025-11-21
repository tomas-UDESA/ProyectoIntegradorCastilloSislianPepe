document.addEventListener("DOMContentLoaded", function () {
    let sinEmail = document.getElementById("sinEmail");
    let conEmail = document.getElementById("conEmail");
    let logOut = document.getElementById("logOut");

    logOut.addEventListener("click", function () {
        localStorage.removeItem("userEmail");
        sinEmail.style.display = "block";
        conEmail.style.display = "none";
    });
});