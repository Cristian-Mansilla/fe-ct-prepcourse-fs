function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  count = 0
  for ( let i = 1; i <= n; i++ ) {
    count += i
  }
  return count
}
console.log(sumarHastaN(8))
module.exports = sumarHastaN;
