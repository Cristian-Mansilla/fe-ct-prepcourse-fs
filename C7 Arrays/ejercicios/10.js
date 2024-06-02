function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:

  // return array.find((element, index, array) => element.length >= 5);
  
  // retorna un valor truthy
  // return array.some((string, index, array) => string.length >=5);
  
  for (let i = 0; i < array.length; i++) {
    if (array[i].length >= 5) return array[i]
  }
}
console.log(obtenerPrimerStringLargo(["hola","cristian","mundo"]))
module.exports = obtenerPrimerStringLargo;
