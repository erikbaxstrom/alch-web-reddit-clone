/* Imports */
// this will check if we have a user and set signout link if it exists
import './auth/user.js';
import { getPosts } from '/fetch-utils.js';
/* Get DOM Elements */
const cards = document.getElementById('cards');
const errorDisplay = document.getElementById('error-display');

/* State */
let error = null;
let posts = [];

/* Events */
window.addEventListener('load', async () => {
    //get posts
    posts = await getPosts();
    console.log(posts);
    // error handling (display error if exists)
    // assign posts to state
    // display posts
});

/* Display Functions */
