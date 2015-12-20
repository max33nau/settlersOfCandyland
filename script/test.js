function PlayerInfo (name, color) {
  this.name = name;
  this.color = color;
  this.numberOfChurros = 15;
  this.numberOfCupcakes = 5;
  this.numberOfIceCreamSundaes = 4;
}

function findPreviousTile($tile) {
  var leftNumber = Number($tile.attr('id').slice(3))-1;
  var tileLocation = $('#hex'+leftNumber.toString());
  return tileLocation;
}


my = {};

player1 = new PlayerInfo('King Kandy', 'rgb(255, 255, 0)');
player2 = new PlayerInfo('Lord Licorice', 'rgb(255, 0, 0)');
player3 = new PlayerInfo('Queen Frostine', 'rgb(0, 0, 255)');
player4 = new PlayerInfo('Gloppy', 'rgb(0, 0, 0)');
playerInfo = [player1,player2,player3,player4];
my.currentPlayer = -1;

my.playersTurnColor = '';
my.playersTurnName = '';

//my.totalPlayers = Number(prompt('How many players are playing?'))-1

my.totalPlayers = 3;
function rollTheDice() {
  if(my.currentPlayer == my.totalPlayers) {
    my.currentPlayer = -1;
  }
  my.currentPlayer++;

}
my.currentPlayer = 2;
$tiles = $('.check');
$tiles.click(checkButton)
function checkButton() {
  my.radioButtonRoad=$('input[type="radio"][name="roadLocation"]:checked').val();
  my.radioButtonBuilding=$('input[type="radio"][name="buildingLocation"]:checked').val();
  $tile = $(this).parent();
  var xCoord = Number($tile.attr('id').slice(2,3));
  var yCoord = Number($tile.attr('id').slice(3,4));
  var upperY = yCoord - 1;
  var rightX = xCoord + 1;
  var leftX = xCoord - 1;
  var bottomY = yCoord + 1;

  var upperLeftTile = $('#xy'+xCoord.toString()+upperY.toString());
  var upperRightTile = $('#xy'+rightX.toString()+upperY.toString());
  var previousTile = $('#xy'+leftX.toString()+yCoord.toString());
  var nextTile = $('#xy'+rightX.toString()+yCoord.toString());
  var bottomLeftTile = $('#xy'+leftX.toString()+bottomY.toString());
  var bottomRightTile = $('#xy'+rightX.toString()+bottomY.toString());

  console.log('specific tile', $tile);
  console.log('upper left', upperLeftTile);
  console.log('upper right', upperRightTile);

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
      $tile.append('<div class="bottomRightRoad"></div>');
      $tile.find('.bottomRightRoad').css('background-color',playerInfo[my.currentPlayer].color);
      playerInfo[my.currentPlayer].numberOfChurros--;
    } else {
      console.log('truthy');
    }

} else if (my.radioButtonBuilding) {
  if (playerInfo[my.currentPlayer].numberOfCupcakes == 0) {
    alert('You have ran out of cupcakes sorry');
  } else if (my.radioButtonBuilding == 'upper') {

    $tile.append('<div class="upperBuilding "></div>');
    $tile.find('.upperBuilding').css('background-color',playerInfo[my.currentPlayer].color);
    playerInfo[my.currentPlayer].numberOfCupcakes--;


  } else if (my.radioButtonBuilding == 'topRight') {

    $tile.append('<div class="topRightBuilding"></div>');
    $tile.find('.topRightBuilding').css('background-color',playerInfo[my.currentPlayer].color);
    playerInfo[my.currentPlayer].numberOfCupcakes--;


  } else if (my.radioButtonBuilding == 'topLeft') {
    $tile.append('<div class="topLeftBuilding"></div>');
    $tile.find('.topLeftBuilding').css('background-color',playerInfo[my.currentPlayer].color);
    playerInfo[my.currentPlayer].numberOfCupcakes--;


  } else if (my.radioButtonBuilding == 'bottom') {
    $tile.append('<div class="bottomBuilding"></div>');
    $tile.find('.bottomBuilding').css('background-color',playerInfo[my.currentPlayer].color);
    playerInfo[my.currentPlayer].numberOfCupcakes--;


  } else if (my.radioButtonBuilding == 'bottomLeft') {
    $tile.append('<div class="bottomLeftBuilding"></div>');
    $tile.find('.bottomLeftBuilding').css('background-color',playerInfo[my.currentPlayer].color);
    playerInfo[my.currentPlayer].numberOfCupcakes--;


  } else if (my.radioButtonBuilding == 'bottomRight') {
    $tile.append('<div class="bottomRightBuilding"></div>');
    $tile.find('.bottomRightBuilding').css('background-color',playerInfo[my.currentPlayer].color);
    playerInfo[my.currentPlayer].numberOfCupcakes--;


  } else {
    console.log('truthy');
  }

} else {
  alert('You did not make a selection, please try again.');
}

$(':radio').removeAttr('checked');

}
