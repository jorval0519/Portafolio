function leer() {
    // Obtener los valores del formulario
    var nombre = document.formulario.user.value;
    var pass = document.formulario.pass.value;
    var carrera = document.formulario.carrera.value;
    var genero = document.querySelector('input[name="genero"]:checked').value;

    // Crear el contenido a mostrar
    var resultado = `
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Password:</strong> ${pass}</p>
        <p><strong>Carrera:</strong> ${carrera}</p>
        <p><strong>Genero:</strong> ${genero === "f" ? "Femenino" : "Masculino"}</p>
    `;

    // Mostrar los datos en el div
    document.getElementById("resultado").innerHTML = resultado;
}
