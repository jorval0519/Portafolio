let respuestas = [300, 50, 20, 10, 190];
let puntuaciones = [];

function evaluar() {
    const formulario = document.getElementById("formulario");
    let puntosTotales = 0;
    puntuaciones = [];

    for (let i = 0; i < respuestas.length; i++) {
        const respuestaUsuario = parseFloat(formulario.elements[`p${i + 1}`].value);
        const respuestaCorrecta = respuestas[i];

        const esCorrecta = respuestaUsuario === respuestaCorrecta;
        puntuaciones.push(esCorrecta ? 1 : 0);
        if (esCorrecta) puntosTotales++;
    }

    document.getElementById("resultado").textContent = `Obtuviste ${puntosTotales} de ${respuestas.length} puntos.`;
    generarGrafico();
}

function generarGrafico() {
    const ctx = document.getElementById('grafico').getContext('2d');

    if (window.graficoBarras) {
        window.graficoBarras.destroy();
    }

    window.graficoBarras = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['100+200', '5*10', '30-10', '20/2', '90+100'],
            datasets: [{
                label: 'Puntos por pregunta',
                data: puntuaciones,
                backgroundColor: puntuaciones.map(p => p === 1 ? 'green' : 'red')
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 1,
                    ticks: { stepSize: 1 }
                }
            }
        }
    });
}

function generarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const preguntas = ['100+200', '5*10', '30-10', '20/2', '90+100'];
    let puntosTotales = puntuaciones.reduce((a, b) => a + b, 0);

    doc.setFontSize(16);
    doc.text("Resultados del Diagnóstico de Matemáticas", 20, 20);
    doc.setFontSize(12);
    doc.text(`Puntuación total: ${puntosTotales} de ${respuestas.length}`, 20, 30);

    puntuaciones.forEach((p, i) => {
        const resultado = p === 1 ? "Correcto" : "Incorrecto";
        doc.text(`Pregunta ${i + 1} (${preguntas[i]}): ${resultado}`, 20, 40 + i * 10);
    });

    doc.save("diagnostico_matematicas.pdf");
}
