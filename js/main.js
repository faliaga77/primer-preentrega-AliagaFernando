// let nombre = "Fernando";
// let apellido = "Aliaga";
// let nombreApellido = nombre + apellido;

// let anioActual = 2023;
// let anioNacimiento = 1977;
// let edad = anioActual - anioNacimiento;


// console.log(edad);

//=========Prompt y alert=================



//Let y if---------------

// let edad = prompt("Ingrese su Edad.");

// if (edad >= 18) {
//     alert("Sos mayor de edad. Podes ingresar.");
    
// } else {
//     alert("Sos menor de edad. No podes entrar.");
// }



// Ejemplo de lef y if, else if, else-----

// let hora = prompt("ingrese la hora");

// if (hora >= 6 && hora < 12) {
//     alert("buenos dias!!");
// }

// else if (hora >= 12 && hora < 20) {
//     alert("buenas tardes!!");
// }
// else {
//     alert("buenoas noches!!");
// }


// EJEMPLO DE LET , IF , ELSE IF ELSE


// let usuario1 = "Fernando";
// let usuario2 = "Analia";
// let usuario3 = "Valen";
// let usuario4 = "Luna";

// let nombreUsuario = prompt("Ingrese su usuario");

// if (nombreUsuario == "Fernando") {
//     alert("bienvenido " + nombreUsuario);
// }
// else if (nombreUsuario == "Analia") {
//     alert("Bienvenida " + nombreUsuario);
// }
// else if (nombreUsuario == "Valentin") {
//     alert("ESTUDIA PENDEJO!!!!!")
// }
// else if (nombreUsuario == "Luna") {
//     alert("Te Quiero Mucho Bruja");
// }
// else {
//     alert("Nombre de usuario incorrecto");
// }

// 

// let usuario1 = "Fernando";
// let usuario2 = "Analia";

// let nombreUsuario = prompt("Ingrese su nombre de Usuario");
//  if (nombreUsuario == usuario1 || nombreUsuario == usuario2 ) {
//     alert ("Bienvenido/a " + nombreUsuario);
//  }
//  else { alert("Nombre de usuario incorrecto.");}

// TABLAS EJEMPLO

// let ingreseNumero = parseInt(prompt("Ingrese Numero"));
// for (let i= 1; i <=10; i++) {
//     let resultado = ingreseNumero * i ;
//     alert(ingreseNumero +" x " + i +" = "+ resultado);
// }
// console.log (ingreseNumero);

// for (let i = 1; i <=50; i++){
//     let ingreseNombre = prompt("ingrese Nombre");
//     alert(" turno N° " +i+ " Nombre: " +ingreseNombre);
// }



// //////////////////FUNCIONES////////////

//=============0CALCULADORA=============000000

const sumar = (numero1,numero2)=>{
    return parseInt(numero1) + parseInt(numero2);
}

const restar = (numero1,numero2)=>{
    return parseInt(numero1) - (numero2);
}

const multiplicar = (numero1,numero2)=>{
    return parseInt(numero1) / (numero2);
}

const dividir = (numero1,numero2)=>{
    return parseInt(numero1) * (numero2);
}

alert("Indique la operacion");
let operacion = prompt("1: suma; 2: resta; 3: Multiplicar; 4: Dividir");

if (operacion == 1) {
    let numero1 = prompt("primer numero para sumar");
    let numero2 = prompt("segundo numero para sumar");
    resultado = sumar(numero1,numero2)
    alert(`El resultado es ${resultado}`);
}

else if (operacion == 2) {
    let numero1 = prompt("primer numero para restar");
    let numero2 = prompt("segundo numero para restar");
    resultado = restar(numero1,numero2)
    alert(`El resultado es ${resultado}`);
    
}

else if (operacion == 3) {
    let numero1 = prompt("primer numero para multiplicar");
    let numero2 = prompt("segundo numero para multiplicar");
    resultado = multiplicar(numero1,numero2)
    alert(`El resultado es ${resultado}`);
  
}
else if (operacion == 4) {
    let numero1 = prompt("primer numero para dividir");
    let numero2 = prompt("segundo numero para dividir");
    resultado = dividir(numero1,numero2)
    alert(`El resultado es ${resultado}`);

}
else {
    alert("No correspomde a una operacion!!");
}

// =========================================00=/














