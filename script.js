document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");

  // Handle Signup Form Submission
  if (signupForm) {
    signupForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const username = document.getElementById("username").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirm-password").value;

      if (username && email && password && confirmPassword) {
        if (password === confirmPassword) {
          // Store user credentials in localStorage
          localStorage.setItem("username", username);
          localStorage.setItem("email", email);
          localStorage.setItem("password", password);
          alert("Signup successful! You can now log in.");
          window.location.href = "login.html"; // Redirect to login page
        } else {
          alert("Passwords do not match.");
        }
      } else {
        alert("Please fill out all fields.");
      }
    });
  }

  // Handle Login Form Submission
  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const username = document.getElementById("login-username").value;
      const password = document.getElementById("login-password").value;

      const storedUsername = localStorage.getItem("username");
      const storedPassword = localStorage.getItem("password");

      if (username === storedUsername && password === storedPassword) {
        alert("Login successful!");
        // Redirect to the specified webpage
        window.location.href = "website/website.html"; // Adjust the path as needed
      } else {
        alert("Invalid username or password.");
      }
    });
  }
});
