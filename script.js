document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Validate username and password
        if (username === "yourUsername" && password === "yourPassword") {
            // Store username and password in local storage
            localStorage.setItem("loggedIn", "true");
            // Redirect to resume page
            window.location.href = "resume.html";
        } else {
            errorMessage.textContent = "Invalid username/password";
        }
    });
});
