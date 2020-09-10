
// signup
const signupForm = document.querySelector('.signupform');

const regbtn = document.getElementById('regbtn');

function reg(e)  {
signupForm.addEventListener('submit', (e) => {

  e.preventDefault();
  // get user info
  const email = signupForm.email.value;
  const password = signupForm.password.value;

  // sign up the user && send data to firestore
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    return db.collection('Users-data').doc(cred.user.uid).set({
        Firstname: signupForm['fname'].value,
        Lastname: signupForm['lname'].value,
      });
    }).then(() => {
      //reset form
      signupForm.reset();
    });
};
regbtn.addEventListener('click', reg);
signupForm.reset();
});
/*
//Login
const loginForm = document.querySelector('#loginForm');
const loginbtn = document.getElementById('loginbtn')
function login(e) {
  e.preventDefault();
  
  // get user info
  const email = loginForm['email'];
  const password = loginForm['password'];
auth.signInUserWithEmailAndPassword(email.value, password.value).then(cred => {
  window.location.href="profile.html";
      //reset form
      loginForm.reset();
    });
};
loginbtn.addEventListener('click', login) 
loginForm.reset();*/
});*/
