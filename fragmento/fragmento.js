import {posts} from './posts.js';

console.log(posts);



/* queremos hacer esto:
<article>
    <h3>titulo</h3>
    <p>contenido ... </p>
</article>
*/
// Primero lo hacemos con createElement

for(let post of posts)
{
    
    let contenedor = document.getElementById('contenedor');
    let fragmento = document.createDocumentFragment();
    let entrada = document.createElement('article');
    let titulo = document.createElement('h3');
    let contenido = document.createElement('p');
  
    
titulo.append(post.title);
contenido.append(post.body);
entrada.append(titulo,contenido);
fragmento.append(entrada); // lo añado al fragmento

}

// El segundo post lo  insertamos de otra forma

let plantilla = `
<article>
<h3>${posts[1].title}</h3>
<p>${posts[1].title}</p>
</article>`;
contenedor.innerHTML += plantilla;


for (let i=0;i<posts.length;i++)
{


    
titulo.append(posts[i].title);
espacio.append(posts[i].title);
espacio.append(posts[i].body);
contenido.append(posts[i].body);
entrada.append(titulo,contenido);
contenedor.append(entrada); 
}

for(let i=0;i<posts.length;i++)
{
    
let plantilla = `
<article>
<h3>${posts[i].title}</h3>
<p>${posts[i].body}</p>
</article><br>`;
contenedor.innerHTML += plantilla;
}