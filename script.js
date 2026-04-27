function loginpage() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email === "" || password === "") {
    alert("Please enter email and password");
  } else {
    window.location.href = "index.html";
  }
}
function sendMessage() {
  alert("Message sent successfully!");
}

