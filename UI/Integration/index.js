const BASE_URL = 'http://adadie2.herokuapp.com';

// signup
const signupForm = document.querySelector('.signupform');
const regbtn = document.getElementById('regbtn');

function reg(e)  {
  e.preventDefault();
  // get user info
  const email = signupForm.email.value;
  const password = signupForm.password.value;
  
  fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: {accept: "application/json",
    "content-Type": "application/json"},
    body:JSON.stringify({
      Fname: signupForm['fname'].value,
      Lname: signupForm['lname'].value,
      Email: signupForm['email'].value,
      Password: signupForm['password'].value
    })
  })
  .then(res=>(res.json()))
  .then(data=> console.log(data));
 };
regbtn.addEventListener('click', reg);
signupForm.reset();
