/*Hacer una función flecha llamada unica, que devolverá un array con elementos sin repetir. No se pueden usar objetos de tipo Set para ello. 

Subir el ejercicio a vuestro espacio en github y poner enlace para poder acceder a él en el texto en línea.

Ejemplos de funcionamiento:
*/

const miArray = ["Perico", "Lucas", "Renata", 12, "Lucas", 6, 12, "Lucas"];

const unica = (arr) => {
    return arr.filter((item, i) => 
    {
      return arr.indexOf(item) === i;
    });
  };

  

  
const miArraySinRepeticiones = unica(miArray);
console.log(miArraySinRepeticiones); // debe mostrar ["Perico", "Lucas", "Renata", 12, 6]



