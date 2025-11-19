document.addEventListener("DOMContentLoaded", function () {
    let userList = document.querySelector(".user");
    if (!userList) {
        return;
    }

    userList.addEventListener("click", function (e) {
        let target = e.target;
        if (!target || !target.classList.contains("logout-link")) {
            return;
        }

        e.preventDefault();

        try {
            localStorage.removeItem("userEmail");
        } catch (err) {}

        let welcomeLi = userList.querySelector(".userwelcome");
        if (welcomeLi && userList.contains(welcomeLi)) {
            userList.removeChild(welcomeLi);
        }

        let logoutLi = target.closest("li");
        if (logoutLi && userList.contains(logoutLi)) {
            userList.removeChild(logoutLi);
        }

        let lis = userList.querySelectorAll("li");
        lis.forEach(function (li) {
            let a = li.querySelector("a");
            if (!a) return;
            let href = a.getAttribute("href") || "";
            if (href.indexOf("login.html") !== -1 || href.indexOf("register.html") !== -1) {
                li.style.display = "";
            }
        });

        window.location.href = "./index.html";
    });
});