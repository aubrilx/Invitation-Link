const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");

let noClickCount = 0;

const reasons = [
  "Are you sure? 😢",
  "Think again 😭",
  "Last chance 🥺",
  "You're breaking my heart 💔",
  "Please don't say no 😩",
  "I’ll cry 😭",
  "Okay now you're just being mean 😤",
  "बस भी करो 😭❤️"
];

noBtn.addEventListener("touchstart", moveButton);
noBtn.addEventListener("mouseover", moveButton);

function moveButton() {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

function showReason() {
  message.innerText = reasons[noClickCount % reasons.length];
  noClickCount++;
}

noBtn.addEventListener("mouseenter", showReason); // desktop
noBtn.addEventListener("touchstart", showReason); // mobile

// YES CLICK → animation
yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div class="yes-screen">
      <h1>YAYYYYYY!!! ❤️😍</h1>
      <p>See you on the date 😉</p>
      <div class="hearts"></div>
    </div>
  `;

  createHearts();
});

// ❤️ Floating hearts animation
function createHearts() {
  const container = document.querySelector(".hearts");

  setInterval(() => {
    const heart = document.createElement("div");
    heart.innerText = "❤️";
    heart.classList.add("heart");

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";

    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 3000);
  }, 300);
}
