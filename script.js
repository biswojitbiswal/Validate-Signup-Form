let email = document.getElementById("email");
let password = document.getElementById("password");
let eError = document.getElementById("email-error");
let pError = document.getElementById("password-error");
let form = document.getElementById("signupForm");

email.addEventListener("input", (e) => {
    let inputEmail = e.target.value;
    if (inputEmail.length > 3 && inputEmail.includes("@") && inputEmail.includes(".")) {
        eError.textContent = "";
    } else {
        eError.textContent = "Make sure email is more than 3 characters and has @ and a .";
    }

    checkValid();
});

password.addEventListener("input", (e) => {
    let inputPass = e.target.value;
    if (inputPass.length > 8) {
        pError.textContent = "";
    } else {
        pError.textContent = "Make sure password is more than 8 characters.";
    }

    checkValid();
});

function checkValid() {
    const emailIsValid = email.value.length > 3 && email.value.includes("@") && email.value.includes(".");
    const passwordIsValid = password.value.length > 8;
    
    if (emailIsValid && passwordIsValid) {
        document.getElementById("validationMessage").textContent = "All good to go.";
    } else {
        document.getElementById("validationMessage").textContent = "";
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (confirm("Are you sure you want to submit?")) {
        alert("Successful Signup!");
    } else {
        form.reset();
        eError.textContent = "";
        pError.textContent = "";
        document.getElementById("validationMessage").textContent = "";
    }
});
