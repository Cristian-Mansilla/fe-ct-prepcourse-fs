function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  return array.map((element, index) => element*index)
}
console.log(multiplicarElementosPorIndice([1, 2, 3, 4, 5]))
module.exports = multiplicarElementosPorIndice;
