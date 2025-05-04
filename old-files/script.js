function redirectToLogin() {
    window.location.href = "login.html";
}

function scrollToDown() {
    window.scrollTo({
        top: document.body.scrollHeight,  // Yeh line page ko neeche scroll karegi.
        behavior: "smooth" // Yeh line smooth scrolling ka effect degi.
    });
}

const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", function () {
    // Toggle type
    const isPassword = passwordInput.type === "password";
    if (isPassword == true) {
        passwordInput.type = "text";
    }
    else {
        passwordInput.type = "password";
    }

    // Toggle icon
    togglePassword.classList.toggle("fa-eye");
    togglePassword.classList.toggle("fa-eye-slash");
});

function validateForm() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
        alert("please enter both email and password");
    }
    else {
      alert("login successful");
    }
}

