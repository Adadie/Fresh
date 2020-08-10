// signup
const signupForm = document.querySelector('.signupform');
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
});

/*//Login
const loginForm = document.querySelector('#loginForm');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = loginForm['email'];
  const password = loginForm['password'];
auth.signInUserWithEmailAndPassword(email.value, password.value).then(cred => {
  window.location.href="profile.html";
      //reset form
      loginForm.reset();
    });
});*/