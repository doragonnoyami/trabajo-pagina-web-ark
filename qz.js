let suma=0;
const preguntas = [
    {
      texto:"¿Cual es el nombre completo de Rockwell?",
      opciones: ["Edmund Rockwell", "Edward Rockwell", "Eliot Rockwell", "Erick Rockwell"],
      respuesta: 0
    },
    {
      texto: "¿Que criatura es conocida por su invisibilidad?",
      opciones: ["Giganotosaurus", "Rock Drake", "Megalania", "Purlovia"],
      respuesta: 1
    },
    {
      texto: "¿Quien fue la primera exploradora que descubrió los secretos de los ARKs?",
      opciones: ["Mei Yin Li", "Raia", "Helena Walker", "Diana Altaras"],
      respuesta: 2
    },
    {
        texto: "¿Quien fue el primer personaje en domar una bestia?",
        opciones: ["Isabelle", "Edmund Rockwell", "Mei Yin Li", "Santiago Camacho"],
        respuesta: 2
    },
    {
        texto: "¿Cual fue el nombre del Raptor que domo Mei Yin LI?",
        opciones: ["Shan Hai", "Wuzhui", "Onslaught", "Atenea"],
        respuesta: 1
    },
    {
        texto: "¿Que ocurrio con Rockwell al final de ARK Aberration?",
        opciones: ["Murio", "Murio al caer al vacio", "Escapo en una capsula", "Se volvio un monstruo"],
        respuesta: 3
    },
    {
        texto: "¿Quien fue el creador del diario de notas de explorador sobre la biologia de las criaturas?",
        opciones: ["Mei Yin Li", "Galius Marcellus Nerva", "Helena Walker", "John Dahkeya"],
        respuesta: 2
    },
    {
        texto: "¿Que personaje lucho en la rebelion china y termino en un arca?",
        opciones: ["Mei Yin Li", "Santiago Camacho", "Raia", "Edmund Rockwell"],
        respuesta: 0
    },
    {
        texto: "¿Cual es la criatura voladora mas rapida?",
        opciones: ["Snow Owl", "Argentavis", "Pteranodon", "Wyvern"],
        respuesta: 2
    },
    {
        texto: "¿Que personaje aparece como inteligencia artificial en Genesis?",
        opciones: ["Roger Wolf", "Santiago Camacho", "Raia", "Helena Walker"],
        respuesta: 3
    },
    {
        texto: "¿Que personaje era piloto de combate antes de llegar al ARK?",
        opciones: ["Imamu", "Diana Altaras", "Mei Yin Li", "Galius Marcellus Nerva"],
        respuesta: 1
    },
    {
        texto: "¿Quien dijo “No todos los humanos merecen un segundo intento”?",
        opciones: ["Edmund Rockwell", "Boris", "Trent", "Galius Marcellus Nerva"],
        respuesta: 3
    },
    {
        texto: "¿Quien dijo “Una y otra vez, los monstruos vienen. Parece que no tienen fin, pero sé que eso no puede ser cierto. Debo seguir luchando.”?",
        opciones: ["Muller", "Flynn Lars", "Mei Yin Li", "Diana Altaras"],
        respuesta: 2
    },
    {
        texto: "¿Quien dijo “Al fin, ha llegado el momento. Los demonios colosales han empezado a moverse. Aunque mis bestias y mi gigante blindado están heridos, he matado al último de sus secuaces. Todo depende de ellos, y depende de mí, como siempre tenía que ser.”?",
        opciones: ["Mei Yin Li", "Helena Walker", "Galius Marcellus Nerva", "John Dahkeya"],
        respuesta: 0
    },
    {
        texto: "¿Quien dijo “Si estás ahí, voz misteriosa, sigue enfocada en mí. Los refuerzos están en camino, y puedes creer que traeremos el trueno.”?",
        opciones: ["Takaya", "Alessa Bonnet", "Roger Wolf", "Diana Altaras"],
        respuesta: 3
    },
    {
        texto: "¿Quien dijo “Si todo lo que quedara fueran humanos, gallinas, abejas, bagres, algas, alfalfa, levadura y frijoles, ¿podrías decir que habrías salvado la vida en la Tierra?”?",
        opciones: ["Edmund Rockwell", "Santiago Camacho", "Mei Yin Li", "Helena Walker"],
        respuesta: 1
    },
    {
        texto: "¿Quien dijo “Los Homo Deus colapsaron… nuestra misión ahora es contener la amenaza antes de que destruya lo que queda de la Tierra.”?",
        opciones: ["Roger Wolf", "Diana Altaras", "Galius Marcellus Nerva", "Takaya"],
        respuesta: 0
    },
    {
        texto: "¿Quien dijo “No obtendrás piedad si intentas secuestrarla. Aquel que se atreva a eso no recibirá ni una pizca de misericordia.”?",
        opciones: ["Raia", "Santiago Camacho", "Mei Yin Li", "Jhon Dahkeya"],
        respuesta: 3
    },
    {
        texto: "¿Quien dijo “He jurado que protegeré a los inocentes… Permíteme ser el rugido del desierto.”?",
        opciones: ["Isabelle", "Diana Altaras", "Raia", "Helena Walker"],
        respuesta: 2
    },
    {
        texto: "¿Quien dijo “Mis hombres están inquietos. Algunos quieren volver atrás y defender nuestro hogar… carecen de visión.”?",
        opciones: ["Roger Wolf", "Santiago Camacho", "Galius Marcellus Nerva", "John Dahkeya"],
        respuesta: 2
    },
    {
        texto: "¿Quien dijo “Las bestias me siguen. Les doy orden, les doy propósito.”?",
        opciones: ["Galius Marcellus Nerva", "Mei Yin Li", "Helena Walker", "Edmund Rockwell"],
        respuesta: 1
    },
    {
        texto: "¿Quien dijo “Rockwell era mi amigo. Fue mi error confiar.”?",
        opciones: ["Helena Walker", "Diana Altaras", "Mei Yin Li", "Santiago Camacho"],
        respuesta: 0
    },
    {
        texto: "¿Quien dijo “Todo o nada: reparen los MEKs o moriremos.”?",
        opciones: ["Santiago Camacho", "Edmund Rockwell", "Galius Marcellus Nerva", "Diana Altaras"],
        respuesta: 3
    },
    {
        texto: "¿Quien dijo “Nada aquí tiene sentido, y, sin embargo, todo encaja.”?",
        opciones: ["Flynn Lars", "Muller", "Helena Walker", "Edmund Rockwell"],
        respuesta: 2
    }
  ];

  let indiceActual = 0;
  let puntaje = 0;
  
  function mostrarPregunta() {
    const pregunta = preguntas[indiceActual];
    document.getElementById("pregunta").textContent = pregunta.texto;
  
    const contenedor = document.getElementById("opciones");
    contenedor.innerHTML = "";
  
    pregunta.opciones.forEach((opcion, i) => {
      const btn = document.createElement("button");
      btn.textContent = opcion;
      btn.className = "opcion";
      btn.onclick = () => verificarRespuesta(i);
      contenedor.appendChild(btn);
    });
  
    document.getElementById("resultado").textContent = "";
  }
  
  function verificarRespuesta(indiceElegido) {
    const esCorrecta = indiceElegido === preguntas[indiceActual].respuesta;
  
    if (esCorrecta) {
      puntaje++;
    }
  
    document.getElementById("resultado").textContent = esCorrecta ? "¡Correcto!" : " Incorrecto.";
    document.getElementById("puntos").textContent = "Puntaje: " + puntaje;
  
    setTimeout(() => {
      indiceActual++;
      if (indiceActual < preguntas.length) {
        mostrarPregunta();
      } else {
        alert(" ¡Has completado el quizz!\nTu puntaje fue: " + puntaje + " de " + preguntas.length);
        document.getElementById("juego").innerHTML = "<h2> ¡Quizz completado!</h2><p>Tu puntaje fue: " + puntaje + " de " + preguntas.length + ".</p>";
      }
    }, 1000);
  }
  
  mostrarPregunta();