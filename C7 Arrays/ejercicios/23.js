function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
  // Tu código:
  arr = new Array()
  for (let i=0; i<10; i++) {
    arr.push(num+=2)
    if (arr[i] == i) {
      return "Se interrumpió la ejecución"

    }
    //(arr.push((num+=2).value) == i)? "Se interrumpió la ejecución": arr.push(num+=2)
  }
  console.log(arr)
  return arr 
}
console.log(breakStatement(0))
module.exports = breakStatement;
