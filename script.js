function playSound() {
  const sound = document.getElementById("clickSound");
  if (sound) {
    sound.currentTime = 0;
    sound.play();
  }
}

/* =========================
   AJOUT COÉQUIPIÈRES
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
   VIDEOS FUN
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
      allowfullscreen>
      </iframe>
    `;
  });

  setTimeout(() => {
    funButton.style.display = "block";
  }, 10000);

}
