document.addEventListener("DOMContentLoaded", function () {
  const loggedInUsers = {}; // Active users ko track karega
  const loginButton = document.getElementById("loginButton");

  loginButton.addEventListener("click", function () {
    const name = document.getElementById("studentName").value.trim();
    const email = document.getElementById("studentEmail").value.trim();
    const learnerCode = document.getElementById("learnerCode").value.trim();

    if (!name || !email || !learnerCode) {
      alert("Please fill in all fields!");
      return;
    }

    // Valid users list
    const validUsers = [
      { email: "user1@example.com", learnerCode: "1234" },
      { email: "user2@example.com", learnerCode: "5678" },
    ];

    // User validation
    const user = validUsers.find(
      (u) => u.email === email && u.learnerCode === learnerCode
    );

    if (user) {
      // Check if the email is already logged in
      const activeUser = localStorage.getItem("activeUser");
      if (activeUser && activeUser === email) {
        alert("This email is already logged in on another device!");
        return;
      }

      // Save active user
      localStorage.setItem("activeUser", email);

      alert("Login successful!");
      document.getElementById("loginForm").style.display = "none";
      document.getElementById("quizSection").style.display = "block";
    } else {
      alert("Invalid email or learner code!");
    }
  });

  // Logout Functionality
  function logoutUser() {
    const activeUser = localStorage.getItem("activeUser");
    if (activeUser) {
      localStorage.removeItem("activeUser");
      alert("You have been logged out!");
    }
    document.getElementById("quizSection").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
  }

  // Attach Logout functionality
  document.getElementById("submit").addEventListener("click", function () {
    logoutUser();
  });
});
