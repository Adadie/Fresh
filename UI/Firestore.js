const regform = document.querySelector('.form');
const contactform = document.querySelector("#contactform")
const postform = document.querySelector('.post')

// saving SignUp data
regform.addEventListener('submit', (e) => {
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
});

//Saving questions
contactform.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('Messages').add({
        Names: contactform.names.value,
        email: contactform.email.value,
        Message: contactform.message.value,
        Comments: contactform.comments.value,
    });
    form.names.value = '';
    form.email.value = '';
    form.message.value = '';
    form.comments.value = '';
});

//Saving new blogs to firestore
postform.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('Posts').add({
        Author_Names: postform.authornames.value,
        Title: postform.title.value,
        Content: postform.content.value,
        Citation: postform.citation.value,
        Cover_Image: postform.cover.value,
    });
    postform.authorname.value = '';
    postform.title.value = '';
    postform.content.value = '';
    postform.citation.value = '';
    postform.cover.value='';
});
