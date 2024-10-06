let timer = 6;
let score = 0;

function increaseScore(){

  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){

  let hit = Math.floor(Math.random() * 10);

  document.querySelector("#hitval").textContent = hit;
}

function makeBubble() {
  let clutter = "";

  for (let i = 1; i <= 75; i++) {
    let rn = Math.floor(Math.random() * 10);

    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
  let timerInterval = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerInterval);
    }
  }, 1000);
}

makeBubble();

runTimer();

getNewHit();

