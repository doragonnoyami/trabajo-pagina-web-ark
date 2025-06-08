function enviarVoto() {
    const nombre = document.getElementById("criatura").value;

    if (nombre.trim() === "") {
      alert("Por favor, ingresá el nombre de una criatura.");
    }    
    else {
      alert("¡Gracias por tu voto por: " + nombre + "!");
      
      // Oculta el bloque centrado del formulario
      document.getElementById("bloqueVotacion").classList.add("oculto");

      // Muestra el mensaje de confirmación
      document.getElementById("mensaje").style.display = "block";
    }
  }