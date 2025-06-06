let saldo = 0;

function ingresarDinero() {
    let montoInput = document.getElementById('monto');
    let monto = parseFloat(montoInput.value);
    
    if (monto > 0) {
        saldo += monto;
        mostrarMensaje("Depósito exitoso.");
    } else {
        mostrarMensaje("Por favor, ingrese un monto válido.");
    }

    montoInput.value = '';
    montoInput.focus();
}

function retirarDinero() {
    let montoInput = document.getElementById('monto');
    let monto = parseFloat(montoInput.value);
    
    if (monto > 0) {
        if (monto <= saldo) {
            saldo -= monto;
            mostrarMensaje("Retiro exitoso.");
        } else {
            mostrarMensaje("Saldo insuficiente.");
        }
    } else {
        mostrarMensaje("Por favor, ingrese un monto válido.");
    }

    montoInput.value = '';
    montoInput.focus();
}

function consultarSaldo() {
    mostrarMensaje("Saldo actual: $" + saldo.toFixed(2));
}

function mostrarMensaje(mensaje) {
    document.getElementById('mensaje').textContent = mensaje;
}
