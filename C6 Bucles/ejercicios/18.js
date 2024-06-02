function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let c = 1
  for ( i = a ; i <= b; i++ ) {
    /* Excluyo la multiplicacion por cero
    if ( i === 0 ) continue
    else console.log( `${c}x${i} => ${c *= i}` )
    */
    console.log( `${c}x${i} => ${c *= i}` )   
  }
  return Math.abs(c)
}
console.log(productoEntreNúmeros(-1,4))
module.exports = productoEntreNúmeros;