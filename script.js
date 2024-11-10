let email = document.getElementById("email");
let password = document.getElementById("password");
let eError = document.getElementById("email-error");
let pError = document.getElementById("password-error");
let form = document.getElementById("signupForm");

email.addEventListener("input", () => {
  validateEmail();
  checkValid();
});

password.addEventListener("input", () => {
  validatePassword();
  checkValid();
});

function validateEmail() {
  let inputEmail = email.value;
  if (inputEmail === "") {
    eError.textContent = "Email cannot be empty.";
    return false;
  } else if (
    inputEmail.length <= 3 ||
    !inputEmail.includes("@") ||
    !inputEmail.includes(".")
  ) {
    eError.textContent =
      "Make sure email is more than 3 characters and has @ and .";
    return false;
  } else {
    eError.textContent = "";
    return true;
  }
}

function validatePassword() {
  let inputPass = password.value;
  if (inputPass === "") {
    pError.textContent = "Password cannot be empty.";
    return false;
  } else if (inputPass.length <= 8) {
    pError.textContent = "Make sure password is more than 8 characters.";
    return false;
  } else {
    pError.textContent = "";
    return true;
  }
}

function checkValid() {
  const emailIsValid = validateEmail();
  const passwordIsValid = validatePassword();

  if (emailIsValid && passwordIsValid) {
    document.getElementById("validationMessage").textContent =
      "All good to go.";
  } else {
    document.getElementById("validationMessage").textContent = "";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Validate fields before attempting to submit
  const emailIsValid = validateEmail();
  const passwordIsValid = validatePassword();

  if (emailIsValid && passwordIsValid) {
    if (confirm("Are you sure you want to submit?")) {
      alert("Successful Signup!");
    } else {
      form.reset();
      eError.textContent = "";
      pError.textContent = "";
      document.getElementById("validationMessage").textContent = "";
    }
  } else {
    eError.textContent ="Make sure email is more than 3 characters and has @ and .";
    pError.textContent = "Make sure password is more than 8 characters.";
  }
});
