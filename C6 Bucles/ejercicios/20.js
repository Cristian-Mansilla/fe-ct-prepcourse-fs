function sumarHastaNConBreak(n) {
   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:
   count=0
   for ( let i=0; i<=n; i++ ) {
      if ( count>100 ) break;
      else count+=i
   }
   return count
}
console.log(sumarHastaNConBreak(14))
module.exports = sumarHastaNConBreak;
