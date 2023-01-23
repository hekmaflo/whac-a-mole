const timer = document.querySelector(".timer");
const start = document.querySelector(".start-btn");

// start.addEventListener("click", startCountdown());

function startCountdown(seconds) {
  let counter = seconds;

  const interval = setInterval(() => {
    timer.innerHTML = `TIME LEFT: ${counter}`;
    console.log(counter);
    counter--;

    if (counter < 0) {
      clearInterval(interval);
      console.log("Ding!");
    }
  }, 1000);
}

startCountdown(10);
