document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username && password) {
    document.getElementById('mensajeBienvenida').innerHTML = `¡Bienvenido, ${username}!`;

    setTimeout(function() {
      // Redirige al index.html
      window.location.href = 'index.html';
    }, 3000);
  } else {
    document.getElementById('mensajeBienvenida').innerHTML = `Por favor, ingresa tu usuario y contraseña.`;
  }
});
