var cell = document.getElementsByClassName("cell");
var gameStatus = document.getElementsByClassName("game--status");
var initButton = document.getElementsByClassName("game--restart");
gameStatus[0].innerHTML = "It's X's turn"

for (var i = 0; i < cell.length; i++) {
  cell[i].addEventListener(
    "click",
    function (e) {
      playerTurn(e);
    },
    false
  );
}

initButton[0].addEventListener("click", init);

var xTurn = true;
var oTurn = false;

function playerTurn(e) {
  let cellIndex = e.target.getAttribute("data-cell-index");

  if (xTurn === true) {
    firstPlayer(cellIndex);
    return;
  }
  if (oTurn === true) {
    secondPlayer(cellIndex);
    return;
  }
}

function firstPlayer(index) {
  cell[index].innerHTML = "X";
  showGameStatus("O");
  xTurn = false;
  oTurn = true;
}

function secondPlayer(index) {
  cell[index].innerHTML = "O";
  showGameStatus("X");
  xTurn = true;
  oTurn = false;
}

function showGameStatus(type) {
  if (type === "X") gameStatus[0].innerHTML = "It's X's turn";
  if (type === "O") gameStatus[0].innerHTML = "It's O's turn";
}

function init() {
  for (let i = 0; i < 9; i++) {
    cell[i].innerHTML = "";
    gameStatus[0].innerHTML = "It's X's turn"
  }
}
