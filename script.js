function calcularVolumen() {
    // Obtener valores del usuario
    let diametro = parseFloat(document.getElementById("diametro").value);
    let altura = parseFloat(document.getElementById("altura").value);

    // Validar que los valores sean correctos
    if (isNaN(diametro) || isNaN(altura) || diametro <= 0 || altura <= 0) {
        document.getElementById("resultado").innerHTML = "<p style='color:red;'>Por favor ingresa valores válidos.</p>";
        return;
    }

    // Calcular el volumen en metros cúbicos
    let radio = diametro / 2;
    let volumenMetrosCubicos = Math.PI * Math.pow(radio, 2) * altura;

    // Convertir a litros (1 metro cúbico = 1000 litros)
    let volumenLitros = volumenMetrosCubicos * 1000;

    // Mostrar resultados
    document.getElementById("resultado").innerHTML = `
        <p>📏 Volumen: <strong>${volumenMetrosCubicos.toFixed(2)}</strong> m³</p>
        <p>💧 Equivalente: <strong>${volumenLitros.toFixed(2)}</strong> litros</p>
    `;
}
