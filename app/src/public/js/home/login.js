const id = document.getElementById('id');
const password = document.getElementById("password");
const login_btn = document.getElementById("login_btn");

login_btn.addEventListener("click", login);

function login() {
    const req = {
        id : id.value,
        password : password.value
    }

    console.log(req);
}