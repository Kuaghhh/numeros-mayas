import { decimalAMaya } from "../convertidor/covertidor.js";
import { iniciarContador } from "../contador/contador.js";

let numero1 = null;
let numero2 = null;
let segundos = 0;
let intervalo = null;


function iniciarJuego() {
    clearInterval(intervalo); 
    segundos = 0;
    numero1 = Math.floor(Math.random() * 100);
    numero2 = Math.floor(Math.random() * 100);
    let maya1 = decimalAMaya(numero1);
    let maya2 = decimalAMaya(numero2);
    document.getElementById("num1").innerHTML = "";
    document.getElementById("num2").innerHTML = "";
    maya1.forEach(nivel => document.getElementById("num1").innerHTML += nivel + "<br><br>");
    maya2.forEach(nivel => document.getElementById("num2").innerHTML += nivel + "<br><br>");
    document.getElementById("respuesta").disabled = false;
    document.getElementById("verificar").disabled = false;
    document.getElementById("mensaje").textContent = "";
    document.getElementById("mensaje").style.color = "";
    document.getElementById("respuesta").value = "";
    document.getElementById("contador").textContent = "0";
    document.getElementById("tiempoFinal").textContent = "";
    iniciarContador();
}

function verificar() {
    let respuesta = document.getElementById("respuesta").value;
    let mensaje = document.getElementById("mensaje");
    let multiplicacion = numero1 * numero2;
    if (parseInt(respuesta) === multiplicacion) {
        mensaje.textContent = "Correcto";
        mensaje.style.color = "green";
        clearInterval(intervalo); 
        document.getElementById("tiempoFinal").textContent = "Tiempo transcurrido: " + segundos + " segundos";
        document.getElementById("verificar").disabled = true;
        document.getElementById("respuesta").disabled = true;
    } else {
        mensaje.textContent = "Incorrecto";
        mensaje.style.color = "red";
    }
}



document.getElementById("empezar").addEventListener("click", iniciarJuego);
document.getElementById("verificar").addEventListener("click", verificar);
