const form = document.querySelector("form");
const firstName = document.getElementById("f_name");
const lastName = document.getElementById("l_name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const mess = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `First name: ${firstName.value}<br> Last name: ${lastName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> 
  Message: ${mess.value}`;

  Email.send({
    SecureToken: "54b9f954-27e3-49dc-a70d-a54edf578b0a",
    To: "jeepneyrepubliq@gmail.com",
    From: "jeepneyrepubliq@gmail.com",
    Body: bodyMessage
  }).then(
  message => {
    if (message == "OK"){
      Swal.fire({
        title: "Success!",
        text: "Message successfuly sent!",
        icon: "success"
      });
    }
  }
  );
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();

  if (!firstName.classList.contains("error") && !lastName.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !mess.classList.contains("error")) {
      sendEmail();
  }

  form.reset();
  return false;
});


function checkInputs()
{
  const items = document.querySelectorAll(".item")

  for (const item of items) {
    if (item.value == ""){
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

    if (items[1].value !=""){
      checkEmail();
    }

    items[1].addEventListener("keyup", () => {
      checkEmail();
    });

    item.addEventListener("keyup", () => {
      if (item.value !="") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      }
      else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
}

function checkEmail() {
  const emailRegex = /^[A-Za-z0-9](([a-zA-Z0-9,=\.!\-#|\$%\^&\*\+/\?_`\{\}~]+)*)@(?:[0-9a-zA-Z-]+\.)+[a-zA-Z]{2,9}$/;
  const errorTxtEmail = document.querySelector(".error-text email");

  if (!email.value.match(emailRegex)) {
    email.classList.add("error");
    email.parentElement.classList.add("error");

    if (email.value !=""){
      errorTxtEmail.innerText = "Enter a valid email address";
    }
    else {
      errorTxtEmail.innerText = "Email address cant be blank";
    }
  }
  else {
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
  }
}
