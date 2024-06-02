function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   return array[Math.round(Math.random()*(array.length-1))]
}

module.exports = obtenerElementoAleatorio;
