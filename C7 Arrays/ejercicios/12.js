function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  return array.map(element => element.toLocaleUpperCase())
}

console.log(convertirStringAMayusculas(["hola","mundo"]))
module.exports = convertirStringAMayusculas;
