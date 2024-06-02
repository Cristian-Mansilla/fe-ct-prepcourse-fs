function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  /*
  let flag = true
  for (element of array) {
    if (array[0]!=element) flag = false;
  }
  return flag
  */
  return array.every(element => element === array[0])
}
console.log(todosIguales([1,1,3]))
module.exports = todosIguales;
