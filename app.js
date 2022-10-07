/* Imports */
// this will check if we have a user and set signout link if it exists
import './auth/user.js';
import { getPosts } from '/fetch-utils.js';
import { renderPost } from './render-utils.js';
/* Get DOM Elements */
const cards = document.getElementById('cards');
const errorDisplay = document.getElementById('error-display');

/* State */
let error = null;
let posts = [];

/* Events */
window.addEventListener('load', async () => {
    //get posts
    const response = await getPosts();
    error = response.error;
    if (error) {
        displayError();
    } else {
        posts = response.data;
        displayPosts();
    }
});

/* Display Functions */
function displayError() {
    console.error(error);
    errorDisplay.textContent = error.message;
}

function displayPosts() {
    cards.textContent = '';
    for (let post of posts) {
        const postEl = renderPost(post);
        cards.append(postEl);
    }
}

// content: 'asdf';
// created_at: '2022-10-06T22:20:43.514843+00:00';
// id: 1;
// title: 'asdf';
// user_id: 'd7b6b579-2ae5-4c2e-9a09-0d0daaa9224a';
