//declare main variables
const newGameBtn = document.getElementById('new-game-button');
const resetBtn = document.getElementById('reset-button');
const messageToPlayer = document.getElementById('output-player');
const player1Scr = document.getElementById('player-one-score');
const player2Scr = document.getElementById('player-two-score');
//cell vars
const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');
const c4 = document.getElementById('c4');
const c5 = document.getElementById('c5');
const c6 = document.getElementById('c6');
const c7 = document.getElementById('c7');
const c8 = document.getElementById('c8');
const c9 = document.getElementById('c9');
const allCells = document.querySelectorAll('.cells');

// load all event listeners

loadAllEventListeners();


function loadAllEventListeners() {
  newGameBtn.addEventListener('click', startNewGame);
  resetBtn.addEventListener('click', resetScore);
  document.addEventListener('DOMContentLoaded', getCellsValues);
  document.addEventListener('DOMContentLoaded', getPlayerScore);
  c1.addEventListener('keyup', checkInputC1);
  c2.addEventListener('keyup', checkInputC2);
  c3.addEventListener('keyup', checkInputC3);
  c4.addEventListener('keyup', checkInputC4);
  c5.addEventListener('keyup', checkInputC5);
  c6.addEventListener('keyup', checkInputC6);
  c7.addEventListener('keyup', checkInputC7);
  c8.addEventListener('keyup', checkInputC8);
  c9.addEventListener('keyup', checkInputC9);

}

//functions
function startNewGame(e) {
  // messageToPlayer.textContent = '';
  messageToPlayer.textContent = 'Player ONE GO';
  allCells.forEach(function (cell) {
    cell.disabled = false;
    cell.value = '';
  })
  // clear local storage
  localStorage.removeItem('c1');
  localStorage.removeItem('c2');
  localStorage.removeItem('c3');
  localStorage.removeItem('c4');
  localStorage.removeItem('c5');
  localStorage.removeItem('c6');
  localStorage.removeItem('c7');
  localStorage.removeItem('c8');
  localStorage.removeItem('c9');
  e.preventDefault()
}
// Reset Score
function resetScore(e) {
  localStorage.removeItem('palyer1Scr');
  localStorage.removeItem('palyer2Scr');
  player1Scr.textContent = '';
  player2Scr.textContent = '';
  localStorage.clear();
  // e.preventDefault()
}
//Reading cells from ls
function getCellsValues(e) {
  allCells.forEach(function (cell) {
    if (localStorage.getItem(cell.id) === 'X') {
      cell.value = localStorage.getItem(cell.id);
      cell.style.color = 'darkred';
    } else {
      cell.value = localStorage.getItem(cell.id);
      cell.style.color = 'darkblue';
    }
  })

}
// Reading player scores from LS
function getPlayerScore(e) {
  player1Scr.textContent = localStorage.getItem('player1Scr', player1Scr.textContent);
  player2Scr.textContent = localStorage.getItem('player2Scr', player2Scr.textContent);
  e.preventDefault();
}
// Cell functions


