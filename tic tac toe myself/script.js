let touchMusic = new Audio("swap.mp3.wav");
let gameoverMusic = new Audio("gameover.mp3.wav");

let turn = "X";
let isgameover = false;
//Function to change the turn i.e "x" or "0";

const change = () => {
  return turn === "X" ? "0" : "X";
};

//function for winner
const checkWin = () => {
  let info = document.getElementById("turn_panel");
  let boxText = document.getElementsByClassName("textBox");
  const win = [
    //     transform: rotate(0deg) translate(1px, 49px);    transform: rotate(45deg) translate(126px, 132px);
    // transform: rotate(90deg) translate(190px, 132px);transform: rotate(-45deg) translate(-135px, 133px);
    [0, 1, 2, 0, 1, 49],
    [3, 4, 5, 0, 1, 188],
    [6, 7, 8,0,1,315],
    [0, 3, 6,90,190,132],
    [1, 4, 7,90,190,0],
    [2, 5, 8,90,190,-127],
    [0, 4, 8,45,126,132],
    [2, 4, 6,-45,-135,133],
  ];
  win.forEach((e) => {
    if (
      boxText[e[0]].innerText === boxText[e[1]].innerText &&
      boxText[e[2]].innerText === boxText[e[1]].innerText &&
      boxText[e[0]].innerText !== ""
    ) {
      info.innerText = boxText[e[0]].innerText + " Won";
      document.querySelector(".line" ).style.transform = `rotate(${e[3]}deg) translate(${e[4]}px,${e[5]}px)`;
      document.querySelector(".line" ).style.width ="30vw";
      document.querySelector("img").style.width = "20vw";
      gameoverMusic.play();
      isgameover = true;
    }
  });
};

//My game logic:
const boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxText = element.querySelector(".textBox");
  element.addEventListener("click", () => {
    let info = document.getElementById("turn_panel");
    if (boxText.innerText === "") {
      boxText.innerText = turn;
      turn = change();
      touchMusic.play();
      checkWin();
      if (!isgameover) {
        info.innerText = `Turn of ${turn}`;
      }
     

    }
  });
});

//Resetting the button

reset.addEventListener("click", () => {
  Array.from(boxes).forEach((element) => {
    let boxText = element.querySelector(".textBox");
    boxText.innerText = "";
  });
  turn = "X";
  isgameover = false;
  turn_panel.innerText = `Turn for ${turn}`;
  document.querySelector(".line" ).style.width ="0";
  document.querySelector("img").style.width = " 0";
});
