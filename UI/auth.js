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

// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    console.log('user signed out');
  })

  // login
   // get user info
   
/*const email = loginForm['login-email'].value;
const password = loginForm['login-password'].value;

const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    console.log(cred.user);
    
//reset form
    loginForm.reset();
  })
});*/