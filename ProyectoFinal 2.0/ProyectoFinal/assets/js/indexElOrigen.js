

const eventos = document.querySelectorAll('section');
const mensaje = document.getElementById('mensaje');
const boton = document.getElementById('boton-volver');


eventos.forEach(evento => {
  evento.addEventListener('click', () => {
    // Quitar color resaltado de todos los h2
    eventos.forEach(e => e.querySelector('h2').classList.remove('highlighted'));
    // Resaltar solo el h2 del evento clicado
    const titulo = evento.querySelector('h2');
    titulo.classList.add('highlighted');
    // Mostrar un mensaje (hacemos que aparezca durante 2 segundos)
    mensaje.style.display = 'block';
    setTimeout(() => {
      mensaje.style.display = 'none';
    }, 2000);
  });
});


boton.addEventListener('click', function() {
  window.location.href = 'index.html';
});