function esIgualYNegativo(a, b) {
  // La función recibe dos argumentos "a" y "b" que son números.
  // Determina si son iguales y son ambos negativos.
  // De ser así, retorna true, de lo contrario, retorna false.
  // Tu código:
  return (a === b && Math.sign(a) === -1 && Math.sign(b) === -1);
}
console.log(esIgualYNegativo(-4,-4))
module.exports = esIgualYNegativo;
