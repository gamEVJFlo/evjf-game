function playSound() {
  const sound = document.getElementById("clickSound");
  if (sound) {
    sound.currentTime = 0;
    sound.play();
  }
}

function addPlayer() {
  const div = document.createElement("div");
  div.className = "player-block";

  div.innerHTML = `
    <input type="text" name="equipe[]" placeholder="Nom / prénom / surnom">
  `;

  document.getElementById("team").appendChild(div);
}

const videos = [
  "https://www.youtube.com/embed/VIDEO_ID_1",
  "https://www.youtube.com/embed/VIDEO_ID_2",
  "https://www.youtube.com/embed/VIDEO_ID_3"
];

document.getElementById("funButton").addEventListener("click", () => {
  const random = videos[Math.floor(Math.random() * videos.length)];

  document.getElementById("videoContainer").innerHTML = `
    <iframe width="100%" height="300"
    src="${random}"
    frameborder="0"
    allowfullscreen></iframe>
  `;
});

setTimeout(() => {
  document.getElementById("funButton").style.display = "block";
}, 10000);
