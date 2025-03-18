let duracion = 60000;
let molds = [];
let num = 20000;
let d;
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
// let currentOscillator = (currentOscillator = audioCtx.createOscillator());
// const gainNode = audioCtx.createGain();
let currentOscillator = null;
let gainNode = null;

// const A4 = 432; // Afinación base
const A4 = 216; // Afinación base
const notas = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const escalaA4_432 = [];

// Calcular frecuencias de la octava 4 (C4 a B4)
// for (let i = 0; i < notas.length; i++) {
//   const n = i - 9; // Semitonos de distancia desde A4
//   const frecuencia = A4 * Math.pow(2, n / 12);
//   escalaA4_432.push({
//     nota: `${notas[i]}4`,
//     frecuencia: parseFloat(frecuencia.toFixed(2)),
//   });
// }

escalaA4_432.push({
  nota: `432`,
  frecuencia: parseFloat(432),
});
escalaA4_432.push({
  nota: `528`,
  frecuencia: parseFloat(528),
});
let currentIndex = 0;

function reproducirNota(frecuencia) {
  // 🎚️ Si hay un oscilador activo, desvanecerlo antes de detenerlo
  if (currentOscillator) {
    // gainNode.gain.linearRampToValueAtTime(0.0001, audioCtx.currentTime + 1); // Desvanece en 0.5 seg
    currentOscillator.stop(audioCtx.currentTime);
  }

  // 🎧 Crear nuevo oscilador
  currentOscillator = audioCtx.createOscillator();
  gainNode = audioCtx.createGain();

  currentOscillator.type = "sine"; // Cambiar a 'square', 'triangle', 'sawtooth' si querés otro tono
  currentOscillator.frequency.setValueAtTime(frecuencia, audioCtx.currentTime);

  // Conectar oscilador → ganancia → salida
  currentOscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  // 🎚️ Transición suave en el volumen
  // gainNode.gain.setValueAtTime(0.9, audioCtx.currentTime);
  // gainNode.gain.linearRampToValueAtTime(1, audioCtx.currentTime + 0.5); // Suaviza entrada en 0.3 seg
  gainNode.gain.exponentialRampToValueAtTime(0.9, audioCtx.currentTime + 1);
  currentOscillator.start();

  console.log(`🎵 Reproduciendo: ${frecuencia} Hz`);
}

function iterarNotas() {
  const notaActual = escalaA4_432[currentIndex];
  reproducirNota(notaActual.frecuencia);
  console.log(
    `▶️ Nota actual: ${notaActual.nota} - ${notaActual.frecuencia} Hz`
  );

  // Avanzar al siguiente índice
  currentIndex = (currentIndex + 1) % escalaA4_432.length;
}

function init() {
  iterarNotas(); // Primera nota al cargar la página
  setInterval(iterarNotas, duracion);
}

function setup() {
  background(0, 5);
  // background(0);
  init();

  createCanvas(window.innerWidth, window.innerHeight);
  angleMode(DEGREES);
  d = pixelDensity();

  for (let i = 0; i < num; i++) {
    molds[i] = new Mold();
  }
}

function draw() {
  // filter(BLUR, 0.1);

  background(0, 5);
  loadPixels();

  for (let i = 0; i < num; i++) {
    if (key == "s") {
      // If "s" key is pressed, molds stop moving
      molds[i].stop = true;
      updatePixels();
      noLoop();
    } else {
      molds[i].stop = false;
    }

    molds[i].update();
    molds[i].display();
  }
}

function mousePressed() {}
