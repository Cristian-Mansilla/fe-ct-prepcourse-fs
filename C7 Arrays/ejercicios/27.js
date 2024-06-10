function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
  let palabrasConcat = ""
  for (string of palabras) {
    palabrasConcat = ''.concat(palabras)
  }
  return palabrasConcat
}
console.log(dePalabrasAFrase(["Hola","Mundo","Comenzamos","Una"]))
module.exports = dePalabrasAFrase;
