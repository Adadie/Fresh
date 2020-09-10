const BASE_URL = 'http://adadie2.herokuapp.com';
// signup
const loginForm = document.querySelector('#loginForm');
const loginbtn = document.getElementById('loginbtn');
let token 

function login(e)  {
  e.preventDefault();
  // get user info
  const email = loginForm.email.value;
  const password = loginForm.password.value;
  
  fetch(`${BASE_URL}/users/login`, {
    method: "POST",
    headers: {accept: "application/json",
    "content-Type": "application/json"},
    body:JSON.stringify({
      Email: loginForm['email'].value,
      Password: loginForm['password'].value
    })
  })
  .then(res=>(res.json()))
  //.then(data=> console.log(data))
  .then(data=>{
   token = data.token
   window.localStorage.setItem('token', token)
   window.location.href='./profile.html'
  })
  .catch(err=>{
    console.error(err)
  });
  
 };
loginbtn.addEventListener('click', login);
loginForm.reset();