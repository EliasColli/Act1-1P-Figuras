// Función para calcular el área y perímetro de un rectángulo
function calcularRectangulo() {
    let base = parseFloat(document.getElementById("rectBase").value);
    let altura = parseFloat(document.getElementById("rectAltura").value);

    if (isNaN(base) || isNaN(altura)) {
        alert("Por favor ingresa valores válidos para el rectángulo.");
        return;
    }

    let perimetro = 2 * (base + altura);
    let area = base * altura;

    // Redondear a 2 decimales
    perimetro = perimetro.toFixed(2);
    area = area.toFixed(2);

    document.getElementById("rectanguloResultado").innerHTML = 
        `<div class="resultado">Perímetro: ${perimetro} <br> Área: ${area}</div>`;
}

// Función para calcular el área y perímetro de un círculo
function calcularCirculo() {
    let radio = parseFloat(document.getElementById("cirRadio").value);

    if (isNaN(radio)) {
        alert("Por favor ingresa un valor válido para el radio del círculo.");
        return;
    }

    let perimetro = 2 * Math.PI * radio;
    let area = Math.PI * Math.pow(radio, 2);

    // Redondear a 2 decimales
    perimetro = perimetro.toFixed(2);
    area = area.toFixed(2);

    document.getElementById("circuloResultado").innerHTML = 
        `<div class="resultado">Perímetro: ${perimetro} <br> Área: ${area}</div>`;
}

// Función para calcular el área y perímetro de un cuadrado
function calcularCuadrado() {
    let lado = parseFloat(document.getElementById("cuadLado").value);

    if (isNaN(lado)) {
        alert("Por favor ingresa un valor válido para el lado del cuadrado.");
        return;
    }

    let perimetro = 4 * lado;
    let area = lado * lado;

    // Redondear a 2 decimales
    perimetro = perimetro.toFixed(2);
    area = area.toFixed(2);

    document.getElementById("cuadradoResultado").innerHTML = 
        `<div class="resultado">Perímetro: ${perimetro} <br> Área: ${area}</div>`;
}

// Función para calcular el área y perímetro de un triángulo equilátero
function calcularTriangulo() {
    let base = parseFloat(document.getElementById("triBase").value);
    let altura = parseFloat(document.getElementById("triAltura").value);
    let lado = parseFloat(document.getElementById("triLado").value);

    if (isNaN(base) || isNaN(altura) || isNaN(lado)) {
        alert("Por favor ingresa valores válidos para el triángulo.");
        return;
    }

    let perimetro = 3 * lado;
    let area = (base * altura) / 2;

    // Redondear a 2 decimales
    perimetro = perimetro.toFixed(2);
    area = area.toFixed(2);

    document.getElementById("trianguloResultado").innerHTML = 
        `<div class="resultado">Perímetro: ${perimetro} <br> Área: ${area}</div>`;
}
