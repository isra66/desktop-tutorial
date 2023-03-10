const unica = (arr) => {
    let unicos = [];
    for (let i = 0; i < arr.length; i++) {
      if (!unicos.includes(arr[i])) {
        unicos.push(arr[i]);
      }
    }
    return unicos;
  }
  


const miArray = ["Perico", "Lucas", "Renata", 12, "Lucas", 6, 12, "Lucas"];
const miArraySinRepeticiones = unica(miArray);
console.log(miArraySinRepeticiones); // debe mostrar ["Perico", "Lucas", "Renata", 12, 6]