const contactform = document.querySelector("#contactform");
const blogform = document.querySelector('#postform');
const blogsList = document.querySelector('.blogs-list');

/*//Saving questions
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
*/
//Saving new blogs to firestore
function post(e) {
    e.preventDefault();
    db.collection('Posts').add({
        Author_Names: blogform.authornames.value,
        Description: blogform.description.value,
        Info: blogform.info.value,
        Citation: blogform.citation.value,
       // Cover_Image: blogform.cover.value,
    })
    blogform.reset();
}
document.getElementById('postblog').addEventListener('click', post);

// create element & render post
function renderPost(doc){
    let li = document.createElement('li');
    let Author_Names = document.createElement('h2');
    let Description = document.createElement('h5');
    let Info = document.createElement('p');
    let Citation = document.createElement('h5');
    let Delete = document.createElement('button');
    let update = document.createElement('button');

    li.setAttribute('data-id', doc.id);
    Author_Names.textContent = doc.data().Author_Names;
    Description.textContent = doc.data().Description;
    Info.textContent = doc.data().Info;
    Citation.textContent = doc.data().Citation;
    Delete.textContent = 'Delete';
    update.textContent = 'Update';

    li.appendChild(Author_Names);
    li.appendChild(Description);
    li.appendChild(Info);
    li.appendChild(Citation);
    li.appendChild(Delete);
    li.appendChild(update);

    blogsList.appendChild(li);

    // deleting data
    Delete.addEventListener('click', (e) => {
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('Posts').doc(id).delete();
    });
    
    /* // Updating data
 update.addEventListener('click', (e) => {
    e.stopPropagation();
    let id = e.target.parentElement.getAttribute('data-id');
    db.collection('Posts').doc(id).update();
});*/
}


// real-time listener
db.collection('Posts').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        console.log(change.doc.data());
        if(change.type == 'added'){
            renderCafe(change.doc);
        } else if (change.type == 'removed'){
            let li = blogsList.querySelector('[data-id=' + change.doc.id + ']');
            blogsList.removeChild(li);
        }
        if (change.type === "modified") {
            let li = blogsList.querySelector('[data-id=' + change.doc.id + ']');
            blogsList.updateChild(li);
        }
    });
});