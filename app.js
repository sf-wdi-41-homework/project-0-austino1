$(document).ready(function () {

  console.log('Im on!');

  //for tracking and loging score
  var blueWin = 0;
  var redWin = 0;

  //placeholder to check if the game is over
  var winner = null;

  //
  $reset = $('#reset');

  var startOver = function () {
    $('.player').css({
      left: 0,
    });
    $('.player2').css({
      left: 0,
    });
    winner = null;
  };

  // how to move the player
  var p1Go = function (keypressEvent) {
    var keyCode = String.fromCharCode(keypressEvent.keyCode);
    var $player = $('[data-key="' + keyCode + '"]');
    var leftPosition = $player.offset().left;
    $player.css({
      left: leftPosition + 8,
    });
    if ($player.offset().left >= $('#track').width() - $player.width()) {
      winner = $player;
      blueWin++;
      startOver();
    }
  };

  var p2Go = function (keypressEvent2) {
    var keyCode2 = String.fromCharCode(keypressEvent2.keyCode2);
    var $player2 = $('[data-key="' + keyCode2 + '"]');
    var leftPosition2 = $player2.offset().left;
    $player2.css({
      left: leftPosition2 + 8,
    });
    if ($player2.offset().left >= $('#track').width() - $player2.width()) {
      winner = $player2;
      redWin++;
      startOver();
    }
  };

  var race = function () {
    $(window).on('keypress', function (event) {
      if (!winner) {
        p1Go(event);
        p2Go(event);
      }
    }
  );
    $reset.on('click', function () {
      startOver();
    });
  };
  race();
});
