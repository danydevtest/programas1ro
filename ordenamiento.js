//ordenar datos
const nombres=["Luis","Daniel","Federico","Alberto","Jesús"];
function ordenamiento(){
    nombres.sort();
    console.log(nombres);
}
console.log(ordenamiento());

const numeros=[34,23,43,12,13,5,24];
function comparar(a,b){
    return b-a
}
function ordenar(){
    const orden=numeros.sort(comparar);
    console.log(orden);
}
console.log(ordenar());