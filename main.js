function checkLogin() {
    let login = document.querySelector("#login").value;
    let password = document.querySelector("#password").value;

    if (login === "1234" && password === "12345") {
        window.location.href = "about.html";
    } else {
        document.querySelector("#message").textContent = "Login yoki parol xato!";
    }
}