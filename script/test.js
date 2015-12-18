function PlayerInfo (name, color) {
  this.name = name;
  this.color = color;
  this.numberOfChurros = 15;
  this.numberOfCupcakse = 5;
  this.numberOfIceCreamSundaes = 4;
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




function rollTheDice() {
  if(my.currentPlayer == playerInfo.length-1) {
    my.currentPlayer = -1;
  }
  my.currentPlayer++;

}

$tiles = $('.tiles');
$tiles.click(checkButton)

function checkButton() {
  my.radioButtonRoad=$('input[type="radio"][name="roadLocation"]:checked').val();
  $tile = $(this);

  var upperLeftNumber = Number($tile.attr('id').slice(3))-4;
  var leftNumber = Number($tile.attr('id').slice(3))-1;
  var rightNumber = Number($tile.attr('id').slice(3))+1;
  var upperRightNumber = Number($tile.attr('id').slice(3))-3;
  var bottomLeftNumber = Number($tile.attr('id').slice(3))+4;
  var bottomRightNumber = Number($tile.attr('id').slice(3))+5;
  var upperLeftTile = $('#hex'+upperLeftNumber.toString());
  var upperRightTile = $('#hex'+upperRightNumber.toString());
  var previousTile = $('#hex'+leftNumber.toString());
  var nextTile = $('#hex'+rightNumber.toString());
  var bottomLeftTile = $('#hex'+bottomLeftNumber.toString());
  var bottomRightTile = $('#hex'+bottomRightNumber.toString());

  // console.log()
  // if (playerInfo[my.currentPlayer].numberOfChurros == 0) {
  //   alert('You have ran out of churros sorry');
  // } else if (my.radioButtonRoad == 'topLeft') {
  //
  //   $tile.append('<div class="topLeftRoad "></div>');
  //   $tile.find('.topLeftRoad').css('background-color',playerInfo[my.currentPlayer].color);
  //   playerInfo[my.currentPlayer].numberOfChurros--;
  //
  // } else if (my.radioButtonRoad == 'topRight') {
  // //  $tile = $(this);
  //   $tile.append('<div class="topRightRoad"></div>');
  //   $tile.find('.topRightRoad').css('background-color',playerInfo[my.currentPlayer].color);
  //   playerInfo[my.currentPlayer].numberOfChurros--;
  //   console.log($tile.find('.topRightRoad').css('background-color'));
  //   console.log(playerInfo[my.currentPlayer].color);
  // } else if (my.radioButtonRoad == 'middleLeft') {
  // // //  $tile = $(this);
  // //   $tile.append('<div class="leftRoad"></div>');
  // //   $tile.find('.leftRoad').css('background-color',playerInfo[my.currentPlayer].color);
  // //   playerInfo[my.currentPlayer].numberOfChurros--;
  //   road.middleLeft($tile,playerInfo[my.currentPlayer].color)
  // } else if (my.radioButtonRoad == 'middleRight') {
  // //  $tile = $(this);
  //   if ($tile.next().find('.leftRoad').length <= 0 && $tile.find('.rightRoad').length <= 0) {
  //   $tile.append('<div class="rightRoad"></div>');
  //   $tile.find('.rightRoad').css('background-color',playerInfo[my.currentPlayer].color);
  //   playerInfo[my.currentPlayer].numberOfChurros--;
  // }
  //   else {
  //     console.log('no');
  //   }
  //
  // } else if (my.radioButtonRoad == 'bottomLeft') {
  // //  $tile = $(this);
  //   $tile.append('<div class="bottomLeftRoad"></div>');
  //   $tile.find('.bottomLeftRoad').css('background-color',playerInfo[my.currentPlayer].color);
  //   playerInfo[my.currentPlayer].numberOfChurros--;
  // } else if (my.radioButtonRoad == 'bottomRight') {
  // //  $tile = $(this);
  //   $tile.append('<div class="bottomRightRoad"></div>');
  //   $tile.find('.bottomRightRoad').css('background-color',playerInfo[my.currentPlayer].color);
  //   playerInfo[my.currentPlayer].numberOfChurros--;
  // } else {
  //   alert('You did not select a road to add, please select a road and try again.')
  // }

}
