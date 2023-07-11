const form = document.querySelector("form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const errorMessages = document.querySelectorAll(".error-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  resetErrors();
  validadeInputs();
});

function setError(input, errorMessage) {
  const errorMessageElement = input.nextElementSibling;
  errorMessageElement.textContent = errorMessage;
  input.parentElement.classList.add("error");
}

function resetErrors() {
  errorMessages.forEach((msg) => {
    msg.textContent = "";
  });
  name.parentElement.classList.remove("error");
  email.parentElement.classList.remove("error");
  subject.parentElement.classList.remove("error");
  message.parentElement.classList.remove("error");
}

function validadeInputs() {
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const subjectValue = subject.value.trim();
  const messageValue = message.value.trim();

  if (nameValue === "") {
    setError(name, "Não é permitido que o nome seja enviado em branco");
  }
  if (emailValue === "") {
    setError(email, "Não é permitido que o e-mail seja enviado em branco");
  } else if (isValidEmail(emailValue)) {
    setError(email, "E-mail inválido");
  }
  if (subjectValue === "") {
    setError(subject, "Não é permitido que o assunto seja enviado em branco");
  }
  if (messageValue === "") {
    setError(message, "Não é permitido que a mensagem seja enviada em branco");
  }
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
