

let nombres=["Dany","José","Luis","Pedro"];

function recorridoNombres(){
    for(let i=0;i<nombres.length;i++){
      console.log("indice: ",i,":","Nombres: ",nombres[i]);
      n=i+1;
    }
}
console.log(recorridoNombres());
