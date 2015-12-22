function PlayerInfo (name, color,imageUrl) {
  this.name = name;
  this.color = color;
  this.imageUrl = imageUrl;
  this.numberOfChurros = 15;
  this.numberOfCupcakes = 5;
  this.numberOfIceCreamSundaes = 4;
  this.sugar = 0;
  this.batter = 0;
  this.sprinkles = 0;
  this.frosting = 0;
  this.icecream = 0;
}

my = {};

player1 = new PlayerInfo('King Kandy', 'rgb(255, 255, 0)','graphics/King_kandy.jpg');
player2 = new PlayerInfo('Lord Licorice', 'rgb(255, 0, 0)','graphics/Lord-Licorice.png');
player3 = new PlayerInfo('Queen Frostine', 'rgb(0, 0, 255)','graphics/queenFrostine.jpg');
player4 = new PlayerInfo('Gloppy', 'rgb(0, 0, 0)','graphics/gloppy.png');
var playerInfo = [player1,player2,player3,player4];
my.currentPlayer = 0;
my.dessertLocation = '';
my.churroLocation = '';
my.playersTurnColor = '';
my.playersTurnName = '';
my.currentPlayerFieldset = $('#currentPlayer');

my.$gameBoard = $('#gameBoard');

//my.totalPlayers = Number(prompt('How many players are playing?'))-1

my.totalPlayers = 3;

$(function(){
var hasTouch = 'ontouchstart' in window;

my.currentPlayerFieldset.empty();
my.currentPlayerFieldset.css('background-color',playerInfo[my.currentPlayer].color);
my.currentPlayerFieldset.append('<img class="currentPlayerImage" src='+playerInfo[my.currentPlayer].imageUrl+'>');

$('#startNewGame').click(function() {
  localStorage.clear();
})

my.currentGame = localStorage.getItem('currentGame');

if(my.currentGame) {
  my.$gameBoard.html(my.currentGame);
  playerInfo = [];
  playerInfo = JSON.parse(localStorage.getItem('currentPlayerInfo'));
  console.log('here',playerInfo);
  my.currentPlayer = localStorage.getItem('currentPlayer');
  my.currentPlayerFieldset.empty();
  my.currentPlayerFieldset.css('background-color',playerInfo[my.currentPlayer].color);
  my.currentPlayerFieldset.append('<img class="currentPlayerImage" src='+playerInfo[my.currentPlayer].imageUrl+'>');
}

var $tiles = $('.check');
// Checks if on a touch screen device
if (hasTouch) {
  $('.churroLocation').on('touchstart', function() {
    $thisLocation = $(this);
    my.churroLocation = $thisLocation.attr('id');
  });
  $('.dessertLocation').on('touchstart', function() {
    $thisLocation = $(this);
    my.dessertLocation = $thisLocation.attr('id');
  });
  $tiles.on('touchstart',checkButton);
} else {
  $('.churroLocation').on('click', function() {
    $thisLocation = $(this);
    my.churroLocation = $thisLocation.attr('id');
  });
  $('.dessertLocation').on('click', function() {
    $thisLocation = $(this);
    my.dessertLocation = $thisLocation.attr('id');
  });
  $tiles.on('click',checkButton);
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

  if(my.churroLocation) {
    if (playerInfo[my.currentPlayer].numberOfChurros == 0) {
      alert('You have ran out of churros sorry');
    } else if (my.churroLocation == 'locationTopLeftChurro') {
      road.upperLeft($tile,previousTile,nextTile,upperLeftTile, upperRightTile, bottomLeftTile, bottomRightTile,playerInfo[my.currentPlayer].color);

    } else if (my.churroLocation == 'locationTopRightChurro') {
      road.upperRight($tile,previousTile,nextTile,upperLeftTile, upperRightTile, bottomLeftTile, bottomRightTile,playerInfo[my.currentPlayer].color);

    } else if (my.churroLocation == 'locationMiddleLeftChurro') {
      road.middleLeft($tile,previousTile,nextTile,upperLeftTile, upperRightTile, bottomLeftTile, bottomRightTile,playerInfo[my.currentPlayer].color);

    } else if (my.churroLocation == 'locationMiddleRightChurro') {
      road.middleRight($tile,previousTile,nextTile,upperLeftTile, upperRightTile, bottomLeftTile, bottomRightTile,playerInfo[my.currentPlayer].color);

    } else if (my.churroLocation == 'locationBottomLeftChurro') {
      road.bottomLeft($tile,previousTile,nextTile,upperLeftTile, upperRightTile, bottomLeftTile, bottomRightTile,playerInfo[my.currentPlayer].color);
    } else if (my.churroLocation == 'locationBottomRightChurro') {
      road.bottomRight($tile,previousTile,nextTile,upperLeftTile, upperRightTile, bottomLeftTile, bottomRightTile,playerInfo[my.currentPlayer].color);
    } else {
      console.log('truthy');
    }

} else if (my.dessertLocation) {
  var straightAboveTile = $('#xy'+rightX.toString()+ straightAboveY.toString());
  var straightBelowTile = $('#xy'+leftX.toString()+ straightBelowY.toString());
  var previousUpperLeftTile = $('#xy'+leftX.toString()+upperY.toString());
  var nextUpperRightTile = $('#xy'+nextLeftX.toString()+upperY.toString());
  var previousBottomLeftTile = $('#xy'+previousLeftX.toString()+bottomY.toString());
  var nextBottomRightTile = $('#xy'+rightX.toString()+bottomY.toString());
  if (playerInfo[my.currentPlayer].numberOfCupcakes == 0) {
    alert('You have ran out of cupcakes sorry');
  } else if (my.dessertLocation == 'locationTopDessert') {
    building.upper($tile,previousTile,nextTile,upperLeftTile, upperRightTile, bottomLeftTile, bottomRightTile,straightAboveTile,playerInfo[my.currentPlayer].color);

  } else if (my.dessertLocation == 'locationTopRightDessert') {

    building.topRight($tile,previousTile,nextTile,upperLeftTile, upperRightTile, bottomLeftTile, bottomRightTile,nextUpperRightTile,playerInfo[my.currentPlayer].color);


  } else if (my.dessertLocation == 'locationTopLeftDessert') {
    building.topLeft($tile,previousTile,nextTile,upperLeftTile, upperRightTile, bottomLeftTile, bottomRightTile,previousUpperLeftTile,playerInfo[my.currentPlayer].color);


  } else if (my.dessertLocation == 'locationBottomDessert') {
    building.bottom($tile,previousTile,nextTile,upperLeftTile, upperRightTile, bottomLeftTile, bottomRightTile,straightBelowTile,playerInfo[my.currentPlayer].color);


  } else if (my.dessertLocation == 'locationBottomLeftDessert') {
    building.bottomLeft($tile,previousTile,nextTile,upperLeftTile, upperRightTile, bottomLeftTile, bottomRightTile,previousBottomLeftTile,playerInfo[my.currentPlayer].color);


  } else if (my.dessertLocation == 'locationBottomRightDessert') {
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

my.dessertLocation = '';
my.churroLocation = '';
localStorage.setItem('currentGame', my.$gameBoard.html() );
localStorage.setItem('currentPlayerInfo',JSON.stringify(playerInfo));
localStorage.setItem('currentPlayer', my.currentPlayer);
$(':radio').removeAttr('checked');

}
})
