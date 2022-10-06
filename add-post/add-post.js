//import
import '/auth/user.js';
import { addNewPost } from '/fetch-utils.js';

// get dom
const addPostForm = document.getElementById('add-post-form');
const errorDisplay = document.getElementById('error-display');

// state
let error = null;

// events
addPostForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(addPostForm);

    const newPost = {
        title: formData.get('title'),
        content: formData.get('content'),
        // blah: 'blah',
    };

    const response = await addNewPost(newPost);
    // error handle
    error = response.error;
    if (error) {
        displayError();
    } else {
        location.replace('/');
    }

    //if no error redirect home
});

//display

function displayError() {
    errorDisplay.textContent = error.message;
}
