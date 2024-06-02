function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  count = 0
  do {
    num += 5
    count++
  } while (count < 7) {
    num += 5
    count++
  }
  return num
}
console.log(doWhile(1))
module.exports = doWhile;