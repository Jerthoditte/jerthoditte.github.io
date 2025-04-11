function login() {
  const birthdate = document.getElementById("birthdate").value;
  const nickname = document.getElementById("nickname").value;

  const validBirthdate = "043003";
  const validNickname = "Yengyeng";

  
    if (birthdate === validBirthdate && nickname === validNickname) {
  document.querySelector(".container").style.display = "none";
  document.getElementById("dashboard").style.display = "block";

  // Play birthday song
  const song = document.getElementById("bdaySong");
  song.play();

  // Start confetti
  startConfetti();
}
   else {
    
    document.getElementById("message").innerText = "Haynako, Yengyeng!";
    document.getElementById("message").style.color = "green";
  }

  return false; 
}
function startConfetti() {
  const confettiCanvas = document.getElementById("confetti");
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
  const ctx = confettiCanvas.getContext("2d");

  const confetti = [];
  const colors = ["#ff0a54", "#ff477e", "#ff7096", "#ff85a1", "#fbb1bd", "#f9bec7"];

  for (let i = 0; i < 300; i++) {
    confetti.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 6 + 4,
      d: Math.random() * 30 + 10,
      color: colors[Math.floor(Math.random() * colors.length)],
      tilt: Math.floor(Math.random() * 10) - 10,
      tiltAngle: 0
    });
  }

  function draw() {
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    confetti.forEach((c, i) => {
      ctx.beginPath();
      ctx.lineWidth = c.r;
      ctx.strokeStyle = c.color;
      ctx.moveTo(c.x + c.tilt + c.r / 2, c.y);
      ctx.lineTo(c.x + c.tilt, c.y + c.tilt + c.r / 2);
      ctx.stroke();
    });
    update();
  }

  function update() {
    confetti.forEach(c => {
      c.y += Math.cos(c.d) + 1 + c.r / 2;
      c.tiltAngle += 0.1;
      c.tilt = Math.sin(c.tiltAngle) * 15;

      if (c.y > window.innerHeight) {
        c.y = -10;
        c.x = Math.random() * window.innerWidth;
      }
    });
  }

  setInterval(draw, 30);
}
function showMessage() {
  document.getElementById("surpriseMessage").style.display = "block";
}
function showMessage() {
  document.getElementById("surpriseCard").style.display = "block";

  const pop = document.getElementById("popSound");
  pop.currentTime = 0;
  pop.play();
}

function closeCard() {
  document.getElementById("surpriseCard").style.display = "none";
}