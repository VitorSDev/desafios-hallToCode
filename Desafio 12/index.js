const $buttonStone1 = document.querySelector(".p1-stone-button");
const $buttonPaper1 = document.querySelector(".p1-paper-button");
const $buttonScissor1 = document.querySelector(".p1-scissor-button");

const $player1Screen = document.querySelector(".player1-screen");
const $winnerTitle = document.querySelector(".winner");

let player1Movement = "";
let player2Movement = "";
let gameResult = null;

function verifyMatch() {
  if ((player1Movement == "stone") & (player2Movement == "paper")) {
    // console.log("Jogador 2 ganhou!");
    gameResult = 2;
  } else if (player1Movement == "stone" && player2Movement == "scissor") {
    // console.log("Jogador 1 ganhou!");
    gameResult = 1;
  } else if (player1Movement == "paper" && player2Movement == "stone") {
    // console.log("Jogador 1 ganhou!");
    gameResult = 1;
  } else if (player1Movement == "paper" && player2Movement == "scissor") {
    // console.log("Jogador 2 ganhou!");
    gameResult = 2;
  } else if (player1Movement == "scissor" && player2Movement == "stone") {
    // console.log("Jogador 2 ganhou!");
    gameResult = 2;
  } else if (player1Movement == "scissor" && player2Movement == "paper") {
    // console.log("Jogador 1 ganhou!");
    gameResult = 1;
  } else if (player1Movement == player2Movement) {
    // console.log("Empate!");
    gameResult = 0;
  }
}

function printWinner() {
  if (gameResult == 0) {
    $winnerTitle.innerHTML = "Empate!";
  } else if (gameResult == 1) {
    $winnerTitle.innerHTML = "Jogadora 1 Ganhou!";
  } else if (gameResult == 2) {
    $winnerTitle.innerHTML = "Jogadora 2 Ganhou!";
  }
}

// const player1ChooseStone = () =>
//   ($player1Screen.innerHTML = '<img src="./assets/stone.png" class="play">');
// const player1ChoosePaper = () =>
//   ($player1Screen.innerHTML = '<img src="./assets/paper.png" class="play">');
// const player1ChooseScissor = () =>
//   ($player1Screen.innerHTML = '<img src="./assets/scissors.png" class="play">');

const $buttonStone2 = document.querySelector(".p2-stone-button");
const $buttonPaper2 = document.querySelector(".p2-paper-button");
const $buttonScissor2 = document.querySelector(".p2-scissor-button");

const $player2Screen = document.querySelector(".player2-screen");

// const player2ChooseStone = () =>
//   ($player2Screen.innerHTML = '<img src="./assets/stone.png" class="play">');
// const player2ChoosePaper = () =>
//   ($player2Screen.innerHTML = '<img src="./assets/paper.png" class="play">');
// const player2ChooseScissor = () =>
//   ($player2Screen.innerHTML = '<img src="./assets/scissors.png" class="play">');

// player 1 buttons
$buttonStone1.addEventListener("click", function () {
  $player1Screen.innerHTML = '<img src="./assets/stone.png" class="play">';
  player1Movement = "stone";
  //console.log(player1Movement)
  verifyMatch();
  printWinner();
});

$buttonPaper1.addEventListener("click", function () {
  $player1Screen.innerHTML = '<img src="./assets/paper.png" class="play">';
  player1Movement = "paper";
  //console.log(player1Movement)
  verifyMatch();
  printWinner();
});

$buttonScissor1.addEventListener("click", function () {
  $player1Screen.innerHTML = '<img src="./assets/scissors.png" class="play">';
  player1Movement = "scissor";
  //console.log(player1Movement)
  verifyMatch();
  printWinner();
});

// player 2 buttons
$buttonStone2.addEventListener("click", function () {
  $player2Screen.innerHTML = '<img src="./assets/stone.png" class="play">';
  player2Movement = "stone";
  //console.log(player2Movement)
  verifyMatch();
  printWinner();
});

$buttonPaper2.addEventListener("click", function () {
  $player2Screen.innerHTML = '<img src="./assets/paper.png" class="play">';
  player2Movement = "paper";
  //console.log(player2Movement)
  verifyMatch();
  printWinner();
});

$buttonScissor2.addEventListener("click", function () {
  $player2Screen.innerHTML = '<img src="./assets/scissors.png" class="play">';
  player2Movement = "scissor";
  //console.log(player2Movement)
  verifyMatch();
  printWinner();
});
