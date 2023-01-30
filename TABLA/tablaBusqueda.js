const tabla = document.getElementById("gridDatos");

const buscar = document.createElement("input");

buscar.setAttribute("placeholder","introduce tu busqueda: ")
buscar.setAttribute("type","text");
tabla.parentElement.prepend(buscar);
document.body.prepend(buscar);
buscar.addEventListener("input", evento =>{



    for(let fila of tabla.rows)
    {
        let cont=fila.textContent;
        let ocultar= fila.hidden=true;
        if(cont.includes(buscar.value))
        {
            fila.hidden=false;
        }else ocultar;
    }

});
