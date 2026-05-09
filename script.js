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
  "https://www.youtube.com/embed/00oJQDwNDyY?is=RD3Xaxb9hiaYB6Hb",
  "https://www.youtube.com/embed/BfW72FjVC6k?is=-iBI0BYQbYiM1d5g",
  "https://www.youtube.com/embed/yJfh59iEscg?is=TXzRPOS8vi6is2x0",
  "https://www.youtube.com/embed/Y0pdUyFC7As?is=-WzLznTt667CZd-u",
  "https://www.youtube.com/embed/NpqfUI7DDB4?is=HjnM2F-vS_trHchR",
  "https://www.youtube.com/embed/y0sF5xhGreA?is=8oAIb6OnG_qA90Ih",
  "https://www.youtube.com/embed/xFnoap4kcNY?is=uwYe7MM0ZKu5KmJF",
  "https://www.youtube.com/embed/aZ4NlkFxbhM?is=TppbA0r_aC4N3U_Y",
  "https://www.youtube.com/embed/__ON3C3GRis?is=hU8iLvUPIMEYr70U",
  "https://www.youtube.com/embed/uAa4lMf3jSg?is=CJKtt2oejnrTGyuq",
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
