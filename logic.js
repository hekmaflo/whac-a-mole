moles = document.getElementsByClassName("mole");

// moles.forEach((mole) => {
//   console.log(mole);
// });
for (let i = 0; i < moles.length; i++) {
  moles[i].addEventListener("click", () => {
    console.log("click");
  });
}

// hello = () => {
//   document.getElementsByClassName("mole").innerHTML += "his";
// };

// hello();
