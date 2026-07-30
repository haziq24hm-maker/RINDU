const message = "Abg sangat rindu pada kesayangan abg. Maafkan abg. Abg mengaku semua kesilapan dari abg. Terimalah kemaafan ikhlas dari hati.";

function openLetter() {
  // Mainkan muzik (disesuaikan untuk iOS)
  const bgMusic = document.getElementById('bg-music');
  if (bgMusic) {
    bgMusic.play().catch(error => {
      console.log("iOS autoplay blocked or file error:", error);
    });
  }

  // Sembunyikan sampul, tunjukkan surat
  const envelope = document.getElementById('envelope-container');
  const letter = document.getElementById('letter-container');
  
  if (envelope) envelope.classList.add('hidden');
  if (letter) letter.classList.remove('hidden');

  // Kesan menaip automatik (Typewriter effect)
  let index = 0;
  const speed = 50; // Kelajuan taip (ms)

  function typeWriter() {
    if (index < message.length) {
      const typedText = document.getElementById("typed-text");
      if (typedText) {
        typedText.innerHTML += message.charAt(index);
      }
      index++;
      setTimeout(typeWriter, speed);
    }
  }
  
  typeWriter();
}
