
const fechaNacimientoInput = document.getElementById('fecha-nacimiento');

// Función para saber la edad a partir de la fecha de nacimiento
function calcularEdad(fecha) {
  const diferencia = Date.now() - fecha.getTime();
  const edad = new Date(diferencia);
  return Math.abs(edad.getUTCFullYear() - 1970);
}

//funcion para comprobar edad
function validarFechaNacimiento() {
  const fechaNacimiento = new Date(fechaNacimientoInput.value);
  const edad = calcularEdad(fechaNacimiento);

  if (edad < 18) {
    fechaNacimientoInput.setCustomValidity('Debes tener al menos 18 años');
  } else if (edad > 120) {
    fechaNacimientoInput.setCustomValidity('La fecha de nacimiento no es válida');
  } else {
    fechaNacimientoInput.setCustomValidity('');
  }
}




// valido la fecha al neviar el formulario
formulario.addEventListener('submit', (event) => {
    validarFechaNacimiento();
    if (!fechaNacimientoInput.checkValidity()) 
    {
      event.preventDefault();
    }
  });