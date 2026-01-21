const eyeIcon = document.getElementById("fa-eye");
let eyeSlash = document.getElementById("fa-eye-slash");
const passwordInput = document.getElementById("password");
const toggleEyeIcon = () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.style.display = "block"
    eyeSlash.style.display = "none";
  } else {
    passwordInput.type = "password";
    eyeIcon.style.display = "none";
    eyeSlash.style.display = "block";
  }
};

eyeIcon.addEventListener("click", toggleEyeIcon);
eyeSlash.addEventListener("click", toggleEyeIcon)
