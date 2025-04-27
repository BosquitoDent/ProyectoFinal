// Seleccionamos los elementos
const mainButton = document.querySelector('button.main-button');
const mainText = document.querySelector('.main-text');
const mainMenu = document.querySelector('ul.main-menu');
const contenido = document.getElementById('contenido');
const buttonImg = document.querySelectorAll('.button--img');
const cursor = document.getElementById('cursor');

// Ocultamos todo al iniciar
mainText.style.display = 'none';
mainMenu.style.display = 'none';
contenido.style.display = 'none';

// Array de textos para cada artista
const textos = [

    "YSY A, nacido como Alejo Nahuel Acosta, es una de las mentes más creativas del movimiento urbano argentino. Fundador del Quinto Escalón a los 13 años, fue clave en el desarrollo del freestyle en Buenos Aires. Su carrera musical está marcada por la innovación constante, con álbumes como 'Antezana 247' y 'YSYSMO', donde mezcla trap, rock y reguetón con letras crudas y filosóficas. Con un enfoque independiente y una visión artística única, YSY A se convirtió en un referente para toda una generación.",

    "DUKI, cuyo nombre real es Mauro Ezequiel Lombardo, es uno de los pilares del trap argentino. Comenzó destacando en las batallas de freestyle del Quinto Escalón, donde su estilo agresivo y su flow innovador lo convirtieron en una leyenda del underground. Su transición a la música fue explosiva, con hits como 'She Don’t Give a Fo' y 'Hello Cotto'. Fundador del colectivo Modo Diablo, Duki no solo cambió la escena urbana argentina, sino que llevó su sonido a nivel internacional, llenando estadios y colaborando con artistas de todo el mundo.",

    "Neo Pistea, cuyo nombre real es Sebastián Chinellato, es otro de los protagonistas del nacimiento del trap argentino. Comenzó su carrera como productor y artista del under, pero saltó a la fama con el colectivo Modo Diablo junto a Duki y YSY A. Su voz grave y sus beats oscuros lo hicieron destacar con temas como 'Tumbando el Club Remix' y 'Trap N’ Export'. Neo combina estética, actitud y visión musical, dejando una huella única en la escena urbana."
];

buttonImg.forEach((img, index) => {
    img.addEventListener('click', () => {

        if (contenido.style.display !== 'none') {
            contenido.style.opacity = 0;

            setTimeout(() => {
                contenido.textContent = textos[index];
                contenido.style.opacity = 1;
            }, 300);
        }
    });
});

// Esto está hecho con IA necesitaba hacer que al pulsar el botón principal se ocultara el texto y se mostrara el menú, mi forma de preguntar a la IA fue: quiero que al pulsar un button se despliegue un menú con una transición suave y al volverlo a pulsar desaparezca con otra transición igual. Sabía como hacer que se desplegase y desapareciese pero no conseguía hacer ninguna transición para eso.

// Alternar visibilidad al pulsar el botón principal
if (document.startViewTransition) {
    mainButton.addEventListener('click', () => {
        document.startViewTransition(() => {
            toggle(mainText, 'flex');
            toggle(mainMenu, 'grid');
            toggle(contenido, 'block');
        });
    });
} else {
    mainButton.addEventListener('click', () => {
        toggle(mainText, 'flex');
        toggle(mainMenu, 'grid');
        toggle(contenido, 'block');
    });
}

// Función auxiliar para alternar display
function toggle(elemento, tipo) {
    elemento.style.display = elemento.style.display === 'none' ? tipo : 'none';
}

// Para hacer que el cursor siga al ratón

document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

