const regform = document.querySelector('.form');
const contactform = document.querySelector("#contactform");
const postform = document.querySelector('#postform');
const messagelist = document.querySelector(".messagelist");

//Saving questions
function send(e){
    e.preventDefault;
    db.collection('Messages').add({
        Names: contactform.names.value,
        email: contactform.email.value,
        Message: contactform.message.value,
        Comments: contactform.comments.value,
    });
    contactform.reset();
}
document.getElementById('messagebtn').addEventListener('click', send);

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
       
//retrieving messages

db.collection("Messages").onSnapshot(function(querySnapshot) {
    querySnapshot.docChanges().forEach(function(change) {
        if (change.type === "added") { messagelist.innerHTML += "<div class='list'><h3>" + change.doc.data().Names + "</h3> <p> Email:" + change.doc.data().email + "</p><p>" 
        + change.doc.data().Message + "</p><p>" + change.doc.data().Comments +  "</p></div>"
        }
    });
});


/*
db.collection("Messages").onSnapshot(function(querySnapshot) {
    querySnapshot.docChanges().forEach(function(change) {
        if (change.type === "added") { messagelist.innerHTML += "<div class='list'><h3>" + change.doc.data().Names + "</h3> <p> Email:" + change.doc.data().email + "</p><p>" 
        + change.doc.data().Message + "</p><p>" + change.doc.data().Comments +  "</p></div>"
        }
    });
});
// getting data
db.collection('Messages').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
    retrievemessage(doc)
    }) 
})
*/
