const timer = document.querySelector(".timer");
const start = document.querySelector(".start-btn");
const spaces = document.querySelectorAll(".mole");
const currentScore = document.querySelector("#the-score");
const gameSound = document.querySelector(".sound");
// console.log(currentScore);

let score = 0;
let moleUp = false;

function startCountdown(seconds) {
  let counter = 59;
  gameSound.innerHTML = `<audio src="./assets/game-start.mp3" autoplay>
  </audio>`;

  const interval = setInterval(() => {
    timer.innerHTML = `TIME LEFT:00:${counter}`;

    if (counter < 10) {
      timer.innerHTML = `TIME LEFT:00:0${counter}`;
    }
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
  let moleCounter = 30;

  //mole add
  const moleInterval = setInterval(() => {
    const randomNum = Math.floor(Math.random() * 9);
    const randomNumTwo = Math.floor(Math.random() * 9);

    moleImg = `<img class="mole-asst" src="./assets/mole2.png" alt="" />`;
    moleUp = true;
    spaces[randomNum].innerHTML = moleImg;
    spaces[randomNumTwo].innerHTML = moleImg;
    spaces[randomNum].classList.add("mole-up");
    spaces[randomNumTwo].classList.add("mole-up");

    // mole hide
    const moleMole = setInterval(() => {
      moleUp = false;
      spaces[randomNum].innerHTML = "";
      spaces[randomNum].classList.remove("mole-up");
      clearInterval(moleMole);

      spaces[randomNumTwo].innerHTML = "";
      spaces[randomNumTwo].classList.remove("mole-up");
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
    if (mole.classList.contains("mole-up")) {
      score++;
      currentScore.innerHTML = `CURRENT SCORE:${score}`;
      this.innerHTML = `<img class="mole-asst" src="./assets/fire.png" alt="" /> <audio src="./assets/sfx_whac.mp3" autoplay>
      </audio>`;
      //   console.log(`score: ${score}`);
      //   console.log("click");
    }
  });
});
