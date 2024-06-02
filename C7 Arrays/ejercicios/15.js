function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

  let numMayor = array[0]
  let indexNumMayor = 0 
  for(index=1; index<array.length; index++) {
    if (array[index] > numMayor) {
      console.log(`${index}=>${array[index]}`)
      indexNumMayor = index
      numMayor = array[index]
    }
  }
  return indexNumMayor
  //return array.indexOF(element => element )
}
console.log(encontrarIndiceMayor([1, 2, 3, 4, 5]))
module.exports = encontrarIndiceMayor;
