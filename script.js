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
