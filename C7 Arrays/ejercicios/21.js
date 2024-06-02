function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  mesesSolicitados = new Array()
  for (element of array) {
    if (element.toLowerCase()==="enero" || element.toLowerCase()==="marzo" || element.toLowerCase()==="noviembre") {
      mesesSolicitados.push(element)
    }
  }
  return mesesSolicitados.length===3 ? mesesSolicitados:"No se encontraron los meses pedidos"
}
console.log(mesesDelAño([
  "Julio", "Abril", "Diciembre", "Febrero", "Junio", "Agosto",
 "Noviembre", "Marzo", "Mayo", "Septiembre", "Octubre"
]))
module.exports = mesesDelAño;
