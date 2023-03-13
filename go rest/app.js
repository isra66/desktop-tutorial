const BASE_URL = 'https://gorest.co.in/public-api/';

const headers = {
    'Authorization': '8b2dae3d3b359a094dfd0e806af718b6b2a9f1ac334f9acc5936c5de790692b4',
    'Content-Type': 'application/json'
};

const contentDiv = document.querySelector('#content');
const usersLink = document.querySelector('#users-link');
const postsLink = document.querySelector('#posts-link');




function mostrarUsuario() {
  
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

function mostrarPosts() {
    
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



usersLink.addEventListener('click',  (event) => {

    event.preventDefault();
    mostrarUsuario();


});



postsLink.addEventListener('click', (event) => {

    event.preventDefault();
    mostrarPosts();


});


function buscarUsuarios() {
  
    const buscador = document.querySelector('#user-search-input').value;
    fetch(BASE_URL + `users?name=${buscador}`, { headers })
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




const FormBuscadorUsuario = document.querySelector('#formUsuarios');

FormBuscadorUsuario.addEventListener('submit', (event=>{

    event.preventDefault();
    buscarUsuarios();




}));

