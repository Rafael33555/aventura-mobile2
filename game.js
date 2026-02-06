
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let player = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  size: 30,
  speed: 8
};

function startGame() {
  document.getElementById("menu").style.display = "none";
  canvas.style.display = "block";
  document.getElementById("controls").style.display = "flex";
}

function move(dir) {
  if (dir === "left") player.x -= player.speed;
  if (dir === "right") player.x += player.speed;
  if (dir === "up") player.y -= player.speed;
  if (dir === "down") player.y += player.speed;
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "blue";
  ctx.fillRect(player.x, player.y, player.size, player.size);
  requestAnimationFrame(update);
}
update();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}

let deferredPrompt;
const installBtn = document.getElementById("installBtn");

window.addEventListener("beforeinstallprompt", e => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.style.display = "block";
});

installBtn.addEventListener("click", () => {
  deferredPrompt.prompt();
});
