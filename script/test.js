function PlayerInfo (name, color) {
  this.name = name;
  this.color = color;
  this.numberOfChurros = 15;
  this.numberOfCupcakse = 5;
  this.numberOfIceCreamSundaes = 4;
}



my = {};

player1 = new PlayerInfo('King Kandy', 'yellow');
player2 = new PlayerInfo('Lord Licorice', 'red');
player3 = new PlayerInfo('Queen Frostine', 'blue');
player4 = new PlayerInfo('Gloppy', 'black');
playerInfo = [player1,player2,player3,player4];
my.currentPlayer = -1;

my.playersTurnColor = '';
my.playersTurnName = '';




function rollTheDice() {
  my.currentPlayer++;

}

$tiles = $('.tiles');
$tiles.click(checkButton)

function checkButton() {
  my.radioButtonRoad=$('input[type="radio"][name="roadLocation"]:checked').val();
  if (playerInfo[my.currentPlayer].numberOfChurros == 0) {
    alert('You have ran out of churros sorry');
  } else if (my.radioButtonRoad == 'topLeft') {
    $tile = $(this);
    $tile.append('<div class="topLeftRoad"></div>');
    $tile.find('.topLeftRoad').css('background-color',playerInfo[my.currentPlayer].color);
    playerInfo[my.currentPlayer].numberOfChurros--;
  } else if (my.radioButtonRoad == 'topRight') {
    $tile = $(this);
    $tile.append('<div class="topRightRoad"></div>');
    $tile.find('.topRightRoad').css('background-color',playerInfo[my.currentPlayer].color);
    playerInfo[my.currentPlayer].numberOfChurros--;
  } else if (my.radioButtonRoad == 'middleLeft') {
    $tile = $(this);
    $tile.append('<div class="leftRoad"></div>');
    $tile.find('.leftRoad').css('background-color',playerInfo[my.currentPlayer].color);
    playerInfo[my.currentPlayer].numberOfChurros--;
  } else if (my.radioButtonRoad == 'middleRight') {
    $tile = $(this);
    $tile.append('<div class="rightRoad"></div>');
    $tile.find('.rightRoad').css('background-color',playerInfo[my.currentPlayer].color);
    playerInfo[my.currentPlayer].numberOfChurros--;
  } else if (my.radioButtonRoad == 'bottomLeft') {
    $tile = $(this);
    $tile.append('<div class="bottomLeftRoad"></div>');
    $tile.find('.bottomLeftRoad').css('background-color',playerInfo[my.currentPlayer].color);
    playerInfo[my.currentPlayer].numberOfChurros--;
  } else if (my.radioButtonRoad == 'bottomRight') {
    $tile = $(this);
    $tile.append('<div class="bottomRightRoad"></div>');
    $tile.find('.bottomRightRoad').css('background-color',playerInfo[my.currentPlayer].color);
    playerInfo[my.currentPlayer].numberOfChurros--;
  } else {
    alert('You did not select a road to add, please select a road and try again.')
  }

}
