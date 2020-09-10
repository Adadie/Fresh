//Declare inputbox variables
var contactform = document.querySelector("#contactform");
var names = document.forms.contactform.names;
var comments = document.forms.contactform.comments;
var email = document.forms.contactform.email;
var message = document.forms.contactform.message;
//Declare error element variables
var names_error = document.getElementById("names_error");
var lname_error = document.getElementById("lname_error");
var email_error = document.getElementById("email_error");
var message_error = document.getElementById("message_error");
//Adding Event listeners
names.addEventListener("blur", namesok, true);
comments.addEventListener("blur", lnameok, true);
email.addEventListener("blur", emailok, true);
message.addEventListener("blur", messageok, true);
//validate function
contactform.addEventListener("submit", function (e) {
  e.preventDefault();
  //start if statements
  if (names.value == "") {
    names_error.textContent = "Input your first name";
    names.style.border = "2px solid white";
    names_error.style.color = "red";
    return false;
  }
  if (comments.value == "") {
    lname_error.textContent = "Please enter your last name";
    comments.style.border = "2px outset white";
    lanme_error.style.color = "red";
    return false;
  }
  if (email.value == "") {
    email_error.textContent = "Please enter your email";
    email.style.border = "2px solid white";
    email_error.style.color = "red";
    return false;
  }
  if (message.value == "") {
    message_error.textContent = "Please enter your message";
    message.style.border = "2px solid red";
    message_error.style.color = "red";
    return false;
  }
});
//Event handler functions
function namesok() {
  if (names.value != "") {
    names_error.textContent = "";
    return true;
  }
}
function lnameok() {
  if (comments.value != "") {
    lname_error.textContent = "";
    return true;
  }
}
function emailok() {
  if (email.value != "") {
    email_error.textContent = "";
    return true;
  }
}
function messageok() {
  if (message.value != "") {
    message_error.textContent = "";
    return true;
  }
}