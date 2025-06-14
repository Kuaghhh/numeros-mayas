export function decimalAMaya(n) {
    if (n === 0) {
        return ["<img src='../src/img/cero.png' alt='0'> width='120' height='70'"];
    }
    let niveles = [];
    while (n > 0) {
        let resto = n % 20;
        n = Math.floor(n / 20);
        if (resto === 0) {
            niveles.push("<img src='../src/img/cero.png' alt='0' width='120' height='70' >");
        } else {
            let barras = "<span class='maya-barra'></span><span style='display:block; height:4px;'></span>".repeat(Math.floor(resto / 5));
            let puntos = "<span class='maya-punto'></span>".repeat(resto % 5);
            niveles.push(puntos + "<br>" + barras);
        }
    }

    
    return niveles.reverse(); 
}