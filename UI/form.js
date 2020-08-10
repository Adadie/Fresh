//Declare inputbox variables
var form = document.querySelector(".signupform");
var fname = document.forms.myform.fname;
var lname = document.forms.myform.lname;
var email = document.forms.myform.email;
var password = document.forms.myform.password;
//Declare error element variables
var fname_error = document.getElementById("fname_error");
var lname_error = document.getElementById("lname_error");
var email_error = document.getElementById("email_error");
var password_error = document.getElementById("password_error");
//Adding Event listeners
fname.addEventListener("blur", fnameok, true);
lname.addEventListener("blur", lnameok, true);
email.addEventListener("blur", emailok, true);
password.addEventListener("blur", passwordok, true);
//validate function
form.addEventListener("submit", function (e) {
  e.preventDefault();
  //start if statements
  if (fname.value == "") {
    fname_error.textContent = "Input your first name";
    fname.style.border = "2px solid white";
    fname_error.style.color = "red";
    return false;
  }
  if (lname.value == "") {
    lname_error.textContent = "Please enter your last name";
    lname.style.border = "2px outset white";
    lanme_error.style.color = "red";
    return false;
  }
  if (email.value == "") {
    email_error.textContent = "Please enter your email";
    email.style.border = "2px solid white";
    email_error.style.color = "red";
    return false;
  }
  if (password.value == "") {
    password_error.textContent = "Please enter your password";
    password.style.border = "2px solid red";
    password_error.style.color = "red";
    return false;
  }
});
//Event handler functions
function fnameok() {
  if (fname.value != "") {
    fname_error.textContent = "";
    return true;
  }
}
function lnameok() {
  if (lname.value != "") {
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
function passwordok() {
  if (password.value != "") {
    password_error.textContent = "";
    return true;
  }
}