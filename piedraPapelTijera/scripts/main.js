let triunfos = 0;
    let perdidas = 0;

    function aleatorio(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function eleccion(jugada) {
      const opciones = ["", "Piedra 🏐", "Papel 📋", "Tijera ✂"];
      return opciones[jugada] || "Elección inválida";
    }

    function jugar(jugador) {
      const pc = aleatorio(1, 3);
      let mensaje = `<p>Tú eliges: ${eleccion(jugador)}</p>`;
      mensaje += `<p>La PC elige: ${eleccion(pc)}</p>`;

      if (jugador === pc) {
        mensaje += "<p>Resultado: ¡Empate!</p>";
      } else if (
        (jugador === 1 && pc === 3) ||
        (jugador === 2 && pc === 1) ||
        (jugador === 3 && pc === 2)
      ) {
        triunfos++;
        mensaje += "<p>Resultado: ¡Ganaste!</p>";
      } else {
        perdidas++;
        mensaje += "<p>Resultado: Perdiste.</p>";
      }

      mensaje += `<p>Triunfos: ${triunfos} | Perdidas: ${perdidas}</p>`;

      if (triunfos === 3 || perdidas === 3) {
        mensaje += `<h2>Juego terminado</h2>`;
        mensaje += `<p>Ganaste ${triunfos} veces. Perdiste ${perdidas} veces.</p>`;
        // Reinicio del juego
        triunfos = 0;
        perdidas = 0;
      }

      document.getElementById("resultado").innerHTML = mensaje;
    }