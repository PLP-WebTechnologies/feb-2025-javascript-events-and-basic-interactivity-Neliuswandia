const form = document.getElementsByTagName("form");
const password = document.getElementById("password");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const passwordValue = password.value;
    let hasUppercase = false;
    let hasNumber = false;

    for (let i = 0; i < password.length; i++) {
        if (password[i] >= 'A' && password[i] <= 'Z') {
          hasUpperCase = true;
          break;
        }
      }
      
    for (let i = 0; i < password.length; i++) {
        if (password[i] >= 'A' && password[i] <= 'Z') {
          hasUpperCase = true;
          break;
        }
      }

})
