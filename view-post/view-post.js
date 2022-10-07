//import
import { getPost } from '../fetch-utils.js';
import '/auth/user.js';

// get dom
const postDiv = document.getElementById('post');
const postH2 = postDiv.querySelector('h2');
const postP = postDiv.querySelector('p');
const errorDisplay = document.getElementById('error-display');

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
    postH2.textContent = post.title;
    postP.textContent = post.content;
}
