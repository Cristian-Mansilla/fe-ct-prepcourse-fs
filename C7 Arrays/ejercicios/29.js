function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
 
 for (let [key, num] of numeros.entries()) {
    let actNum = numeros[key]
    let sigNum = numeros[key+1]
    console.log(`${actNum} => ${sigNum}`)
    return (sigNum.NaN)? "No hay numeros faltantes":(actNum+1 !== sigNum)?`El numero faltante es ${actNum+1}`:null
    //if (actNum+1 !== sigNum) return `El numero faltante es ${actNum+1}`
  } 
  
}
console.log(encontrarNumeroFaltante([2,3,4,5]))
module.exports = encontrarNumeroFaltante;