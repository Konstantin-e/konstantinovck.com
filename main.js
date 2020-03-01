

const cloudPhrases = ["hello", "one day I'll become a real big cloud...", "what a great day to be a cloud:)",
  "I feel sunshine on my belly", "I think other clouds don't notice me...", "you might want to check out that chest" ];
let thought = document.getElementById('thought');

setInterval(getRandomThought, 10000); // clound thoughts

function getRandomThought() {
  let randomThought = cloudPhrases[Math.floor(Math.random() * cloudPhrases.length)];
  thought.innerHTML = randomThought;

}