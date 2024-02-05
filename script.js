// script.js
let noCount = 0;
let yesPressed = false;

const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
const app = document.getElementById("app");
const loveBear = document.getElementById("loveBear");
const question = document.getElementById("question");

noButton.addEventListener("click", function () {
  noCount++;
  yesButton.style.fontSize = `${noCount * 20 + 16}px`; // Adjusting the "JA" button size
  const phrases = [
    "Nein",
    "Bist du sicher?",
    "wirklich??",
    "Noch nh Chance!",
    "falsch!",
    "FALSCH!",
    "Idiot!",
    "Denk nach!",
    "sicher?",
    "sicher sicher?",
    "sei nicht so!",
    "BITTEEEE!",
    "ach komm schon...",
    "WIRKLICH?!",
    "Letzte Antwort?",
    "Du hast mein Herz gebrochen! ;(",
  ];
  noButton.innerText = phrases[Math.min(noCount, phrases.length - 1)];
});

yesButton.addEventListener("click", function () {
  yesPressed = true;
  if (yesPressed) {
    app.innerHTML = `<img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="Bear Kisses"/><div class="text-4xl font-bold my-4">Ok yay!!!</div>`;
  }
});