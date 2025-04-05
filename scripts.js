const form = document.querySelector("form");
const password = document.getElementById("password");
const passwordError = document.getElementById("passwordError");
confirmPassword = document.getElementById("confirmPassword");
confirmPasswordError = document.getElementById("confirmPasswordError");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const passwordValue = password.value;
    const confirmPasswordValue = confirmPassword.value;

    let hasUpperCase = /[A-Z]/.test(passwordValue);
    let hasNumber = /[0-9]/.test(passwordValue);

    let passwordsMatch = passwordValue === confirmPasswordValue;

    if (hasUpperCase && hasNumber) {
        passwordError.textContent = "Password is valid!";
        passwordError.style.color = "green";
    } else {
        passwordError.textContent = "Password must contain at least one uppercase letter and one number.";
        passwordError.style.color = "red";
    }

    if (passwordsMatch) {
        confirmPasswordError.textContent = "Passwords match!";
        confirmPasswordError.style.color = "green";
    } else {
        confirmPasswordError.textContent = "Passwords do not match.";
        confirmPasswordError.style.color = "red";
    }

});
