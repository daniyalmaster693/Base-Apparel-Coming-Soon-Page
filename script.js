let showError = false;
let inputValue = "";

function submitClick() {
  if (showError) {
    return;
  }

  const input = document.querySelector(".input");
  input.style.border = "1px solid #ff4242";
  input.style.marginLeft = "-6px";

  const error = document.createElement("img");
  error.src = "icon-error.svg";
  error.alt = "Error";
  error.style.marginTop = "23px";
  error.style.marginRight = "110px";
  error.style.marginLeft = "-140px";

  const errormessage = document.createElement("p");
  errormessage.style.color = "#ee8c8c";
  errormessage.style.fontSize = "13px";
  errormessage.style.fontWeight = "400";
  errormessage.style.marginLeft = "35px";

  const inputemail = document.querySelector(".inputemail");
  inputemail.append(error);

  const email = document.querySelector(".email");
  email.append(errormessage);

  if (inputValue === "") {
    errormessage.textContent = "Please provide a valid email";
  }

  showError = true;
  inputValue = true;
}

document.addEventListener("DOMContentLoaded", () => {
  const submit = document.querySelector(".submit");
  submit.addEventListener("click", submitClick);
});
