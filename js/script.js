let btnHome = document.querySelector(".btn-home");
let btnLogin = document.querySelector(".log")
let loginBox = document.querySelector(".login-box");
let closeBtn = document.querySelector(".close");

function welcome() {
    loginBox.style.display = "inline-block";
}

function login() {
    document.querySelector(".login-box").style.display = "inline-block";
}

btnHome.addEventListener("click", welcome);

closeBtn.onclick = function() {
    loginBox.style.display = "none";
  }