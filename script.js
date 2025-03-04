function calcularVolumen() {
    let diametro = parseFloat(document.getElementById("diametro").value);
    let altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(diametro) || isNaN(altura) || diametro <= 0 || altura <= 0) {
        document.getElementById("resultado").innerHTML = "⚠️ Ingresa valores válidos.";
        return;
    }

    let radio = diametro / 2;
    let volumen = Math.PI * Math.pow(radio, 2) * altura;

    document.getElementById("resultado").innerHTML = `📏 El volumen del tanque es <b>${volumen.toFixed(2)} m³</b>.`;
}

