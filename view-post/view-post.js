//import
import { getPost, createComment } from '../fetch-utils.js';
import '/auth/user.js';
import { renderComment } from '../render-utils.js';

// get dom
const postDiv = document.getElementById('post');
const postH2 = postDiv.querySelector('h2');
const postP = postDiv.querySelector('p');
const errorDisplay = document.getElementById('error-display');
const addCommentForm = document.getElementById('add-comment-form');
const commentList = document.getElementById('comments');

// state
let post = null;
let comments = null;
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
        comments = post.comments;
        displayPost();
        displayComments();
    }
});

addCommentForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(addCommentForm);
    const newComment = {
        comment: formData.get('comment'),
        post_id: post.id,
    };

    const response = await createComment(newComment);
});

//display

function displayError() {
    errorDisplay.textContent = error.message;
}

function displayPost() {
    postH2.textContent = post.title;
    postP.textContent = post.content;
}

function displayComments() {
    for (let comment of comments) {
        const commentEl = renderComment(comment);
        commentList.append(commentEl);
    }
}
