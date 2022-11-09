/*Hacer una función flecha llamada keys, que devolverá un array con las keys o nombre de propiedades del objeto que le pasemos como parámetro. No se puede usar Object.keys para ello. Debéis usar algún tipo de bucle para ello. 

Subir el ejercicio a vuestro espacio en github y poner enlace para poder acceder a él en el texto en línea.

Ejemplos de funcionamiento:

const miObjeto = {
     nombre: "Miguel",
     lugar: 'En un lugar de la Mancha',
     nombreCompleto: function () {
             return 'Miguel de Cervantes Saavedra';
     }
};
const propiedades = keys(miObjeto);
console.log(propiedades); // deberá mostrar el array: ["nombre", "lugar"];
*/

const miObjeto = 
{
    nombre: "Miguel",
    lugar: 'En un lugar de la Mancha',
    procedencia:"Rumania",
    nombreCompleto: function () 
    {
            return 'Miguel de Cervantes Saavedra';
    }

}

const keys = obj => 
{
    let result = [];

        for (let key in obj) 
        {
            if(typeof (obj[key])!=`function`)
            {
            result.push(key);
            }
        }
    return result;
}

const propiedades = keys(miObjeto);
console.log(propiedades);