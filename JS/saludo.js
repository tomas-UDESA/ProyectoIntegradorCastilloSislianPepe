document.addEventListener("DOMContentLoaded", function () {
    var email;
    try {
        email = localStorage.getItem("userEmail");
    } catch (err) {
        email = null;
    }

    if (!email) return;

    var userList = document.querySelector(".user");
    if (!userList) return;

    userList.innerHTML = "";

    var liBien = document.createElement("li");
    liBien.className = "userwelcome";
    liBien.textContent = "Bienvenido: " + email;

    var liLogout = document.createElement("li");
    var aLogout = document.createElement("a");
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