const BASE_URL = 'http://adadie2.herokuapp.com';

// signup
const postform = document.querySelector('#postform');
const postbblog = document.getElementById('postblog');
let token =localStorage.getItem('token') ;
console.log(token);

function post(e)  {
  e.preventDefault();

  // get user info
  const authornames = postform.authornames.value;
  const description = postform.description.value;
  const info = postform.info.value;
  const citation = postform.citation.value;
  
  fetch(`http://localhost:5000/posts`, {
    method: "POST",
    headers: {accept: "application/json",
    "content-Type": "application/json",
    "auth-token": token,
},
    body:JSON.stringify({
      Author_names: postform['authornames'].value,
      Title: postform['description'].value,
      Content: postform['info'].value
    })
  })
  .then(res=>(res.json()))
  //.then(data=> console.log(data))
  .then(data=>{
   console.log(data)
  })
  .catch(err=>{
    console.error(err)
  });
  
 };
postblog.addEventListener('click', post);
postform.reset();
