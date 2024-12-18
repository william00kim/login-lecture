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
    console.log(JSON.stringify(req));

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success) {
            location.href = "/";
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("로그인 중 에러 발생"));;
    })

}