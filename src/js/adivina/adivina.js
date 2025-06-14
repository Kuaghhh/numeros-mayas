import { decimalAMaya } from "../convertidor/covertidor.js";
import { iniciarContador } from "../contador/contador.js";


let numero = null;
let segundos = 0;
let intervalo = null;

function iniciarJuego() {
    clearInterval(intervalo);
    segundos = 0;
    numero = Math.floor(Math.random() * 100);
    let maya = decimalAMaya(numero);
    document.getElementById("num1").innerHTML = "";
    maya.forEach(nivel => document.getElementById("num1").innerHTML += nivel + "<br><br>");
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
    if (parseInt(respuesta) === numero) {
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

    