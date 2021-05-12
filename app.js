//declaracion de variables

let grupo;
let facultad = "contaduria";

//constantes 
const FACTOR_AUMENTO = 0.3;


//envia el conenido a la consola en el navegador
console.log(grupo,facultad);

//ecribir el contenido en el documento 
document.write(facultad);


let estados = ["nuevo leon","chapas"];
console.log(estados)
console.log(typeof estados)
document.write(estados);

let facultadObjeto = {
    nombre : "FACPYA",
    numAlumnos : 15000,
    estadosProcedencia: estados
};
console.log(facultadObjeto);
document.write(facultadObjeto);

//Ejemplo 
//let lenguaje = prompt("lenguaje favorito");

document.write("<h1>hola</h1>");

// ejempl if

//let facu = prompt("ingrese su facultad");

let facu = "facpya";
if (facu === "facpya"){
    console.log("materias recomendadas: admin,python")
}
else if (facu === "fime") {
    console.log("materias recomendadas: quimica,fisica")
}
else if(facu === "fod") {
    console.log("materias recomendadas: x,y")
}
else{
    console.log("materias recomedadas: historia del deporte,box")
}

switch (facu){
    case "facpya":
        console.log("facpya");
        break;
    case "fime" :
        console.log("fime");
        break;
    case "fod"
        console.log("fod");
        break;
    default:
        console.log("otra facultad");
        break;
}

for(let iteracion=1; iteracion <=100; iteracion++){
    document.write(iteracion + "<br>");
}

// while con este  codigo se debe de sumar del 1 al 100
let num = 1;
let resultado = 0;
while(num <=100){

    num++;
}
document.write("la suma es: ", resultado);

//do-whilie 
let r=0;
let n=1;
do{
    r++;
    r += n;

}while( n <= 100);
document.write("<br>La suma con do-while es",r)


// funcion como variable que calcule sumas

const sumaRango = function(numIni,numFin){
    let r = 0;
    for(let n= numIni; n <= ; n++){
        r += n;
    }
    return r;


};

const saludo = function(texto){


    document.write(<"<h1>" + texto +  "</h1>")
};

document.write("La suma con fn:  ", sumaRango(1,100) )

saludo("bienvenido");
saludo("hola");

//funcion de declaracion 
function repetir(n,valor){
    for(let i=1; i <=n; i++){
        document.write(valor);
    }

}

repetir(5,"*");
//  ejemplo de repetir con  "*" * | 5 en lugar de la palabra repetir 

// funcion de fecha
const checarMayor = function (){};

const checarMayo = () => {};



const checarMayo = (n1,n2) => {
    if (n1 > n2){

    }
    else{
        return n2;
    }
};

document.write(checarMayo(12,1));


// funcion de la flecha reducida

const saludo2 = texto => document.write("<h1>" + texto + "<h1>");
    
saludo2("funcion flecha reducida");

document.write("funcion flecha reducida");




//se puede modificar diferentes paginas  desde este apartado
let parrafos = document.getElementsByTagName("p");

console.log(parrafos);
console.log(parrafos[1].textContent);

// parrafos[0].textContent = "gripo 51":

let fechaActual  = new Date();
let hora = fechaActual.getHours();

if (hora < 12){
    parrafos[1].textContent = "buenosdias";

}
else
{
    parrafos[1].textContent = "buenas tardes";
}

let pReloj = document.getElementById("reloj");

//Con este comando te aroja la hora per necesitas refrescar constantemnete
//pReloj.textContent = fechaActual.toLocaleTimeString();


function mostrarHora(){
    let fActual = new Date();
    pReloj.textContent = fActual.toLocaleTimeString();

}
 setInterval("mostrarHora()",1000);














