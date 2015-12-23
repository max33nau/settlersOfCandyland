
my = {};

$(function(){
  my.currentPlayer = 0;
  my.dessertLocationClick = '';
  my.churroLocationClick = '';
  my.playersTurnColor = '';
  my.playersTurnName = '';
  my.currentPlayerFieldset = $('#currentPlayer');
  my.churroLocation = $('.churroLocation');
  console.log(my.churroLocation);
  my.dessertLocation = $('.dessertLocation');
  my.$gameBoard = $('#gameBoard');
  my.totalPlayers = 3;

var hasTouch = 'ontouchstart' in window;

my.currentPlayerFieldset.empty();
my.currentPlayerFieldset.css('background-color',playerInfo[my.currentPlayer].color);
my.currentPlayerFieldset.append('<img class="currentPlayerImage" src='+playerInfo[my.currentPlayer].imageUrl+'>');
my.churroLocation.css('background-color',playerInfo[my.currentPlayer].color);
my.dessertLocation.css('background-color',playerInfo[my.currentPlayer].color);

$('#startNewGame').click(function() {
  localStorage.clear();
  location.reload();
})

my.currentGame = localStorage.getItem('currentGame');

if(my.currentGame) {
  my.$gameBoard.html(my.currentGame);
  playerInfo = [];
  playerInfo = JSON.parse(localStorage.getItem('currentPlayerInfo'));
  console.log('here',playerInfo);
  my.currentPlayer = localStorage.getItem('currentPlayer');
  my.currentPlayerFieldset.empty();
  my.churroLocation.css('background-color',playerInfo[my.currentPlayer].color);
  my.dessertLocation.css('background-color',playerInfo[my.currentPlayer].color);
  my.currentPlayerFieldset.css('background-color',playerInfo[my.currentPlayer].color);
  my.currentPlayerFieldset.append('<img class="currentPlayerImage" src='+playerInfo[my.currentPlayer].imageUrl+'>');
}

var $tiles = $('.check');
// Checks if on a touch screen device
if (hasTouch) {
  $('.churroLocation').on('touchend', function() {
    $thisLocation = $(this);
    my.churroLocationClick = $thisLocation.attr('id');
  });
  $('.dessertLocation').on('touchend', function() {
    $thisLocation = $(this);
    my.dessertLocationClick = $thisLocation.attr('id');
  });
  $tiles.on('touchend',checkButton);
  $('#rollDiceButton').on('touchend',diceRolled);

} else {
  $('.churroLocation').on('click', function() {
    $thisLocation = $(this);
    my.churroLocationClick = $thisLocation.attr('id');
  });
  $('.dessertLocation').on('click', function() {
    $thisLocation = $(this);
    my.dessertLocationClick = $thisLocation.attr('id');
  });
  $tiles.on('click',checkButton);
  $('#rollDiceButton').on('click',diceRolled);
}

function diceRolled() {
  var $die1 = $('#die1');
  var $die2 = $('#die2');
  var $displayTotal = $('#displayTotal');
  my.currentPlayerFieldset.empty();
  console.log('button clicked');
  var roll1 = Math.floor(Math.random() * 6) +1;
  var roll2 = Math.floor(Math.random() * 6) +1;
  var total = roll1 + roll2;
  $die1.text(roll1);
  $die2.text(roll2);
  $displayTotal.text(total);
  if(my.currentPlayer == my.totalPlayers) {
    my.currentPlayer = -1;
   }
  my.currentPlayer++;
  my.churroLocation.css('background-color',playerInfo[my.currentPlayer].color);
  my.dessertLocation.css('background-color',playerInfo[my.currentPlayer].color);
  my.currentPlayerFieldset.css('background-color',playerInfo[my.currentPlayer].color);
  my.currentPlayerFieldset.append('<img class="currentPlayerImage" src='+playerInfo[my.currentPlayer].imageUrl+'>');
}
function checkButton() {
  my.thiefButton=$('input[type="radio"][name="thiefLocation"]:checked').val();
  $tile = $(this).parent();
  var xCoord = Number($tile.attr('id').slice(2,3));
  var yCoord = Number($tile.attr('id').slice(3,4));
  var upperY = yCoord - 1;
  var rightX = xCoord + 1;
  var leftX = xCoord - 1;
  var bottomY = yCoord + 1;
  var straightAboveY = yCoord -2;
  var nextLeftX = xCoord +2;
  var previousLeftX = xCoord -2;
  var straightBelowY = yCoord + 2;

  var upperLeftTile = $('#xy'+xCoord.toString()+upperY.toString());
  var upperRightTile = $('#xy'+rightX.toString()+upperY.toString());
  var previousTile = $('#xy'+leftX.toString()+yCoord.toString());
  var nextTile = $('#xy'+rightX.toString()+yCoord.toString());
  var bottomLeftTile = $('#xy'+leftX.toString()+bottomY.toString());
  var bottomRightTile = $('#xy'+xCoord.toString()+bottomY.toString());
  console.log(my.churroLocationClick);
  if(my.churroLocationClick) {
    if (playerInfo[my.currentPlayer].numberOfChurros == 0) {
      alert('You have ran out of churros sorry');
    } else if (my.churroLocationClick == 'locationTopLeftChurro') {
      road.upperLeft($tile,previousTile,nextTile,upperLeftTile, upperRightTile, bottomLeftTile, bottomRightTile,playerInfo[my.currentPlayer].color);

    } else if (my.churroLocationClick == 'locationTopRightChurro') {
      road.upperRight($tile,previousTile,nextTile,upperLeftTile, upperRightTile, bottomLeftTile, bottomRightTile,playerInfo[my.currentPlayer].color);

    } else if (my.churroLocationClick == 'locationMiddleLeftChurro') {
      road.middleLeft($tile,previousTile,nextTile,upperLeftTile, upperRightTile, bottomLeftTile, bottomRightTile,playerInfo[my.currentPlayer].color);

    } else if (my.churroLocationClick == 'locationMiddleRightChurro') {
      road.middleRight($tile,previousTile,nextTile,upperLeftTile, upperRightTile, bottomLeftTile, bottomRightTile,playerInfo[my.currentPlayer].color);

    } else if (my.churroLocationClick == 'locationBottomLeftChurro') {
      road.bottomLeft($tile,previousTile,nextTile,upperLeftTile, upperRightTile, bottomLeftTile, bottomRightTile,playerInfo[my.currentPlayer].color);
    } else if (my.churroLocationClick == 'locationBottomRightChurro') {
      road.bottomRight($tile,previousTile,nextTile,upperLeftTile, upperRightTile, bottomLeftTile, bottomRightTile,playerInfo[my.currentPlayer].color);
    } else {
      console.log('truthy');
    }

} else if (my.dessertLocationClick) {
  var straightAboveTile = $('#xy'+rightX.toString()+ straightAboveY.toString());
  var straightBelowTile = $('#xy'+leftX.toString()+ straightBelowY.toString());
  var previousUpperLeftTile = $('#xy'+leftX.toString()+upperY.toString());
  var nextUpperRightTile = $('#xy'+nextLeftX.toString()+upperY.toString());
  var previousBottomLeftTile = $('#xy'+previousLeftX.toString()+bottomY.toString());
  var nextBottomRightTile = $('#xy'+rightX.toString()+bottomY.toString());
  if (playerInfo[my.currentPlayer].numberOfCupcakes == 0) {
    alert('You have ran out of cupcakes sorry');
  } else if (my.dessertLocationClick == 'locationTopDessert') {
    building.upper($tile,previousTile,nextTile,upperLeftTile, upperRightTile, bottomLeftTile, bottomRightTile,straightAboveTile,playerInfo[my.currentPlayer].color);

  } else if (my.dessertLocationClick == 'locationTopRightDessert') {

    building.topRight($tile,previousTile,nextTile,upperLeftTile, upperRightTile, bottomLeftTile, bottomRightTile,nextUpperRightTile,playerInfo[my.currentPlayer].color);


  } else if (my.dessertLocationClick == 'locationTopLeftDessert') {
    building.topLeft($tile,previousTile,nextTile,upperLeftTile, upperRightTile, bottomLeftTile, bottomRightTile,previousUpperLeftTile,playerInfo[my.currentPlayer].color);


  } else if (my.dessertLocationClick == 'locationBottomDessert') {
    building.bottom($tile,previousTile,nextTile,upperLeftTile, upperRightTile, bottomLeftTile, bottomRightTile,straightBelowTile,playerInfo[my.currentPlayer].color);


  } else if (my.dessertLocationClick == 'locationBottomLeftDessert') {
    building.bottomLeft($tile,previousTile,nextTile,upperLeftTile, upperRightTile, bottomLeftTile, bottomRightTile,previousBottomLeftTile,playerInfo[my.currentPlayer].color);


  } else if (my.dessertLocationClick == 'locationBottomRightDessert') {
    building.bottomRight($tile,previousTile,nextTile,upperLeftTile, upperRightTile, bottomLeftTile, bottomRightTile,nextBottomRightTile,playerInfo[my.currentPlayer].color);

  }  else {
    console.log('truthy');
  }

} else if (my.thiefButton == 'moveThief') {
  $thief = $('#thief');
  $thief.remove();
  $tile.append('<img id="thief" class="numbers" src="graphics/gingerbreadMan.gif">');

} else {
  alert('You did not make a selection, please try again.');
}

my.dessertLocationClick = '';
my.churroLocationClick = '';
localStorage.setItem('currentGame', my.$gameBoard.html() );
localStorage.setItem('currentPlayerInfo',JSON.stringify(playerInfo));
localStorage.setItem('currentPlayer', my.currentPlayer);
$(':radio').removeAttr('checked');

}
})
