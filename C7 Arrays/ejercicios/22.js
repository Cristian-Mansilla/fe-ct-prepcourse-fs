function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  
  //tablaDelSeis = new Array()
  let tablaDelSeis = []
  for (let j=0; j<=10; j++) tablaDelSeis.push(j*6)
  return tablaDelSeis

  /*
  for (let i=0; i<=10; i++){
    tablaDelSeis[i] = i * 6;
    console.log(`6 x ${i} = ${tablaDelSeis[i]}`)
  }
  return tablaDelSeis
  */ 
}
console.log(tablaDelSeis())
module.exports = tablaDelSeis;
