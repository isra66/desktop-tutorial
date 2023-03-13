const listaUsuarios = document.getElementById('lista-usuarios');
const nombreUsuario = document.getElementById('nombre-usuario');
const listaPosts = document.getElementById('lista-posts');
const tituloPost = document.getElementById('titulo-post');
const contenidoPost = document.getElementById('contenido-post');
const listaComentarios = document.getElementById('lista-comentarios');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        data.forEach(usuario => {
            const li = document.createElement('li');
            const botonPosts = document.createElement('button');

            li.innerHTML = `${usuario.name} (@${usuario.username}) - ${usuario.website}`;
            botonPosts.innerHTML = 'Ver posts';
            botonPosts.addEventListener('click', () => {
                mostrarPosts(usuario.id);
            });

            li.appendChild(botonPosts);
            listaUsuarios.appendChild(li);
        });
    })
    .catch(error => console.log(error));

function mostrarPosts(idUsuario) {
    fetch(`https://jsonplaceholder.typicode.com/users/${idUsuario}/posts`)
        .then(response => response.json())
        .then(data => {
            nombreUsuario.innerHTML = `Posts de ${data[0].userId}`;
            listaUsuarios.style.display = 'none';
            nombreUsuario.style.display = 'block';
            listaPosts.style.display = 'block';

            listaPosts.innerHTML = '';
            data.forEach(post => {
                const li = document.createElement('li');
                const botonPost = document.createElement('button');

                li.innerHTML = post.title;
                botonPost.innerHTML = 'Ver post';
                botonPost.addEventListener('click', () => {

                });

                li.appendChild(botonPost);
                listaPosts.appendChild(li);
            });

            const botonUsuarios = document.createElement('button');
            botonUsuarios.innerHTML = 'Volver a usuarios';
            botonUsuarios.addEventListener('click', () => {
                nombreUsuario.style.display = 'none';
                listaPosts.style.display = 'none';
                listaUsuarios.style.display = 'block';
            });

            listaPosts.appendChild(botonUsuarios);
        })
        .catch(error => console.log(error));
}