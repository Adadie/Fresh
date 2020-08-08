const regform = document.querySelector('.form');
const contactform = document.querySelector("#contactform");
const postform = document.querySelector('#postform');
const messagelist = document.querySelector(".messagelist");

<<<<<<< HEAD
//Saving messages
/*
function send(e) {
    e.preventDefault;
=======
<<<<<<< HEAD

function send(e) {
    e.preventDefault;
=======
// saving SignUp data
/*regform.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('Users').add({
        fname: regform.fname.value,
        lname: regform.lname.value,
        email: regform.email.value,
        paswword: regform.password.value,
    });
    regform.fname.value = '';
    regform.lname.value = '';
    regform.email.value = '';
    regform.password.value = '';
});*/

//Saving questions
/*document.getElementById('messagebtn').onclick = function(){message(e)}
function message(e){
    e.preventDefault();
>>>>>>> 31f9a826370903deaf1bf24098852c43bec2ce50
    db.collection('Messages').add({
        Names: contactform.names.value,
        email: contactform.email.value,
        Message: contactform.message.value,
        Comments: contactform.comments.value,
<<<<<<< HEAD
    });
    contactform.reset();
}
document.getElementById('messagebtn').addEventListener('click', send);

//Saving new blogs to firestore
function post(e) {
=======
});
}*/
/*function send(e) {
    e.preventDefault;
>>>>>>> 1f851ea3b1da5d67578064bd2e472ba6e2f70158
    db.collection('Messages').add({
        Names: contactform.names.value,
        email: contactform.email.value,
        Message: contactform.message.value,
        Comments: contactform.comments.value,
    });
    contactform.reset();
}
document.getElementById('messagebtn').addEventListener('click', send);*/

//Saving new blogs to firestore
function post(e) {
    e.preventDefault();
    db.collection('Posts').add({
        Author_Names: postform.authornames.value,
        Description: postform.description.value,
        Info: postform.info.value,
        Citation: postform.citation.value,
       // Cover_Image: postform.cover.value,
    })
    postform.reset();
}
document.getElementById('postblog').addEventListener('click', post);

//Retrieving Posts
const posted = document.querySelector('.posted')
db.collection("Posts").onSnapshot(function(querySnapshot) {
    querySnapshot.docChanges().forEach(function(change) {
        if (change.type === "added") {
            posted.innerHTML += "<article class='article'><h2>" + change.doc.data().Author_Names + "</h2>  <h5>" + change.doc.data().Description + "</h5><p>" 
        + change.doc.data().Info + "</p><p>" + change.doc.data().Citation +  "</p></section>"
        }
    });
});
<<<<<<< HEAD
    //retrieving messages

=======
       
/*document.getElementById('postblog').addEventListener('click', function post(e) {
>>>>>>> 31f9a826370903deaf1bf24098852c43bec2ce50
    e.preventDefault();
    db.collection('Posts').add({
        Author_Names: postform.authornames.value,
        Description: postform.description.value,
        Info: postform.info.value,
        Citation: postform.citation.value,
       // Cover_Image: postform.cover.value,
<<<<<<< HEAD
    })
    postform.reset();
}
document.getElementById('postblog').addEventListener('click', post);

//Retrieving Posts
const posted = document.querySelector('.posted')
db.collection("Posts").onSnapshot(function(querySnapshot) {
    querySnapshot.docChanges().forEach(function(change) {
        if (change.type === "added") {
            posted.innerHTML += "<article class='article'><h2>" + change.doc.data().Author_Names + "</h2>  <h5>" + change.doc.data().Description + "</h5><p>" 
        + change.doc.data().Info + "</p><p>" + change.doc.data().Citation +  "</p></section>"
        }
    });
});
       

db.collection("Messages").onSnapshot(function(querySnapshot) {
    querySnapshot.docChanges().forEach(function(change) {
        if (change.type === "added") { messagelist.innerHTML += "<div class='list'><h3>" + change.doc.data().Names + "</h3> <p> Email:" + change.doc.data().email + "</p><p>" 
        + change.doc.data().Message + "</p><p>" + change.doc.data().Comments +  "</p></div>"
        }
    });
});
=======
    postform.reset();});
    
});*/
>>>>>>> 1f851ea3b1da5d67578064bd2e472ba6e2f70158
db.collection("Messages").onSnapshot(function(querySnapshot) {
    querySnapshot.docChanges().forEach(function(change) {
        if (change.type === "added") { messagelist.innerHTML += "<div class='list'><h3>" + change.doc.data().Names + "</h3> <p> Email:" + change.doc.data().email + "</p><p>" 
        + change.doc.data().Message + "</p><p>" + change.doc.data().Comments +  "</p></div>"
        }
    });
});

<<<<<<< HEAD
/*document.getElementById('postblog').addEventListener('click', function post(e) {
    e.preventDefault();
    db.collection('Posts').add({
        Author_Names: postform.authornames.value,
        Description: postform.description.value,
        Info: postform.info.value,
        Citation: postform.citation.value,
       // Cover_Image: postform.cover.value,
    })
    postform.reset();
}
document.getElementById('postblog').addEventListener('click', post);

//Retrieving Posts
const posted = document.querySelector('.posted')
db.collection("Posts").onSnapshot(function(querySnapshot) {
    querySnapshot.docChanges().forEach(function(change) {
        if (change.type === "added") {
            posted.innerHTML += "<article class='article'><h2>" + change.doc.data().Author_Names + "</h2>  <h5>" + change.doc.data().Description + "</h5><p>" 
        + change.doc.data().Info + "</p><p>" + change.doc.data().Citation +  "</p></section>"
        }
    });
});
       

db.collection("Messages").onSnapshot(function(querySnapshot) {
    querySnapshot.docChanges().forEach(function(change) {
        if (change.type === "added") { messagelist.innerHTML += "<div class='list'><h3>" + change.doc.data().Names + "</h3> <p> Email:" + change.doc.data().email + "</p><p>" 
        + change.doc.data().Message + "</p><p>" + change.doc.data().Comments +  "</p></div>"
        }
    });
});*/
=======

/*//get messages

//get data
db.collection("Messages")
  .get()
  .then((snapshot) => {
    setupMessage(snapshot.docs);
  });

// Getting messages form the database
const messages = document.querySelector(".message-list");

// setup messages

const setupMessage = (data) => {
  let html = "";
  data.forEach((doc) => {
    const message = doc.data();
    const messageElement = `
    <span>
   <p><b>Names:</b> ${message.Names}<br>
     <b>Email:</b> ${message.email}<br>
   <b>Country:</b> ${message.Message}<br>
   <b>Message:</b> ${message.Comments}
   </p>
    </span>
    
    `;
    html += messageElement;
  });
  messages.innerHTML = html;
};*/




/*//retrieve message
function retrievemessage(doc){
    let li = document.createElement('li');
    let Names = document.createElement('span');
    let Message = document.createElement('span');
    let Comments = document.createElement('span');
    let Email = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    Names.textContent = doc.data().Names;
    Message.textContent = doc.data().Message;
    Comments.textContent = doc.data().Comments;
    Email.textContent = doc.data().email;

    li.appendChild(Names);
    li.appendChild(Message);
    li.appendChild(Comments);
    li.appendChild(email);

    messageList.appendChild(li);
}

// getting data
db.collection('Messages').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
    retrievemessage(doc)
    }) 
})*/
>>>>>>> 31f9a826370903deaf1bf24098852c43bec2ce50
>>>>>>> 1f851ea3b1da5d67578064bd2e472ba6e2f70158
