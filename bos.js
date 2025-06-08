function enviarVoto() {
    const nombre = document.getElementById("boss").value;

    if (nombre.trim() === "") {
      alert("Por favor, ingresá el nombre del jefe mas dificil del juego.");
    }    
    else {
      alert("¡Gracias por votar por: " + nombre + "!");
      
      // Oculta el bloque centrado del formulario
      document.getElementById("bloqueVotacion").classList.add("oculto");

      // Muestra el mensaje de confirmación
      document.getElementById("mensaje").style.display = "block";
    }
  }