function contadorRegresivo() {
    const fechaObjetivo = new Date('2025-09-09 23:59:59').getTime();
    const ahora = new Date().getTime();
    const diferencia = fechaObjetivo - ahora;

    if (diferencia > 0) {
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        // Actualizar los elementos del HTML
        document.querySelector('.time-unit:nth-child(1) .number').textContent = dias.toString().padStart(2, '0');
        document.querySelector('.time-unit:nth-child(2) .number').textContent = horas.toString().padStart(2, '0');
        document.querySelector('.time-unit:nth-child(3) .number').textContent = minutos.toString().padStart(2, '0');
        document.querySelector('.time-unit:nth-child(4) .number').textContent = segundos.toString().padStart(2, '0');
    } else {
        // Cuando se acabe la oferta
        document.querySelector('.timer-label').textContent = 'Oferta finalizada';
    }
}

// Ejecutar inmediatamente y cada segundo
contadorRegresivo();
setInterval(contadorRegresivo, 1000);