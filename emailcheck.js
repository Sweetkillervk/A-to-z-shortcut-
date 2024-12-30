const loggedInUsers = {}; // Logged-in users ko track karega

document.getElementById("loginButton").addEventListener("click", function () {
  const name = document.getElementById("studentName").value.trim();
  const email = document.getElementById("studentEmail").value.trim();
  const learnerCode = document.getElementById("learnerCode").value.trim();

  // Validation ke liye valid users ka list
  const validUsers = [
    { email: "user1@gmail.com", learnerCode: "1234" },
    { email: "user2@example.com", learnerCode: "5678" },
  ];

  // Email aur learnerCode ko validate karein
  const user = validUsers.find(
    (u) => u.email === email && u.learnerCode === learnerCode
  );

  if (user) {
    // Check if user already logged in
    const activeUser = localStorage.getItem("activeUser");
    if (activeUser && activeUser === email) {
      alert("This email is already logged in on another device!");
      return;
    }

    // Save current user to LocalStorage
    localStorage.setItem("activeUser", email);

    // Successful login
    alert("Login successful!");
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("quizSection").style.display = "block";
  } else {
    alert("Invalid email or learner code!");
  }
});

// Logout functionality
function logoutUser() {
  const activeUser = localStorage.getItem("activeUser");
  if (activeUser) {
    localStorage.removeItem("activeUser"); // Clear login state
    alert("You have been logged out!");
  }
  document.getElementById("quizSection").style.display = "none";
  document.getElementById("loginForm").style.display = "block";
}

// Logout button ke liye event listener
document.getElementById("submit").addEventListener("click", function () {
  logoutUser();
});
