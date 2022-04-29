const $buttonStone1 = document.querySelector(".p1-stone-button");
const $buttonPaper1 = document.querySelector(".p1-paper-button");
const $buttonScissor1 = document.querySelector(".p1-scissor-button");

const $player1Screen = document.querySelector(".player1-screen");
const $winnerTitle = document.querySelector(".winner");

const $score1 = document.querySelector(".score-player1");
const $score2 = document.querySelector(".score-player2");

const $reset = document.querySelector(".reset-button");
const $start = document.querySelector(".start-button");

let player1Movement = "";
let player2Movement = "";
let gameResult = null;

let scorePlayer1 = 0;
let scorePlayer2 = 0;

let gameStart = false;

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

function resetBoard() {
  $player1Screen.innerHTML = "";
  $player2Screen.innerHTML = "";
}

function resetMoveVariables() {
  player1Movement = "";
  player2Movement = "";
}

function resetPlayerScore() {
  scorePlayer1 = 0;
  scorePlayer2 = 0;
}

function resetScoreboard() {
  $score1.innerHTML = "00";
  $score2.innerHTML = "00";
}

function printScoreboard() {
  if (scorePlayer1 <= 9) {
    $score1.innerHTML = "0" + scorePlayer1;
  } else {
    $score1.innerHTML = scorePlayer1;
  }

  if (scorePlayer2 <= 9) {
    $score2.innerHTML = "0" + scorePlayer2;
  } else {
    $score2.innerHTML = scorePlayer2;
  }
}

function addPoint(winnerNumber) {
  if (winnerNumber == 1) {
    scorePlayer1++;
  }
  if (winnerNumber == 2) {
    scorePlayer2++;
  }
}

function move(moveName, playerInfo) {
  if (gameStart) {
    if (playerInfo == 1) {
      $player1Screen.innerHTML =
        '<img src="./assets/' + moveName + '.png" class="play">';
      player1Movement = moveName;
    } else if (playerInfo == 2) {
      $player2Screen.innerHTML =
        '<img src="./assets/' + moveName + '.png" class="play">';
      player2Movement = moveName;
    }
    verifyMatch();
    printWinner();
    if (gameResult != null) {
      setTimeout(resetBoard, 2000);
      resetMoveVariables();
      addPoint(gameResult);
      printScoreboard();
      gameResult = null;
    }
  }
}

// player 1 buttons
$buttonStone1.addEventListener("click", function () {
  move("stone", 1);
});

$buttonPaper1.addEventListener("click", function () {
  move("paper", 1);
});

$buttonScissor1.addEventListener("click", function () {
  move("scissor", 1);
});

// player 2 buttons
$buttonStone2.addEventListener("click", function () {
  move("stone", 2);
});

$buttonPaper2.addEventListener("click", function () {
  move("paper", 2);
});

$buttonScissor2.addEventListener("click", function () {
  move("scissor", 2);
});

$reset.addEventListener("click", function () {
  resetBoard();
  resetScoreboard();
  resetPlayerScore();
  gameResult = null;
  resetMoveVariables();
  $winnerTitle.innerHTML = "Resultado";

  // location.reload();
});

$start.addEventListener("click", function () {
  // if (!gameStart) {
  //   gameStart = true;
  //   $start.classList.add("start");
  // } else {
  //   gameStart = false;
  //   $start.classList.remove("start");

  gameStart = !gameStart;
  $start.classList.toggle("start");

  if (gameStart) {
    $start.innerHTML = "Pausar";
  } else {
    $start.innerHTML = "Iniciar";
  }
});
