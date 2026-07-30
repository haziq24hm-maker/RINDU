const message = "im so sorry babyy :(. aku bener bener minta maaf sayangku, aku ngga sengaja.. maafin aku sayangku cintakuu.";

function openLetter() {
  // Mainkan muzik
  document.getElementById('bg-music').play();

  // Sembunyikan sampul, tunjukkan surat
  document.getElementById('envelope-container').classList.add('hidden');
  document.getElementById('letter-container').classList.remove('hidden');

  // Kesan menaip automatik (Typewriter effect)
  let index = 0;
  const speed = 50; // Kelajuan taip (ms)

  function typeWriter() {
    if (index < message.length) {
      document.getElementById("typed-text").innerHTML += message.charAt(index);
      index++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
}
