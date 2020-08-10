const contactform = document.querySelector("#contactform");
const messagelist = document.querySelector("#messagelist");
const messageform = document.querySelector('message-form');

//Messages

//Saving new messages to firestore
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

// create element & render message
function rendermessages(doc){
    let li = document.createElement('li');
    let Names = document.createElement('h2');
    let email = document.createElement('h5');
    let Message = document.createElement('p');
    let Comments = document.createElement('h5');
    let Delete = document.createElement('button');
    let update = document.createElement('button');

    li.setAttribute('data-id', doc.id);
    Names.textContent = doc.data().Names;
    email.textContent = doc.data().email;
    Message.textContent = doc.data().Message;
    Comments.textContent = doc.data().Comments;
    Delete.textContent = 'Delete';
    update.textContent = 'Update';

    li.appendChild(Names);
    li.appendChild(email);
    li.appendChild(Message);
    li.appendChild(Comments);
    li.appendChild(Delete);
    li.appendChild(update);

    messagelist.appendChild(li);

    // deleting data
    Delete.addEventListener('click', (e) => {
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('Posts').doc(id).delete();
    });
}


// real-time listener
db.collection('Posts').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        console.log(change.doc.data());
        if(change.type == 'added'){
            rendermessages(change.doc);
        } else if (change.type == 'removed'){
            let li = messagelist.querySelector('[data-id=' + change.doc.id + ']');
            messagelist.removeChild(li);
        }
    });
});