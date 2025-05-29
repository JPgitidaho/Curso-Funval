document.addEventListener('mousemove', e => {
  const x = e.clientX + 'px';
  const y = e.clientY + 'px';
  document.body.style.setProperty('--x', x);
  document.body.style.setProperty('--y', y);
});


document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show'); // así vuelve a animar cuando regresas
      }
    });
  }, {
    threshold: 0.1
  });

  sections.forEach(section => {
    observer.observe(section);
  });
});
