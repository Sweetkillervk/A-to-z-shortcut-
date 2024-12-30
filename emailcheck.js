document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.getElementById("loginButton");

  // Login button click event
  loginButton.addEventListener("click", function () {
    const name = document.getElementById("studentName").value.trim();
    const email = document.getElementById("studentEmail").value.trim();
    const learnerCode = document.getElementById("learnerCode").value.trim();

    // Check if any field is empty
    if (!name || !email || !learnerCode) {
      alert("Please fill in all fields!");
      return;
    }

    // Valid users list (email and learner code)
    const validUsers = [
      { email: "user1@example.com", learnerCode: "1234" },
      { email: "user2@example.com", learnerCode: "5678" },
    ];

    // Check if the entered email and learner code match any valid user
    const user = validUsers.find(
      (u) => u.email === email && u.learnerCode === learnerCode
    );

    if (user) {
      // Check if the user is already logged in on another device
      if (localStorage.getItem("loggedInEmail") === email) {
        alert("This email is already logged in on another device.");
        return;
      }

      // If the user is valid, store the email in localStorage to mark as logged in
      localStorage.setItem("loggedInEmail", email);
      alert("Login successful!");

      // Hide login form and show quiz section
      document.getElementById("loginForm").style.display = "none";
      document.getElementById("quizSection").style.display = "block";
    } else {
      // If invalid, show error and keep login form visible
      alert("Invalid email or learner code! Please try again.");
      // Reset input fields to prevent multiple failed attempts
      document.getElementById("studentEmail").value = '';
      document.getElementById("learnerCode").value = '';
    }
  });

  // Check if a user is already logged in when the page loads
  if (localStorage.getItem("loggedInEmail")) {
    alert("You are already logged in!");
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("quizSection").style.display = "block";
  }
});
