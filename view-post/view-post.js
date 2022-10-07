//import
import { getPost } from '../fetch-utils.js';
import '/auth/user.js';

// get dom
const postDiv = document.getElementById('post');

// state
let post = null;
let error = null;

// events
window.addEventListener('load', async () => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');

    const response = await getPost(id);
    error = response.error;

    if (error) {
        console.error(error);
        displayError();
    } else {
        post = response.data;
        displayPost();
    }
});

//display

function displayError() {
    errorDisplay.textContent = error.message;
}

function displayPost() {
    console.log(post);
}
