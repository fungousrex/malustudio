// DATA (solo HOME)
const data = document.getElementById("data"); // Recupera l'elemento HTML

if (data) { // Esegue solo se l'elemento esiste
    const adesso = new Date(); // Data e ora correnti

    data.textContent = new Intl.DateTimeFormat("it-IT", {
        timeZone: "Europe/Rome", // Fuso orario italiano
        dateStyle: "full"        // Formato data esteso
    }).format(adesso);
}


// OCCHIO (solo per SERVIZI)
const occhio = document.querySelector(".occhio");     // Recupera l'occhio
const pupilla = document.querySelector(".pupilla");   // Recupera la pupilla

if (occhio && pupilla) { // Esegue solo se entrambi esistono

    document.addEventListener("pointermove", (event) => { // Ascolta il movimento del puntatore

        const posizione = occhio.getBoundingClientRect(); // Posizione e dimensioni dell'occhio

        const centroX = posizione.left + posizione.width / 2; // Centro X
        const centroY = posizione.top + posizione.height / 2; // Centro Y

        const dx = event.clientX - centroX; // Distanza orizzontale dal puntatore
        const dy = event.clientY - centroY; // Distanza verticale dal puntatore

        const angolo = Math.atan2(dy, dx); // Direzione in radianti

        const x = Math.cos(angolo) * 5; // Spostamento X, massimo 5px
        const y = Math.sin(angolo) * 5; // Spostamento Y, massimo 5px

        pupilla.style.transform =
            `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`; // Muove la pupilla
    });
}
