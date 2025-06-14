export function iniciarContador() {
    clearInterval(intervalo);
    segundos = 0;
    document.getElementById("contador").textContent = segundos;
    intervalo = setInterval(() => {
        segundos++;
        document.getElementById("contador").textContent = segundos;
    }, 1000);
}
