let email = document.querySelector(".email");
let password = document.querySelector(".password");
let submitBtn = document.querySelector(".submit-btn");
submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let checkAllFields = email.value && password.value;
    if (!checkAllFields) {
        return;
    }
    let account = {
        email: email.value,
        password: password.value,
    };
    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:4000");
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(account));
    xhttp.addEventListener("load", function () {
        let res = JSON.parse(this.response);
        if (res.bool === "true") {
            window.location.href = "http://localhost:5500/";
        } else {
            alert(res.bool);
        }
    });
});
