let BASE_URL = 'http://adadie2.herokuapp.com';
const postlist = document.querySelector('.post-list');

// signup
let postform = document.querySelector('#postform');
let postbblog = document.getElementById('postblog');
let nameUpdate = document.getElementById('authornameupdateinputbox');
let titleUpdate = document.getElementById('titleupdateinputbox');
let bodyUpdate = document.getElementById('contentupdateinputbox');
let updateArticle = document.getElementById('updatearticle')
let editForm = document.querySelector('.editform')
let token =localStorage.getItem('token') ;
console.log(token);

function post(e)  {
  e.preventDefault();

  // get user info
  const authornames = postform.authornames.value;
  const description = postform.description.value;
  const info = postform.info.value;
  const citation = postform.citation.value;

  fetch(`${BASE_URL}/posts`, {
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
  .then(()=> location.reload())
  .catch(err=>{
    console.error(err)
  });

 };
postblog.addEventListener('click', post);
postform.reset();

// const getUsers = async () => {
//   try {
//     const res = await axios.get(`http://localhost:5000/posts`);

//     const users = res.body;

//     console.log(`GET: Here's the list of posts`, users);

//     return users;
//   } catch (e) {
//     console.log(e);
//   }
// };
// document.getElementById('showblog').addEventListener('click', getUsers);

//Get Data
fetch(`${BASE_URL}/posts`, {
  method: "GET",
  headers: {accept: "application/json",
  "content-Type": "application/json",
  "auth-token": token,
},
})
//.then(data=> console.log(data))
.then(response => response.json())
.then(posts=>{
 console.log(posts);
 posts.forEach(post=>{
   renderpost(post)
 })
})
  // create element & retrieve post
.catch(err=>{
  console.log(err)
});

//DOM manipulation
function renderpost(posts){
  let li = document.createElement('li');
  let Author_Names = document.createElement('h2');
  let Description = document.createElement('h5');
  let Info = document.createElement('p');
  let Delete = document.createElement('button');
  let update = document.createElement('button');

  li.setAttribute("data-id", `${posts._id}`, 'class', 'posted');
  Author_Names.textContent = posts.Author_names;
  Description.textContent = posts.Title;
  Info.textContent = posts.Content;
  Delete.textContent = 'Delete';
  Delete.setAttribute("class", "btn");
  update.textContent = 'Update';
  update.setAttribute("class", "updatebtn");

  li.appendChild(Author_Names);
  li.appendChild(Description);
  li.appendChild(Info);
  li.appendChild(Delete);
  li.appendChild(update);

  postlist.appendChild(li);
  const postId = `${posts._id}`;
//DElete Post

function del(e)  {
e.preventDefault()

  deleteURL = `${BASE_URL}/posts/Delete/${postId}`

 console.log(postId);
  fetch(`${deleteURL}`, {
    method: "DELETE",
    headers: {
    "auth-token": token,
},
  })
  .then(res=>{res.json()
  })
  //.then(data=> console.log(data))
  .then(()=> {
    location.reload()
  })
  .catch(err=>{
    console.error(err)
  });
 };

 //Update post

function edit(e)  {
e.preventDefault()

  let namesContent = `${Author_Names.textContent}`;
  let titleContent = `${Description.textContent}`;
  let bodyContent = `${Info.textContent}`;
  
  console.log(namesContent,titleContent,bodyContent)
  nameUpdate.value = namesContent;
  titleUpdate.value = titleContent;
  bodyUpdate.value = bodyContent;
  updateURL = `${BASE_URL}/posts/${postId}`

  editForm.addEventListener('click', (e)=>{
    e.preventDefault()
    console.log(`${updateURL}`)
  fetch(`${updateURL}`, {
    method: "PATCH",
    headers: {accept: "application/json",
    "content-Type": "application/json",
    "auth-token": token,
},
    body:JSON.stringify({
      Author_names: namesContent,
      Title: titleContent,
      Content: bodyContent,
    })
  })
  .then(res=>(res.json()))
  //.then(data=> console.log(data))
  // .then(()=> location.reload()
  // )
  .catch(err=>{
    console.error(err)
  });
  })
 };

 Delete.addEventListener('click', del);
 update.addEventListener('click', edit)
}
