const BASE_URL = 'https://gorest.co.in/public-api/';

const headers = {
    'Authorization': '8b2dae3d3b359a094dfd0e806af718b6b2a9f1ac334f9acc5936c5de790692b4',
    'Content-Type': 'application/json'
};

const contentDiv = document.querySelector('#content');
const usersLink = document.querySelector('#users-link');
const postsLink = document.querySelector('#posts-link');


usersLink.addEventListener('click', mostrarUsuario);
postsLink.addEventListener('click', mostrarPosts);


function mostrarUsuario(event) {
    event.preventDefault();
    fetch(BASE_URL + 'users', { headers })
        .then(response => response.json())
        .then(users => {
            
            contentDiv.innerHTML = '';
            for (let user of users.data) {
                const userDiv = document.createElement('div');
                userDiv.innerHTML = `<h2>${user.name}</h2><p>Email: ${user.email}</p>`;
                contentDiv.appendChild(userDiv);
            }
        });
}

function mostrarPosts(event) {
    event.preventDefault();
    fetch(BASE_URL + 'posts', { headers })
        .then(response => response.json())
        .then(posts => {
            contentDiv.innerHTML = '';
            for (let post of posts.data) {
                const postDiv = document.createElement('div');
                postDiv.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
                contentDiv.appendChild(postDiv);
            }
        });
}



const FormBuscadorUsuario = document.querySelector('#formUsuarios');

FormBuscadorUsuario.addEventListener('submit', buscarUsuarios);

function buscarUsuarios(event) {
    event.preventDefault();
    const searchInput = document.querySelector('#user-search-input').value;
    fetch(BASE_URL + `users?name=${searchInput}`, { headers })
        .then(response => response.json())
        .then(users => {
            contentDiv.innerHTML = '';
            for (let user of users.data) {
                const userDiv = document.createElement('div');
                userDiv.innerHTML = `<h2>${user.name}</h2><p>Email: ${user.email}</p>`;
                contentDiv.appendChild(userDiv);
            }
        });
}
