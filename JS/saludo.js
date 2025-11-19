document.addEventListener("DOMContentLoaded", function () {
    let email;
    try {
        email = localStorage.getItem("userEmail");
    } catch (err) {
        email = null;
    }

    if (!email) return;

    let userList = document.querySelector(".user");
    if (!userList) return;

    userList.innerHTML = "";

    let liBien = document.createElement("li");
    liBien.className = "userwelcome";
    liBien.textContent = "Bienvenido: " + email;

    let liLogout = document.createElement("li");
    let aLogout = document.createElement("a");
    aLogout.href = "#";
    aLogout.textContent = "logout";
    aLogout.className = "userlog";
    aLogout.id = "logout-link";

    liLogout.appendChild(aLogout);
    userList.appendChild(liBien);
    userList.appendChild(liLogout);

    aLogout.addEventListener("click", function (e) {
        e.preventDefault();
        try {
            localStorage.removeItem("userEmail");
        } catch (err) {}
        window.location.href = "./index.html";
    });
});