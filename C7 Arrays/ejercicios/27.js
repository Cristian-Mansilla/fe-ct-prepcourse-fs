function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
  let palabrasConcat = ""
  for (let string of palabras) {
    palabrasConcat = palabrasConcat.concat(" ",string)
  }
  return palabrasConcat.trim()
}
console.log(dePalabrasAFrase(["Hola","Mundo","Comenzamos","Una"]))
module.exports = dePalabrasAFrase;
