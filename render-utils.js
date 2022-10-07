export function renderPost(post) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');

    a.href = `/view-post/?id=${post.id}`;
    h2.textContent = post.title;
    p.textContent = post.content;

    a.append(h2, p);
    li.append(a);
    return li;
}
