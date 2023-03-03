const usuarioURL = 'https://jsonplaceholder.typicode.com/users';

fetch(usuarioURL)
    .then(response => response.json())// Convierto la respuesta a un objeto JSON
    .then(usuarios => {// Cuando la promesa se resuelva, obtenemos el listado de usuarios
        const contenedorUsuarios = document.getElementById('contenedorTareas');
        usuarios.forEach(usuario => {// recorro los usuarios 
            const usuarioDiv = document.createElement('div');
            const nombreUsuario = document.createElement('h3');
            nombreUsuario.innerText = usuario.name;// Asignamos el nombre del usuario al  h3
            const nombreUsuarioId = document.createElement('p');
            nombreUsuarioId.innerText = usuario.username;
            const sitioWebUsuario = document.createElement('p');
            sitioWebUsuario.innerHTML = `<a href="${usuario.website}">${usuario.website}</a>`;// pongo la website del usuario al elemento p y creo un enlace 
            const botonTareas = document.createElement('button');
            botonTareas.innerText = 'Ver tareas';
            botonTareas.addEventListener('click', () => {
                mostrarTareas(usuario.id);
            });
            usuarioDiv.appendChild(nombreUsuario); //Agrego el nombre del usuario al elemento div del usuario
            usuarioDiv.appendChild(nombreUsuarioId);
            usuarioDiv.appendChild(sitioWebUsuario);
            usuarioDiv.appendChild(botonTareas);
            contenedorUsuarios.appendChild(usuarioDiv);
        });
    });



 function mostrarTareas(IdUsuario)
    {

    }