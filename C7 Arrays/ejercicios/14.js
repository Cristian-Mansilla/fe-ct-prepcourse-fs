function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  
  return mayoresA10 = array.filter(elements => elements > 10).length
  
}
console.log(contarElementosMayoresA10([3,34,15,4,10]))

module.exports = contarElementosMayoresA10;