function checkInputC1(e) {
  if (e.target.value === 'O' || e.target.value === 'X') {
    c1.disabled = true;
    if (messageToPlayer.textContent === 'Player ONE GO') {
      messageToPlayer.textContent = 'Player TWO GO'
    } else {
      messageToPlayer.textContent = 'Player ONE GO'
    }
  } else {
    e.target.value = '';
    // alert('Please Use Capital X and O');
  }
  c1.value === 'O' ? c1.style.color = 'darkblue' : c1.style.color = 'darkred';
  localStorage.setItem('c1', c1.value);
  win();
  e.preventDefault()
}
function checkInputC2(e) {
  if (e.target.value === 'O' || e.target.value === 'X') {
    c2.disabled = true;
    if (messageToPlayer.textContent === 'Player ONE GO') {
      messageToPlayer.textContent = 'Player TWO GO'
    } else {
      messageToPlayer.textContent = 'Player ONE GO'
    }
  } else {
    e.target.value = '';
    // alert('Please Use Capital X and O');
  }
  c2.value === 'O' ? c2.style.color = 'darkblue' : c2.style.color = 'darkred';
  localStorage.setItem('c2', c2.value);
  win();
  e.preventDefault()
}
function checkInputC3(e) {
  if (e.target.value === 'O' || e.target.value === 'X') {
    c3.disabled = true;
    if (messageToPlayer.textContent === 'Player ONE GO') {
      messageToPlayer.textContent = 'Player TWO GO'
    } else {
      messageToPlayer.textContent = 'Player ONE GO'
    }
  } else {
    e.target.value = '';
    // alert('Please Use Capital X and O');
  }
  c3.value === 'O' ? c3.style.color = 'darkblue' : c3.style.color = 'darkred';
  localStorage.setItem('c3', c3.value);
  win();
  e.preventDefault()
}
function checkInputC4(e) {
  if (e.target.value === 'O' || e.target.value === 'X') {
    c4.disabled = true;
    if (messageToPlayer.textContent === 'Player ONE GO') {
      messageToPlayer.textContent = 'Player TWO GO'
    } else {
      messageToPlayer.textContent = 'Player ONE GO'
    }
  } else {
    e.target.value = '';
    // alert('Please Use Capital X and O');
  }
  c4.value === 'O' ? c4.style.color = 'darkblue' : c4.style.color = 'darkred';
  localStorage.setItem('c4', c4.value);
  win();
  e.preventDefault()
}
function checkInputC5(e) {
  if (e.target.value === 'O' || e.target.value === 'X') {
    c5.disabled = true;
    if (messageToPlayer.textContent === 'Player ONE GO') {
      messageToPlayer.textContent = 'Player TWO GO'
    } else {
      messageToPlayer.textContent = 'Player ONE GO'
    }
  } else {
    e.target.value = '';
    // alert('Please Use Capital X and O');
  }
  c5.value === 'O' ? c5.style.color = 'darkblue' : c5.style.color = 'darkred';
  localStorage.setItem('c5', c5.value);
  win();
  e.preventDefault()
}
function checkInputC6(e) {
  if (e.target.value === 'O' || e.target.value === 'X') {
    c6.disabled = true;
    if (messageToPlayer.textContent === 'Player ONE GO') {
      messageToPlayer.textContent = 'Player TWO GO'
    } else {
      messageToPlayer.textContent = 'Player ONE GO'
    }
  } else {
    e.target.value = '';
    // alert('Please Use Capital X and O');
  }
  c6.value === 'O' ? c6.style.color = 'darkblue' : c6.style.color = 'darkred';
  localStorage.setItem('c6', c6.value);
  win();
  e.preventDefault()
}
function checkInputC7(e) {
  if (e.target.value === 'O' || e.target.value === 'X') {
    c7.disabled = true;
    if (messageToPlayer.textContent === 'Player ONE GO') {
      messageToPlayer.textContent = 'Player TWO GO'
    } else {
      messageToPlayer.textContent = 'Player ONE GO'
    }
  } else {
    e.target.value = '';
    // alert('Please Use Capital X and O');
  }
  c7.value === 'O' ? c7.style.color = 'darkblue' : c7.style.color = 'darkred';
  localStorage.setItem('c7', c7.value);
  win();
  e.preventDefault()
}
function checkInputC8(e) {
  if (e.target.value === 'O' || e.target.value === 'X') {
    c8.disabled = true;
    if (messageToPlayer.textContent === 'Player ONE GO') {
      messageToPlayer.textContent = 'Player TWO GO'
    } else {
      messageToPlayer.textContent = 'Player ONE GO'
    }
  } else {
    e.target.value = '';
    // alert('Please Use Capital X and O');
  }
  c8.value === 'O' ? c8.style.color = 'darkblue' : c8.style.color = 'darkred';
  localStorage.setItem('c8', c8.value);
  win();
  e.preventDefault()
}
function checkInputC9(e) {
  if (e.target.value === 'O' || e.target.value === 'X') {
    c9.disabled = true;
    if (messageToPlayer.textContent === 'Player ONE GO') {
      messageToPlayer.textContent = 'Player TWO GO'
    } else {
      messageToPlayer.textContent = 'Player ONE GO'
    }
  } else {
    e.target.value = '';
    // alert('Please Use Capital X and O');
  }
  c9.value === 'O' ? c9.style.color = 'darkblue' : c9.style.color = 'darkred';
  localStorage.setItem('c9', c9.value);
  win();
  e.preventDefault()
}
// Win check FUNCTION
function win() {
  // 123
  if (c1.value === 'X' && c2.value === 'X' && c3.value === 'X') {
    messageToPlayer.textContent = 'Player ONE YOU WIN GAME OVER!!!!';
    player1Scr.textContent = Number(player1Scr.textContent) + 1;
    allCells.forEach(function (cell) {
      cell.disabled = true;
    })
  }
  if (c1.value === 'O' && c2.value === 'O' && c3.value === 'O') {
    messageToPlayer.textContent = 'Player TWO YOU WIN GAME OVER!!!!';
    player2Scr.textContent = Number(player2Scr.textContent) + 1;
    allCells.forEach(function (cell) {
      cell.disabled = true;
    })
  }
  //456
  if (c4.value === 'X' && c5.value === 'X' && c6.value === 'X') {
    messageToPlayer.textContent = 'Player ONE YOU WIN GAME OVER!!!!';
    player1Scr.textContent = Number(player1Scr.textContent) + 1;
    allCells.forEach(function (cell) {
      cell.disabled = true;
    })
  }
  if (c4.value === 'O' && c5.value === 'O' && c6.value === 'O') {
    messageToPlayer.textContent = 'Player TWO YOU WIN GAME OVER!!!!';
    player2Scr.textContent = Number(player2Scr.textContent) + 1;
    allCells.forEach(function (cell) {
      cell.disabled = true;
    })
  }
  //789
  if (c7.value === 'X' && c8.value === 'X' && c9.value === 'X') {
    messageToPlayer.textContent = 'Player ONE YOU WIN GAME OVER!!!!';
    player1Scr.textContent = Number(player1Scr.textContent) + 1;
    allCells.forEach(function (cell) {
      cell.disabled = true;
    })
  }
  if (c7.value === 'O' && c8.value === 'O' && c9.value === 'O') {
    messageToPlayer.textContent = 'Player TWO YOU WIN GAME OVER!!!!';
    player2Scr.textContent = Number(player2Scr.textContent) + 1;
    allCells.forEach(function (cell) {
      cell.disabled = true;
    })
  }
  //147
  if (c1.value === 'X' && c4.value === 'X' && c7.value === 'X') {
    messageToPlayer.textContent = 'Player ONE YOU WIN GAME OVER!!!!';
    player1Scr.textContent = Number(player1Scr.textContent) + 1;
    allCells.forEach(function (cell) {
      cell.disabled = true;
    })
  }
  if (c1.value === 'O' && c4.value === 'O' && c7.value === 'O') {
    messageToPlayer.textContent = 'Player TWO YOU WIN GAME OVER!!!!';
    player2Scr.textContent = Number(player2Scr.textContent) + 1;
    allCells.forEach(function (cell) {
      cell.disabled = true;
    })
  }
  //258
  if (c2.value === 'X' && c5.value === 'X' && c8.value === 'X') {
    messageToPlayer.textContent = 'Player ONE YOU WIN GAME OVER!!!!';
    player1Scr.textContent = Number(player1Scr.textContent) + 1;
    allCells.forEach(function (cell) {
      cell.disabled = true;
    })
  }
  if (c2.value === 'O' && c5.value === 'O' && c8.value === 'O') {
    messageToPlayer.textContent = 'Player TWO YOU WIN GAME OVER!!!!';
    player2Scr.textContent = Number(player2Scr.textContent) + 1;
    allCells.forEach(function (cell) {
      cell.disabled = true;
    })
  }
  //369
  if (c3.value === 'X' && c6.value === 'X' && c9.value === 'X') {
    messageToPlayer.textContent = 'Player ONE YOU WIN GAME OVER!!!!';
    player1Scr.textContent = Number(player1Scr.textContent) + 1;
    allCells.forEach(function (cell) {
      cell.disabled = true;
    })
  }
  if (c3.value === 'O' && c6.value === 'O' && c9.value === 'O') {
    messageToPlayer.textContent = 'Player TWO YOU WIN GAME OVER!!!!';
    player2Scr.textContent = Number(player2Scr.textContent) + 1;
    allCells.forEach(function (cell) {
      cell.disabled = true;
    })
  }
  //159
  if (c1.value === 'X' && c5.value === 'X' && c9.value === 'X') {
    messageToPlayer.textContent = 'Player ONE YOU WIN GAME OVER!!!!';
    player1Scr.textContent = Number(player1Scr.textContent) + 1;
    allCells.forEach(function (cell) {
      cell.disabled = true;
    })
  }
  if (c1.value === 'O' && c5.value === 'O' && c9.value === 'O') {
    messageToPlayer.textContent = 'Player TWO YOU WIN GAME OVER!!!!';
    player2Scr.textContent = Number(player2Scr.textContent) + 1;
    allCells.forEach(function (cell) {
      cell.disabled = true;
    })
  }
  //357
  if (c3.value === 'X' && c5.value === 'X' && c7.value === 'X') {
    messageToPlayer.textContent = 'Player ONE YOU WIN GAME OVER!!!!';
    player1Scr.textContent = Number(player1Scr.textContent) + 1;
    allCells.forEach(function (cell) {
      cell.disabled = true;
    })
  }
  if (c3.value === 'O' && c5.value === 'O' && c7.value === 'O') {
    messageToPlayer.textContent = 'Player TWO YOU WIN GAME OVER!!!!';
    player2Scr.textContent = Number(player2Scr.textContent) + 1;
    allCells.forEach(function (cell) {
      cell.disabled = true;
    })
  }
  localStorage.setItem('player1Scr', player1Scr.textContent);
  localStorage.setItem('player2Scr', player2Scr.textContent);


  // diplaying message draw no one win
  const cellsWithValue = [];
  allCells.forEach(function (cell) {
    if (cell.value === 'X' || cell.value === 'O') {
      cellsWithValue.push(cell.value);
    }
    if (cellsWithValue.length === 9 && messageToPlayer != '') {
      messageToPlayer.textContent = 'DRAW NO ONE WIN';
      allCells.forEach(function (cell) {
        cell.disabled = true;
      })
    }
    console.log(cellsWithValue);
  })

};
