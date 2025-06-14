import { decimalAMaya } from "../convertidor/covertidor.js";
 

function iniciarJuego() {
    let numero = document.getElementById("pregunta").value;
    if (numero === "" || isNaN(numero) || numero < 0) {
        alert("Por favor, ingresa un número válido.");
        return;
    }
    let maya = decimalAMaya(numero);
    document.getElementById("num1").innerHTML = "";
    maya.forEach(nivel => document.getElementById("num1").innerHTML += nivel + "<br><br>");
}

document.getElementById("empezar").addEventListener("click", iniciarJuego);

