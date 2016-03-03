$('document').ready(function(){
  var user;
  var computer;

  $('#cir').on('click', function(){
    user = 'O';
    computer = 'X';
    $('#choose').hide();
    $('#board').show();
  });
  $('#ex').on('click', function(){
    user = 'X';
    computer = 'O';
    $('#choose').hide();
    $('#board').show();
  });

  // board, row and col variables
  var board = [[],[],[]];
  var row;
  var col;

  function getRowCol (buttonId) {
    row = parseInt(buttonId[1]);
    col = parseInt(buttonId[2]);
  }

  function getButtonId (a, b) {
    return 'c' + a + b;
  }

  function resetBoard() {
    board = [[],[],[]];
    setTimeout(function(){
      $('#board button').text('');
      $('#board button').removeAttr('disabled');
      $('#board button').css('color', 'dimgray');
    }, 5000);
  }

  function isWin () {
    // 8 win plays
    // row 0
    if (board[0][0] === board [0][1] && board [0][1] === board[0][2] && board[0][0] !== undefined) {
      $('#board button').attr('disabled', 'disabled');
      $('#c' + '0' + '0').css('color', 'limegreen');
      $('#c' + '0' + '1').css('color', 'limegreen');
      $('#c' + '0' + '2').css('color', 'limegreen');
      resetBoard();
      return true;
    }
    // row 1
    if (board[1][0] == board [1][1] && board [1][1] == board[1][2] && board[1][0] !== undefined) {
      $('#board button').attr('disabled', 'disabled');
      $('#c' + '1' + '0').css('color', 'limegreen');
      $('#c' + '1' + '1').css('color', 'limegreen');
      $('#c' + '1' + '2').css('color', 'limegreen');
      resetBoard();
      return true;
    }
    // row 2
    if (board[2][0] === board [2][1] && board [2][1] === board[2][2] && board[2][0] !== undefined) {
      $('#board button').attr('disabled', 'disabled');
      $('#c' + '2' + '0').css('color', 'limegreen');
      $('#c' + '2' + '1').css('color', 'limegreen');
      $('#c' + '2' + '2').css('color', 'limegreen');
      resetBoard();
      return true;
    }
    // col 0
    if (board[0][0] === board [1][0] && board [0][0] === board[2][0] && board[0][0] !== undefined) {
      $('#board button').attr('disabled', 'disabled');
      $('#c' + '0' + '0').css('color', 'limegreen');
      $('#c' + '1' + '0').css('color', 'limegreen');
      $('#c' + '2' + '0').css('color', 'limegreen');
      resetBoard();
      return true;
    }
    // col 1
    if (board[0][1] === board [1][1] && board [1][1] === board[2][1] && board[0][1] !== undefined) {
      $('#board button').attr('disabled', 'disabled');
      $('#c' + '0' + '1').css('color', 'limegreen');
      $('#c' + '1' + '1').css('color', 'limegreen');
      $('#c' + '2' + '1').css('color', 'limegreen');
      resetBoard();
      return true;
    }
    // col 2
    if (board[0][2] === board [1][2] && board [1][2] === board[2][2] && board[0][2] !== undefined) {
      $('#board button').attr('disabled', 'disabled');
      $('#c' + '0' + '2').css('color', 'limegreen');
      $('#c' + '1' + '2').css('color', 'limegreen');
      $('#c' + '2' + '2').css('color', 'limegreen');
      resetBoard();
      return true;
    }
    // diag 0
    if (board[0][0] === board [1][1] && board [1][1] === board[2][2] && board[0][0] !== undefined) {
      $('#board button').attr('disabled', 'disabled');
      $('#c' + '0' + '0').css('color', 'limegreen');
      $('#c' + '1' + '1').css('color', 'limegreen');
      $('#c' + '2' + '2').css('color', 'limegreen');
      resetBoard();
      return true;
    }
    // diag 1
    if (board[0][2] === board [1][1] && board [1][1] === board[2][0] && board[0][2] !== undefined) {
      $('#board button').attr('disabled', 'disabled');
      $('#c' + '0' + '2').css('color', 'limegreen');
      $('#c' + '1' + '1').css('color', 'limegreen');
      $('#c' + '2' + '0').css('color', 'limegreen');
      resetBoard();
      return true;
    }
    return false;
  }

  // function computer next move
  // random or smart choice?
  // random
  function comPlays (newBoard) {
    // check for empty cells
    var options = [];
    for (var i = 0; i < newBoard.length; i++) {
      for (var j = 0; j < newBoard.length; j++) {
        if (newBoard[i][j] !== 'O' && newBoard[i][j] !== 'X') {
          options.push([i, j]);
        }
      }
    }
    if (options.length > 0) {
      // choose the play
      var play = options[Math.floor((Math.random() * options.length) + 1) - 1];

      var buttonId = getButtonId(play[0], play[1]);
      $('#' + buttonId).text(computer);
      board[play[0]][play[1]] = computer;
      $('#' + buttonId).attr('disabled', 'disabled');
      // check if win
      isWin();

      if (options.length === 1) {
        resetBoard();
      }
    } else {
      resetBoard();
    }

  }

  // user plays
  $('#board button').on('click', function(){
    // add text to button 'X' or 'O'
    $(this).text(user);

    // add value to board var
    var id = $(this).attr('id');
    getRowCol(id);
    board[row][col] = user;
    if(!isWin()){
      // disable button
      $(this).attr('disabled', 'disabled');
      // call computer function
      comPlays(board);
    }

  });

});
