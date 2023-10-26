function  arreglo(){
    const datos=[10,12,34,24];
    console.log(datos);
}

//Agregar datos al array
function  arreglo1(){
    const datos=[10,12,34,24];
    datos.push(23);
    datos.unshift(9);
    console.log(datos);
}
//Eliminar valores dentro del arreglo
function  arreglo2(){
    const datos=[10,12,34,24];
    datos.pop();
    datos.shift();
    console.log(datos);
}

//Utilizar una propiedad de splice
function arre(){
    const datos=[10,12,34,24];
    //datos.splice(-2,2);
    datos.splice(4,1,25,26,27);
    console.log(datos);
}

//Eliminar con la opcion delete array
function arre2(){
    const datos=[10,12,34,24];
    delete(datos[1]);
    console.log(datos);
}

//Utilizando la función filter
function arre3(){
    const datos=[10,12,34,24,12];
    const nombres = ["Dany","José","Pedro"]
    const resultado= datos.filter(dat=>dat!==12);
    const result= nombres.filter(dat=>dat!=="Dany");
    console.log(result);
}

//utilizando map
const listaOrigin=[1,2,3,4,5,6];

const nuevaLista=listaOrigin.map(function sumarValor(elementoAc){
    return elementoAc + 10;
});

//Deestructuracion
function sumarValor(valor){
    return valor + 10;
}

const nuevalist=listaOrigin.map(sumarValor);
console.log(nuevalist);

const articulos=[
    {nombre:"Refrescos", precio:20},
    {nombre:"galletas", precio:15},
    {nombre:"Enlatados", precio:30}
]

function obtenerDatos({nombre,precio}){
    return `${nombre} ${precio}`;
}

const date=articulos.map(obtenerDatos);
console.log(date);