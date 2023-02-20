let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];
  let currentPlayer = "X";
  
  let cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("click", (event) => {
      let row = event.target.parentNode.rowIndex;
      let col = event.target.cellIndex;
      if (board[row][col] === "") {
        board[row][col] = currentPlayer;
        event.target.textContent = currentPlayer;
        if (checkWin()) {
          alert(currentPlayer + " wins!");
        } else {
          currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
      }
    });
  });
  
  function checkWin() {
    // Check rows
    for (let i = 0; i < 3; i++) {
      if (board[i][0] !== "" && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
        return true;
      }
    }
    // Check columns
    for (let i = 0; i < 3; i++) {
      if (board[0][i] !== "" && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
        return true;
      }
    }
    // Check diagonals
    if (board[0][0] !== "" && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
      return true;
    }
    if (board[0][2] !== "" && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
      return true;
    }
    return false;
  }
  