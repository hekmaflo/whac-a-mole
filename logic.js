const moles = document.querySelectorAll(".mole");
console.log(moles);
// const myFunction = (item) => {
//   console.log("hi");
// };
let myfunction = (mole) => {
  mole = moles;
  mole.addEventListener("click", () => {
    console.log("click");
  });
};
moles.forEach(myFunction());
// });

// for (let i = 0; i < moles.length; i++) {
//   moles[i].addEventListener("click", () => {
//     console.log("click");
//   });
// }

// hello = () => {
//   document.getElementsByClassName("mole").innerHTML += "his";
// };

// hello();
