let firstName = document.querySelector(".firstName");
let lastName = document.querySelector(".lastName");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let birthdate = document.querySelector(".birthdate");
let submitBtn = document.querySelector(".submit-btn");
let account;
submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let checkAllFields = firstName.value && lastName.value && email.value && password.value && birthdate.value;
    if (!checkAllFields) {
        return;
    }
    account = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
        birthdate: birthdate.value,
    };
    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:3000");
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(account));
});
