const timer = document.querySelector(".timer");
const start = document.querySelector(".start-btn");
const spaces = document.querySelectorAll(".mole");

// Event Listeners for board spaces
spaces.forEach((mole) => {
  mole.addEventListener("click", function () {
    console.log("click");
  });
});

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

// this function will choose randome spaces on the board (still need to get rid of the pop-ups)
const molePopUp = () => {
  let moleCounter = 10;

  //mole add
  const moleInterval = setInterval(() => {
    const randomNum = Math.floor(Math.random() * 9);
    spaces[
      randomNum
    ].innerHTML = `<img class="mole-asst" src="./assets/mole2.png" alt="" />`;

    // mole hide
    const moleMole = setInterval(() => {
      spaces[randomNum].innerHTML = "";
      clearInterval(moleMole);
    }, 1000);

    console.log(moleCounter);
    moleCounter--;

    if (moleCounter < 0) {
      clearInterval(moleInterval);
    }
  }, 1000);
};

// molePopUp();

// Starts the Global countdown & moles for game.
start.addEventListener("click", startCountdown);
start.addEventListener("click", molePopUp);
