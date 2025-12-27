// CONFIGURACIÓN DE LA FECHA (4 de Enero 2026)
const weddingDate = new Date("Jan 18, 2026 15:30:00").getTime();

const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "¡ES HOY!";
    }
}, 1000);

// --- BORRA EL BLOQUE ANTERIOR DEL RSVP Y PEGA ESTE ---
document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Detiene el refresco de la página
    
    // 1. Capturamos los datos
    const nombre = document.getElementById('guestName').value;
    const asistencia = document.getElementById('attendance').value;
    
    // 2. Configura el teléfono
    const telefono = "528186694938"; 
    
    // 3. Creamos el mensaje dinámico
    const textoAsistencia = (asistencia === "si") ? "¡Confirmo mi asistencia con gusto! ✅" : "Lo siento, no podré asistir. ❌";
    const mensaje = `Hola, soy ${nombre}. ${textoAsistencia}`;
    
    // 4. Creamos la URL correctamente (sin etiquetas HTML aquí)
    const url = "https://api.whatsapp.com/send?phone=" + telefono + "&text=" + encodeURIComponent(mensaje);
    
    // 5. Abrimos WhatsApp
    window.open(url, '_blank');
});
