function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:

  return numerosPares = array.filter(num => num % 2 == 0)
  /*
  const numerosPares = [] 
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      numerosPares.push(array[i]);
    }
  }
  return numerosPares
  */
}
console.log(filtrarNumerosPares([1,2,3,6,7,8,9]))
module.exports = filtrarNumerosPares;
