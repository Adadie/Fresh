// signup
const signupForm = document.querySelector('.form');
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

//Login
const loginForm = document.querySelector('#loginForm');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = loginForm.email.value;
  const password = loginForm.password.value;
auth.signInUserWithEmailAndPassword(email, password).then(cred => {
      //reset form
      loginForm.reset();
    });
});