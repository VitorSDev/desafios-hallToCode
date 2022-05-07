const $boardItem0 = document.querySelector(".board-0");
const $boardItem1 = document.querySelector(".board-1");
const $boardItem2 = document.querySelector(".board-2");
const $boardItem3 = document.querySelector(".board-3");
const $boardItem4 = document.querySelector(".board-4");
const $boardItem5 = document.querySelector(".board-5");
const $boardItem6 = document.querySelector(".board-6");
const $boardItem7 = document.querySelector(".board-7");
const $boardItem8 = document.querySelector(".board-8");

let currentMove = "X";

function toggleMovement() {
  if (currentMove == "X") {
    currentMove = "O";
  } else {
    currentMove = "X";
  }
}

function verifyGame() {
  if (
    $boardItem0.innerHTML != "" &&
    $boardItem0.innerHTML == $boardItem1.innerHTML &&
    $boardItem1.innerHTML == $boardItem2.innerHTML
  ) {
    // alert("linha 0");
    return currentMove;
  }
  if (
    $boardItem3.innerHTML != "" &&
    $boardItem3.innerHTML == $boardItem4.innerHTML &&
    $boardItem4.innerHTML == $boardItem5.innerHTML
  ) {
    // alert("linha 3");
    return currentMove;
  }
  if (
    $boardItem6.innerHTML != "" &&
    $boardItem6.innerHTML == $boardItem7.innerHTML &&
    $boardItem7.innerHTML == $boardItem8.innerHTML
  ) {
    // alert("linha 6");
    return currentMove;
  }
  if (
    $boardItem0.innerHTML != "" &&
    $boardItem0.innerHTML == $boardItem3.innerHTML &&
    $boardItem3.innerHTML == $boardItem8.innerHTML
  ) {
    // alert("coluna 0");
    return currentMove;
  }
  if (
    $boardItem1.innerHTML != "" &&
    $boardItem1.innerHTML == $boardItem4.innerHTML &&
    $boardItem4.innerHTML == $boardItem7.innerHTML
  ) {
    // alert("coluna 1");
    return currentMove;
  }
  if (
    $boardItem2.innerHTML != "" &&
    $boardItem2.innerHTML == $boardItem5.innerHTML &&
    $boardItem5.innerHTML == $boardItem8.innerHTML
  ) {
    // alert("coluna 2");
    return currentMove;
  }
  if (
    $boardItem0.innerHTML != "" &&
    $boardItem0.innerHTML == $boardItem4.innerHTML &&
    $boardItem4.innerHTML == $boardItem8.innerHTML
  ) {
    // alert("diagonal 0");
    return currentMove;
  }
  if (
    $boardItem2.innerHTML != "" &&
    $boardItem2.innerHTML == $boardItem4.innerHTML &&
    $boardItem4.innerHTML == $boardItem6.innerHTML
  ) {
    // alert("diagonal 2");
    return currentMove;
  }
}

$boardItem0.addEventListener("click", function () {
  if ($boardItem0.innerHTML != "") return;

  $boardItem0.innerHTML = currentMove;
  const gameResult = verifyGame();
  console.log(gameResult);
  if (gameResult == "X" || gameResult == "O") {
    alert(currentMove);
  }

  toggleMovement();
});

$boardItem1.addEventListener("click", function () {
  if ($boardItem1.innerHTML != "") return;
  $boardItem1.innerHTML = currentMove;
  const gameResult = verifyGame();
  console.log(gameResult);
  if (gameResult == "X" || gameResult == "O") {
    alert(currentMove);
  }
  toggleMovement();
});

$boardItem2.addEventListener("click", function () {
  if ($boardItem2.innerHTML != "") return;
  $boardItem2.innerHTML = currentMove;
  const gameResult = verifyGame();
  console.log(gameResult);
  if (gameResult == "X" || gameResult == "O") {
    alert(currentMove);
  }
  toggleMovement();
});

$boardItem3.addEventListener("click", function () {
  if ($boardItem3.innerHTML != "") return;
  $boardItem3.innerHTML = currentMove;
  const gameResult = verifyGame();
  console.log(gameResult);
  if (gameResult == "X" || gameResult == "O") {
    alert(currentMove);
  }
  toggleMovement();
});

$boardItem4.addEventListener("click", function () {
  if ($boardItem4.innerHTML != "") return;
  $boardItem4.innerHTML = currentMove;
  const gameResult = verifyGame();
  console.log(gameResult);
  if (gameResult == "X" || gameResult == "O") {
    alert(currentMove);
  }
  toggleMovement();
});

$boardItem5.addEventListener("click", function () {
  if ($boardItem5.innerHTML != "") return;
  $boardItem5.innerHTML = currentMove;
  const gameResult = verifyGame();
  console.log(gameResult);
  if (gameResult == "X" || gameResult == "O") {
    alert(currentMove);
  }
  toggleMovement();
});

$boardItem6.addEventListener("click", function () {
  if ($boardItem6.innerHTML != "") return;
  $boardItem6.innerHTML = currentMove;
  const gameResult = verifyGame();
  console.log(gameResult);
  if (gameResult == "X" || gameResult == "O") {
    alert(currentMove);
  }
  toggleMovement();
});

$boardItem7.addEventListener("click", function () {
  if ($boardItem7.innerHTML != "") return;
  $boardItem7.innerHTML = currentMove;
  const gameResult = verifyGame();
  console.log(gameResult);
  if (gameResult == "X" || gameResult == "O") {
    alert(currentMove);
  }
  toggleMovement();
});

$boardItem8.addEventListener("click", function () {
  if ($boardItem8.innerHTML != "") return;
  $boardItem8.innerHTML = currentMove;
  const gameResult = verifyGame();
  console.log(gameResult);
  if (gameResult == "X" || gameResult == "O") {
    alert(currentMove);
  }
  toggleMovement();
});
