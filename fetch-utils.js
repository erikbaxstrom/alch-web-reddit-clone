const SUPABASE_URL = 'https://wwoopbpztkisrccextjq.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3b29wYnB6dGtpc3JjY2V4dGpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjUwODM1NTQsImV4cCI6MTk4MDY1OTU1NH0.PgB0ad5JUavTemEN7qL5BfTw-OospOLj4bE133HEnts';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Auth related functions */

export function getUser() {
    return client.auth.user();
}

export async function signUpUser(email, password) {
    return await client.auth.signUp({
        email,
        password,
    });
}

export async function signInUser(email, password) {
    return await client.auth.signIn({
        email,
        password,
    });
}

export async function signOutUser() {
    return await client.auth.signOut();
}

/* Data functions */

export async function addNewPost(newPost) {
    const response = client.from('posts').insert(newPost).single();
    return await response;
}

export async function getPosts() {
    return 'yup, i gottem.';
}
