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

  document.querySelector('main').scrollIntoView({ behavior: 'smooth' });
  setTimeout(animarDesdeBoton, 600);
});

const botones = document.querySelectorAll('.favorito-btn');




