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
my.currentPlayer = -1;

my.playersTurnColor = '';
my.playersTurnName = '';
my.currentPlayerFieldset = $('#currentPlayer');

my.$gameBoard = $('#gameBoard');

//my.totalPlayers = Number(prompt('How many players are playing?'))-1

my.totalPlayers = 3;

$(function(){

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

}

var $tiles = $('.check');
$tiles.click(checkButton)
function checkButton() {
  my.radioButtonRoad=$('input[type="radio"][name="roadLocation"]:checked').val();
  my.radioButtonBuilding=$('input[type="radio"][name="buildingLocation"]:checked').val();
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



  if(my.radioButtonRoad) {
    if (playerInfo[my.currentPlayer].numberOfChurros == 0) {
      alert('You have ran out of churros sorry');
    } else if (my.radioButtonRoad == 'topLeft') {
      road.upperLeft($tile,previousTile,nextTile,upperLeftTile, upperRightTile, bottomLeftTile, bottomRightTile,playerInfo[my.currentPlayer].color);

    } else if (my.radioButtonRoad == 'topRight') {
      road.upperRight($tile,previousTile,nextTile,upperLeftTile, upperRightTile, bottomLeftTile, bottomRightTile,playerInfo[my.currentPlayer].color);

    } else if (my.radioButtonRoad == 'middleLeft') {
      road.middleLeft($tile,previousTile,nextTile,upperLeftTile, upperRightTile, bottomLeftTile, bottomRightTile,playerInfo[my.currentPlayer].color);

    } else if (my.radioButtonRoad == 'middleRight') {
      road.middleRight($tile,previousTile,nextTile,upperLeftTile, upperRightTile, bottomLeftTile, bottomRightTile,playerInfo[my.currentPlayer].color);

    } else if (my.radioButtonRoad == 'bottomLeft') {
      road.bottomLeft($tile,previousTile,nextTile,upperLeftTile, upperRightTile, bottomLeftTile, bottomRightTile,playerInfo[my.currentPlayer].color);
    } else if (my.radioButtonRoad == 'bottomRight') {
      road.bottomRight($tile,previousTile,nextTile,upperLeftTile, upperRightTile, bottomLeftTile, bottomRightTile,playerInfo[my.currentPlayer].color);
    } else {
      console.log('truthy');
    }

} else if (my.radioButtonBuilding) {
  var straightAboveTile = $('#xy'+rightX.toString()+ straightAboveY.toString());
  var straightBelowTile = $('#xy'+leftX.toString()+ straightBelowY.toString());
  var previousUpperLeftTile = $('#xy'+leftX.toString()+upperY.toString());
  var nextUpperRightTile = $('#xy'+nextLeftX.toString()+upperY.toString());
  var previousBottomLeftTile = $('#xy'+previousLeftX.toString()+bottomY.toString());
  var nextBottomRightTile = $('#xy'+rightX.toString()+bottomY.toString());
  if (playerInfo[my.currentPlayer].numberOfCupcakes == 0) {
    alert('You have ran out of cupcakes sorry');
  } else if (my.radioButtonBuilding == 'upper') {
    building.upper($tile,previousTile,nextTile,upperLeftTile, upperRightTile, bottomLeftTile, bottomRightTile,straightAboveTile,playerInfo[my.currentPlayer].color);


  } else if (my.radioButtonBuilding == 'topRight') {

    building.topRight($tile,previousTile,nextTile,upperLeftTile, upperRightTile, bottomLeftTile, bottomRightTile,nextUpperRightTile,playerInfo[my.currentPlayer].color);


  } else if (my.radioButtonBuilding == 'topLeft') {
    building.topLeft($tile,previousTile,nextTile,upperLeftTile, upperRightTile, bottomLeftTile, bottomRightTile,previousUpperLeftTile,playerInfo[my.currentPlayer].color);


  } else if (my.radioButtonBuilding == 'bottom') {
    building.bottom($tile,previousTile,nextTile,upperLeftTile, upperRightTile, bottomLeftTile, bottomRightTile,straightBelowTile,playerInfo[my.currentPlayer].color);


  } else if (my.radioButtonBuilding == 'bottomLeft') {
    building.bottomLeft($tile,previousTile,nextTile,upperLeftTile, upperRightTile, bottomLeftTile, bottomRightTile,previousBottomLeftTile,playerInfo[my.currentPlayer].color);


  } else if (my.radioButtonBuilding == 'bottomRight') {
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


localStorage.setItem('currentGame', my.$gameBoard.html() );
localStorage.setItem('currentPlayerInfo',JSON.stringify(playerInfo));
localStorage.setItem('currentPlayer', my.currentPlayer);
$(':radio').removeAttr('checked');

}
})
