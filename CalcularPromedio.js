//para pedir datos a través del teclado
//const prompt=require("prompt-sync")({sigint:true});

let c1,c2,c3,c4,c5,promedio;

//c1=70
c1=parseInt(prompt("Ingrese la calificación 1"));
c2=parseInt(prompt("Ingrese la calificación 2"));
c3=parseInt(prompt("Ingrese la calificación 3"));
c4=parseInt(prompt("Ingrese la calificación 4"));
c5=parseInt(prompt("Ingrese la calificación 5"));


promedio=(c1+c2+c3+c4+c5)/5;
if(promedio>=70 & promedio<80){
    console.log("Alumno regular: "+promedio);
    alert("Alumno regular: "+promedio);
}else if(promedio>=80 && promedio<90){
    console.log("Alumno bueno: "+promedio);
    alert("Alumno bueno: "+promedio); 
}else if(promedio>=90 & promedio<=100){
    console.log("Alumno excelente: "+promedio); 
    alert("Alumno excelente: "+promedio);
}else{
    console.log("Alumno deficiente: "+promedio); 
    alert("Alumno deficiente: "+promedio);
}
