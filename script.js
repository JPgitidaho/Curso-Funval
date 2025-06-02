gsap.registerPlugin(ScrollTrigger);
const cards = document.querySelectorAll('.card');

const explorarBtn = document.getElementById('explorar-btn');

// Ocultar tarjetas al inicio
gsap.set(cards, {
  opacity: 0,
  y: 50,
  scale: 0.8,
  rotateY: 10,
  pointerEvents: 'none'
});

function animarDesdeBoton() {
  cards.forEach((card, i) => {
    gsap.fromTo(card,
      { opacity: 0, y: 60, scale: 0.6, rotateX: 10 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        duration: 1.2,
        ease: "back.out(1.7)",
        delay: i * 0.25,
        boxShadow: "0 0 40px #a855f7, 0 0 80px #06b6d4",
        onStart: () => { card.style.pointerEvents = 'auto'; }
      }
    );
  });
}

explorarBtn.addEventListener('click', () => {
  clickSound.currentTime = 0;
  clickSound.play();
  document.querySelector('main').scrollIntoView({ behavior: 'smooth' });
  setTimeout(animarDesdeBoton, 600);
});

const botones = document.querySelectorAll('.favorito-btn');
const contenedor = document.getElementById('video-container');
const mensajeInicio = document.getElementById('mensaje-inicio');

const videosData = {
  "video-igris": `<svg xmlns="http://www.w3.org/2000/svg" class="w-64 h-64 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                 <path d="M12 2 L15 8 L21 9 L17 14 L18 21 L12 18 L6 21 L7 14 L3 9 L9 8 Z" stroke="cyan" stroke-width="2" fill="none" />
               </svg>`,
  "video-jinwoo": `<svg xmlns="http://www.w3.org/2000/svg" class="w-64 h-64 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                 <path d="M12 2 L15 8 L21 9 L17 14 L18 21 L12 18 L6 21 L7 14 L3 9 L9 8 Z" stroke="cyan" stroke-width="2" fill="none" />
               </svg>`,
  "video-rey": `<svg xmlns="http://www.w3.org/2000/svg" class="w-64 h-64 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                 <path d="M12 2 L15 8 L21 9 L17 14 L18 21 L12 18 L6 21 L7 14 L3 9 L9 8 Z" stroke="cyan" stroke-width="2" fill="none" />
               </svg>`,
  "video-portal": `<svg xmlns="http://www.w3.org/2000/svg" class="w-64 h-64 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                     <rect x="4" y="4" width="16" height="16" stroke="cyan" stroke-width="2" />
                   </svg>`
};


botones.forEach(btn => {
  btn.addEventListener('click', () => {
    // Cambiar contenido del contenedor
    contenedor.innerHTML = videosData[btn.dataset.video] || "<p>Video o SVG no disponible</p>";

    // Mostrar el contenedor con animación fade-in
    contenedor.classList.remove('fade-in-scale');
    void contenedor.offsetWidth; // trigger reflow para reiniciar animación
    contenedor.classList.add('fade-in-scale');

    // Ocultar mensaje de inicio
    mensajeInicio.style.display = 'none';

    // Actualizar estilos botones
    botones.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});
