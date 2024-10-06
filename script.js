function makeBubble() {
  let clutter = "";

  for (let i = 1; i <= 75; i++) {
    let rn = Math.floor(Math.random() * 10);

    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

let timer = 6;
function runTimer() {
  let timerInterval = setInterval(function () {
    if(timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    }
    else {
      clearInterval(timerInterval);
    }
    
  }, 1000);
}

makeBubble();

runTimer();
