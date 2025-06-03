document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const successMessage = document.getElementById("successMessage");

  let valid = true;
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMessage.textContent = "";

  if (name.value.trim() === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === "") {
    emailError.textContent = "Email is required.";
    valid = false;
  } else if (!emailRegex.test(email.value.trim())) {
    emailError.textContent = "Enter a valid email address.";
    valid = false;
  }

  if (message.value.trim() === "") {
    messageError.textContent = "Message cannot be empty.";
    valid = false;
  }

  if (valid) {
    successMessage.textContent = "Your message has been sent successfully!";
    name.value = "";
    email.value = "";
    message.value = "";
  }
});
