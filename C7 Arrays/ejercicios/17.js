function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let sum = 0
  for (element of arrayOfNums) {
    sum += element
  }
  return sum
  
}
console.log(agregarNumeros([1, 2, 3, 4, 5]))
module.exports = agregarNumeros;
