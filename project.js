// Initialize array of users only if not already set
if (!localStorage.getItem("users")) {
  const users = [
    { username: "rahul", password: "123" },
    { username: "alice", password: "abc" }
  ];
  localStorage.setItem("users", JSON.stringify(users));
}

// Attach form submit event listener once DOM content is loaded
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.login-form');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload on submit

    // Get the stored users array
    const storedUsers = JSON.parse(localStorage.getItem("users"));

    // Get entered user inputs
    const enteredUsername = document.getElementById('username').value.trim();
    const enteredPassword = document.getElementById('password').value.trim();

    // Check if entered credentials match any user
    const matchedUser = storedUsers.find(user => user.username === enteredUsername && user.password === enteredPassword);

    if (matchedUser) {
      alert("Successful login");
      // Optional: Add redirect or other logic here
    } else {
      alert("Username or password is incorrect");
    }
  });
});
