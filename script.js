function playSound() {
  const sound = document.getElementById("clickSound");
  if (sound) {
    sound.currentTime = 0;
    sound.play();
  }
}

/* =========================
   EVJF - AJOUT PARTICIPANTS
========================= */
function addPlayer() {
  const team = document.getElementById("team");
  if (!team) return;

  const div = document.createElement("div");
  div.className = "player-block";

  div.innerHTML = `
    <input type="text" name="equipe[]" placeholder="Nom / prénom / surnom">
  `;

  team.appendChild(div);
}

/* =========================
   EVJF - VIDEOS FUN
========================= */
const videos = [
  "https://www.youtube.com/embed/VIDEO_ID_1",
  "https://www.youtube.com/embed/VIDEO_ID_2",
  "https://www.youtube.com/embed/VIDEO_ID_3"
];

const funButton = document.getElementById("funButton");
if (funButton) {
  funButton.addEventListener("click", () => {
    const random = videos[Math.floor(Math.random() * videos.length)];

    document.getElementById("videoContainer").innerHTML = `
      <iframe width="100%" height="300"
      src="${random}"
      frameborder="0"
      allowfullscreen></iframe>
    `;
  });

  setTimeout(() => {
    funButton.style.display = "block";
  }, 10000);
}

/* =========================
   EVJF - CHARGEMENT JEU
   (PAGE jeu.html)
========================= */

let messages = [
  "Connexion au serveur EVJF...",
  "Analyse du profil joueur...",
  "Génération des missions...",
  "Chargement des coéquipières...",
  "Finalisation..."
];

let progress = 0;
let index = 0;

const interval = setInterval(() => {

  const bar = document.getElementById("progressBar");
  const text = document.getElementById("progressText");
  const loading = document.getElementById("loadingText");

  progress += 5;

  if (bar) bar.style.width = progress + "%";
  if (text) text.innerText = progress + "%";

  if (progress % 20 === 0 && index < messages.length) {
    if (loading) loading.innerText = messages[index];
    index++;
  }

  if (progress >= 100) {
    clearInterval(interval);

    if (loading) loading.style.display = "none";

    const overlay = document.getElementById("errorOverlay");
    if (overlay) {
      overlay.style.display = "flex";
      overlay.innerText = "❌ ERREUR ! Date non identifiée ! Merci de réessayer ultérieurement";
    }
  }

}, 300);
