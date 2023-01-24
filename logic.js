const timer = document.querySelector(".timer");
const start = document.querySelector(".start-btn");
const spaces = document.querySelectorAll(".mole");

let score = 0;
let moleUp = false;

function startCountdown(seconds) {
  let counter = 59;

  const interval = setInterval(() => {
    timer.innerHTML = `TIME LEFT: 00:${counter}`;
    // console.log(counter);
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
  let moleCounter = 59;

  //mole add
  const moleInterval = setInterval(() => {
    const randomNum = Math.floor(Math.random() * 9);
    const randomNumTwo = Math.floor(Math.random() * 9);

    moleImg = `<img class="mole-asst" src="./assets/mole2.png" alt="" />`;
    moleUp = true;
    spaces[randomNum].innerHTML = moleImg;
    spaces[randomNumTwo].innerHTML = moleImg;
    // mole hide
    const moleMole = setInterval(() => {
      moleUp = false;
      spaces[randomNum].innerHTML = "";
      clearInterval(moleMole);

      spaces[randomNumTwo].innerHTML = "";
      clearInterval(moleMole);
    }, 1000);

    // console.log(moleCounter);
    moleCounter--;

    if (moleCounter < 0) {
      clearInterval(moleInterval);
    }
  }, 2000);
};

// molePopUp();

// Starts the Global countdown & moles for game.
start.addEventListener("click", startCountdown);
start.addEventListener("click", molePopUp);
// Event Listeners for board spaces
spaces.forEach((mole) => {
  mole.addEventListener("click", function (e) {
    if (moleUp) {
      score++;
      console.log(`score: ${score}`);
      console.log("click");
    }
  });
});
