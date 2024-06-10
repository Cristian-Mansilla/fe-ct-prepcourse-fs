function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  let countPar = 0, countInpar = 0
  for (let element of numeros) {
    element%2==0? countPar++ : false
  }
  console.log(countPar)
  return countPar
}
console.log(contarParesConContinue([2,5,8,12,24,36,47,50]))
module.exports = contarParesConContinue;
