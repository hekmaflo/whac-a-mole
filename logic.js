const timer = document.querySelector(".timer");
const start = document.querySelector(".start-btn");
const spaces = document.querySelectorAll(".mole");

// Event Listeners for board spaces
spaces.forEach((mole) => {
  mole.addEventListener("click", function () {
    console.log("click");
  });
});

// Starts the Global countdown for game.
start.addEventListener("click", startCountdown);

function startCountdown(seconds) {
  let counter = 10;

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

// startCountdown(10);
