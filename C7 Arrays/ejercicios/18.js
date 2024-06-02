function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let valorAcum = resultadosTest.reduce((acum, value) => acum += value, 0)
  return valorAcum/resultadosTest.length
}
console.log(promedioResultadosTest([1, 2, 3, 4, 5]))
module.exports = promedioResultadosTest;
