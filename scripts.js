// const form = document.querySelector("form");
// const password = document.getElementById("password");
// const passwordError = document.getElementById("passwordError");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     const passwordValue = password.value;
//     let hasUpperCase = false;
//     let hasNumber = false;

//     for (let i = 0; i < passwordValue.length; i++) {
//         if (passwordValue[i] >= 'A' && passwordValue[i] <= 'Z') {
//           hasUpperCase = true;
//           break;
//         }
//       }

//     for (let i = 0; i < passwordValue.length; i++) {
//         if (passwordValue[i] >= '0' && passwordValue[i] <= '9') {
//           hasNumber = true;
//           break;
//         }
//       }
//     if (hasUpperCase && hasNumber) {
//       passwordError.textContent = "Password is valid!";
//       passwordError.style.color = "green";
//     }
//     else {
//       passwordError.textContent = "Password must contain at least one uppercase letter and one number.";
//       passwordError.style.color = "red";
//     }
// })

const form = document.querySelector("form");
const password = document.getElementById("password");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const passwordValue = password.value;
    let hasUpperCase = /[A-Z]/.test(passwordValue);
    let hasNumber = /[0-9]/.test(passwordValue);

    if (hasUpperCase && hasNumber) {
        passwordError.textContent = "Password is valid!";
        passwordError.style.color = "green";
    } else {
        passwordError.textContent = "Password must contain at least one uppercase letter and one number.";
        passwordError.style.color = "red";
    }
});
