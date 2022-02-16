const statusDisplay = document.querySelector(".result-game");
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let gameActive = true;

let currentPlayer = "X";

let gameState = ["", "", "", "", "", "", "", "", ""];

const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

statusDisplay.innerHTML = currentPlayerTurn();

function handleItemPlayed(clickedItem, clickedItemIndex) {
  gameState[clickedItemIndex] = currentPlayer;
  clickedItem.innerHTML = currentPlayer;
  if (currentPlayer == "X") {
    document.querySelectorAll(".item")[clickedItemIndex].style.color = "blue";
  } else {
    document.querySelectorAll(".item")[clickedItemIndex].style.color = "red";
  }
}

function handlePlayerChange() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusDisplay.innerHTML = currentPlayerTurn();
}

function handleResultValidation() {
  let roundWon = false;
  for (let i = 0; i <= 7; i++) {
    const winCondition = winningConditions[i];
    let a = gameState[winCondition[0]];
    let b = gameState[winCondition[1]];
    let c = gameState[winCondition[2]];
    if (a === "" || b === "" || c === "") {
      continue;
    }
    if (a === b && b === c) {
      roundWon = true;
      break;
    }
  }
  if (roundWon) {
    statusDisplay.innerHTML = winningMessage();
    gameActive = false;
    return;
  }
  let roundDraw = !gameState.includes("");
  if (roundDraw) {
    statusDisplay.innerHTML = drawMessage();
    gameActive = false;
    return;
  }
  handlePlayerChange();
}

function handleItemClick(e) {
  const clickedItem = e.target;
  const clickedItemIndex = parseInt(clickedItem.dataset.index);

  if (gameState[clickedItemIndex] !== "" || !gameActive) {
    return;
  }
  handleItemPlayed(clickedItem, clickedItemIndex);
  handleResultValidation();
}

function handleRestartGame() {
  gameActive = true;
  currentPlayer = "X";
  gameState = ["", "", "", "", "", "", "", "", ""];
  statusDisplay.innerHTML = currentPlayerTurn();
  document.querySelectorAll(".item").forEach((elem) => (elem.innerHTML = ""));
}

document
  .querySelector(".container-game")
  .addEventListener("click", handleItemClick);
document
  .querySelector(".start-game")
  .addEventListener("click", handleRestartGame);
