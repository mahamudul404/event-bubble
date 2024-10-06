let timer = 60;
let score = 0;
let hitrn = 0;

function increaseScore(){

  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){

   hitrn = Math.floor(Math.random() * 10);

  document.querySelector("#hitval").textContent = hitrn;
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
      document.querySelector("#pbtm").innerHTML = `<h2>Game Over</h2>`;
    }
  }, 1000);
}

document.querySelector("#pbtm")
.addEventListener("click", function (dets) {
  let clickednum = Number(dets.target.textContent);

  if(clickednum === hitrn){
    increaseScore();
    makeBubble();
    getNewHit();
  }
});

makeBubble();

runTimer();

getNewHit();

