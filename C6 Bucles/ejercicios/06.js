function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  console.log(num.toString().length);
  return (Math.abs(num).toString().length == 3); 
}
console.log(tieneTresDigitos(222));
module.exports = tieneTresDigitos;
