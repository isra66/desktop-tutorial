
const button = document.getElementById('boton');

button.addEventListener('click', ()=>{
    let xhr;
    if(window.XMLHttpRequest){ //por si es una version de explorador antigua

        xhr=  new XMLHttpRequest();
    } else xhr = new ActiveXObject("Microsoft.XMLHTTP");

    xhr.open('GET', ' https://jsonplaceholder.typicode.com/users')//el primer parametro puede ser post o get y el segundo es la url o el archivo php

    xhr.addEventListener('load',(data)=>{
        console.log(JSON.parse(data.target.response)); //mostramos la respuesta de la variable donde esta la informacion(y lo pasamos a objeto)

        const dataJSON =  JSON.parse(data.target.response);
        const list = document.getElementById('list');
        for(const userInfo of dataJSON)
        {
            const listItem = document.createElement('LI');
            listItem.textContent = `${userInfo.id} - ${userInfo.name} - ${userInfo.username} - ${userInfo.website}`
            list.appendChild(listItem);
        }

    });

    xhr.send()

  
})