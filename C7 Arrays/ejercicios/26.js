function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  for (let elem of secuencia) {
    if (n%elem==0 && elem!=1) return elem
  }
}
console.log(encontrarPrimerMultiploDeN(7,[3,6,14,2,23,67]))
module.exports = encontrarPrimerMultiploDeN;