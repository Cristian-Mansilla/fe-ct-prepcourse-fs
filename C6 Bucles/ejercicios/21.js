function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  while ( numero >= 1 ) {
    if (numero == 1) return true
    numero /= 2
    if (numero < 1) return false
    }
}
console.log(esPotenciaDeDos(9))
module.exports = esPotenciaDeDos;
