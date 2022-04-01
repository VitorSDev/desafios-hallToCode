const $buttonStone1 = document.querySelector(".p1-stone-button");
const $buttonPaper1 = document.querySelector(".p1-paper-button");
const $buttonScissor1 = document.querySelector(".p1-scissor-button");

const $player1Screen = document.querySelector(".player1-screen");

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

$buttonStone1.addEventListener("click", function () {
  $player1Screen.innerHTML = '<img src="./assets/stone.png" class="play">';
});

$buttonPaper1.addEventListener("click", function () {
  $player1Screen.innerHTML = '<img src="./assets/paper.png" class="play">';
});

$buttonScissor1.addEventListener("click", function () {
  $player1Screen.innerHTML = '<img src="./assets/scissors.png" class="play">';
});

$buttonStone2.addEventListener("click", function () {
  $player2Screen.innerHTML = '<img src="./assets/stone.png" class="play">';
});

$buttonPaper2.addEventListener("click", function () {
  $player2Screen.innerHTML = '<img src="./assets/paper.png" class="play">';
});

$buttonScissor2.addEventListener("click", function () {
  $player2Screen.innerHTML = '<img src="./assets/scissors.png" class="play">';
});
