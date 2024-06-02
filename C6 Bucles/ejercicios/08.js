function esPositivoOInferiorA10(a) {
   // La función recibe un número "a" por parámetro.
   // Retorna true si es positivo y menor que 10.
   // Retorna false en caso contrario.
   // Tu código:
   return (Math.sign(a) == 1 || Math.sign(a) == 0) && a < 10;
}
console.log(esPositivoOInferiorA10(10));
module.exports = esPositivoOInferiorA10;
