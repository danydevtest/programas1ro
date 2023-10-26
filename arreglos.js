/*let nombres = ["Dany", "José", "Luis", "Pedro"];

function recorridoNombres() {
  for (let i = 0; i < nombres.length; i++) {
    console.log("indice: ", i, ":", "Nombres: ", nombres[i]);
  }
}
console.log(recorridoNombres());*/

//programa
/*Crear un programa que contenga una función que permita calular 
el promedio de un arreglo de 10 calificaciones, mostrar la suma total
y el promedio*/
//const prompt=require("prompt-sync")({sigint:true});

let calificaciones = new Array(10);
calificaciones = [80, 90, 90, 80, 70,75,70,80,100,90];
let suma = 0;
let calcular = 0;
function promedio() {
  for (let i = 0 ; i <= calificaciones.length-1; i++) {
    suma = suma + calificaciones[i];
console.log(i+1,"-",calificaciones[i]);
  }
  //return calcular;
 
  calcular=suma/calificaciones.length;
  console.log("El promedio es: ",Math.trunc(calcular));
}
console.log(promedio());
