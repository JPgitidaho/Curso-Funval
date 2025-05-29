    document.addEventListener('mousemove', e => {
      const x = e.clientX + 'px';
      const y = e.clientY + 'px';
      document.body.style.setProperty('--x', x);
      document.body.style.setProperty('--y', y);
    });