const statusDisplay = document.querySelector(".result-game");
const recordsView = document.querySelector(".records");
const contentPlay = document.querySelector(".content");
const contentTable = document.querySelector(".contentTable");
const tBody = document.querySelector("tbody");
const main = document.querySelector("main");
const leftHeader = document.querySelector(".left-header");
const sound = document.querySelector(".sound");
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

const xPlayer = "X";
const oPlayer = "O";
let currentPlayer = xPlayer;
let countXPlayer = 0;
let countOPlayer = 0;
let currentCount;

let gameState = ["", "", "", "", "", "", "", "", ""];
const records = JSON.parse(localStorage.getItem("oksanaRecords")) || [];

const audio = new Audio();
audio.src = "./assets/audio/game-music-7408.mp3";
audio.loop = true;
audio.volume = 0;

const audioVictory = new Audio();
audioVictory.src = "./assets/audio/victory.mp3";
audioVictory.volume = 0;

function play() {
  audio.volume = "1";
}

function soundClick() {
  sound.classList.toggle("sound-play");
  if (sound.classList.contains("sound-play")) {
    audio.play();
    audio.volume = 1;
    audioVictory.volume = 1;
  } else {
    audio.pause();
    audio.volume = 0;
    audioVictory.volume = 0;
  }
}

const winningMessage = () => {
  if (audio.volume !== 0) {
    audioVictory.play();
  }
  if (records.length === 10) {
    records.shift();
  }
  records.push({
    winner: currentPlayer,
    totalMoves: countXPlayer + countOPlayer + 1,
    winningMove: currentCount,
  });

  setTimeout(play, 4000);

  localStorage.setItem("oksanaRecords", JSON.stringify(records));
  return `
  <h2 class="result-game">
    Player <span class="style-player ${classAdd()}">${currentPlayer}</span> won on turn ${currentCount}.
  </h2>
  <h2 class="result-game">
    A total of ${countXPlayer + countOPlayer + 1} moves were made.
  </h2>
  `;
};

const drawMessage = () => {
  if (records.length === 10) {
    records.shift();
  }
  records.push({
    winner: "draw",
    totalMoves: countXPlayer + countOPlayer + 1,
    winningMove: "-",
  });
  localStorage.setItem("oksanaRecords", JSON.stringify(records));
  return `
  <h2 class="result-game">
    Game ended in a draw!
  </h2>`;
};

const currentPlayerTurn = () => `
  <h2 class="result-game">
    It's <span class="style-player ${classAdd()}">${currentPlayer}</span> 's turn
  </h2>
  `;

statusDisplay.innerHTML = currentPlayerTurn();

function classAdd() {
  currentClass = currentPlayer === xPlayer ? "color-blue" : "color-pink";
  return currentClass;
}

function handleItemPlayed(clickedItem, clickedItemIndex) {
  gameState[clickedItemIndex] = currentPlayer;
  clickedItem.innerHTML = currentPlayer;
  if (currentPlayer === xPlayer) {
    document.querySelectorAll(".item")[clickedItemIndex].style.color =
      "#60d4cf";
  } else {
    document.querySelectorAll(".item")[clickedItemIndex].style.color =
      "#f662d1";
  }
}

function handlePlayerChange() {
  if (currentPlayer === xPlayer) {
    currentPlayer = oPlayer;
    countXPlayer += 1;
    currentCount = countXPlayer;
  } else {
    currentPlayer = xPlayer;
    countOPlayer += 1;
    currentCount = countOPlayer + 1;
  }
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
  countXPlayer = 0;
  countOPlayer = 0;
  currentCount = 0;
}

function showTable() {
  contentPlay.classList.toggle("hide");
  contentTable.classList.toggle("hide");
  if (!contentTable.classList.contains("hide")) {
    recordsView.textContent = "play";
  } else {
    recordsView.textContent = "table of records";
  }
}

function renderTable() {
  if (!contentPlay.classList.contains("hide")) {
    main.style.maxHeight = "calc(100vh - 180px)";
    main.style.height = "100%";
    main.style.marginBottom = "0";
  } else {
    main.style.maxHeight = "fit-content";
    main.style.height = "auto";
    main.style.marginBottom = "20px";
  }

  let resultRecords = [];
  resultRecords = JSON.parse(localStorage.getItem("oksanaRecords"));
  tBody.innerHTML = "";
  for (let i = 0; i < resultRecords.length; i++) {
    let currentClass;
    if (resultRecords[i].winner === "X") {
      currentClass = "color-blue";
    } else if (resultRecords[i].winner === "O") {
      currentClass = "color-pink";
    } else {
      currentClass = "style-table";
    }
    tBody.innerHTML += `
    <tr>
        <td class="style-player ${currentClass}">${resultRecords[i].winner}</td>
        <td>${resultRecords[i].totalMoves}</td>
        <td>${resultRecords[i].winningMove}</td>
    </tr>
    `;
  }
}

function showContentPlay() {
  contentPlay.classList.remove("hide");
  contentTable.classList.add("hide");
  if (!contentTable.classList.contains("hide")) {
    recordsView.textContent = "play";
  } else {
    recordsView.textContent = "table of records";
  }
  if (!contentPlay.classList.contains("hide")) {
    main.style.maxHeight = "calc(100vh - 180px)";
    main.style.height = "100%";
    main.style.marginBottom = "0";
  } else {
    main.style.maxHeight = "fit-content";
    main.style.height = "auto";
    main.style.marginBottom = "20px";
  }
}

document
  .querySelector(".container-game")
  .addEventListener("click", handleItemClick);
document
  .querySelector(".start-game")
  .addEventListener("click", handleRestartGame);
recordsView.addEventListener("click", showTable);
leftHeader.addEventListener("click", showContentPlay);
recordsView.addEventListener("click", renderTable);
sound.addEventListener("click", soundClick);

document.querySelectorAll(".item").forEach((elem) => {
  elem.addEventListener("click", () => (audio.volume = "0.2"));
});

console.log(`
1.Вёрстка +10
2.При кликах по игровому полю по очереди отображаются крестики и нолики. Первая фигура всегда крестик +10
3.Игра завершается, когда три фигуры выстроились в ряд по вертикали, горизонтали или диагонали +10
4.По окончанию игры выводится её результат - выигравшая фигура и количество ходов от начала игры до её завершения +10
5.Результаты последних 10 игр сохраняются в local storage. Есть таблица рекордов, в которой отображаются результаты предыдущих 10 игр +10
6.Звуки в игре +10
7.Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +10
высокое качество оформления приложения предполагает собственное оригинальное оформление равное или отличающееся в лучшую сторону по сравнению с демо

Score: 60 баллов
`);
