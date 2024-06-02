function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  let acum = 1
  for (element of arguments) {
    acum*=element
  }
  return arguments.length == 0? 0 : acum
}
console.log(multiplicarArgumentos(3,4,6))
module.exports = multiplicarArgumentos; 
