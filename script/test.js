function PlayerInfo (name, color) {
  this.name = name;
  this.color = color;
}



my = {};

my.player1 = new PlayerInfo('King Kandy', 'yellow');
my.player2 = new PlayerInfo('Lord Licorice', 'red');
my.player3 = new PlayerInfo('Queen Frostine', 'blue');
my.player4 = new PlayerInfo('Gloppy', 'black');
my.currentPlayer = 0;
my.playersTurnColor = '';
my.playersTurnName = '';



function rollTheDice() {
  my.currentPlayer++;
  if (my.currentPlayer == 1) {
    my.playersTurnColor = my.player1.color;
    my.playersTurnName = my.player1.name;
    console.log(my.playersTurnColor);
  } else if (my.currentPlayer == 2) {
    my.playersTurnColor = my.player2.color;
    my.playersTurnName = my.player2.name;
    console.log(my.currentPlayer);
  } else if (my.currentPlayer == 3) {
    my.playersTurnColor = my.player3.color;
    my.playersTurnName = my.player3.name;
    console.log(my.currentPlayer);
  } else if (my.currentPlayer == 4) {
    my.playersTurnColor = my.player4.color;
    my.playersTurnName = my.player4.name;
    console.log(my.currentPlayer);
    my.currentPlayer = 0;
  } else {
    alert('something is wrong');
  }
  console.log(my.playersTurnColor);
}





$tiles = $('.tiles');
//console.log($tiles);
$tiles.click(checkButton)

function checkButton() {
  my.radioButtonRoad=$('input[type="radio"][name="roadLocation"]:checked').val();


  if (my.radioButtonRoad == 'topLeft') {
    $tile = $(this);
    $tile.append('<div class="topLeftRoad"></div>');
    //console.log($('.topLeftRoad'));
    $tile.find('.topLeftRoad').css('background-color',my.playersTurnColor);
  } else if (my.radioButtonRoad == 'topRight') {
    $tile = $(this);
    $tile.append('<div class="topRightRoad"></div>');
    $tile.find('.topRightRoad').css('background-color',my.playersTurnColor);
  } else if (my.radioButtonRoad == 'middleLeft') {
    $tile = $(this);
    $tile.append('<div class="leftRoad"></div>');
    $tile.find('.leftRoad').css('background-color',my.playersTurnColor);
  } else if (my.radioButtonRoad == 'middleRight') {
    $tile = $(this);
    $tile.append('<div class="rightRoad"></div>');
    $tile.find('.rightRoad').css('background-color',my.playersTurnColor);
  } else if (my.radioButtonRoad == 'bottomLeft') {
    $tile = $(this);
    $tile.append('<div class="bottomLeftRoad"></div>');
    $tile.find('.bottomLeftRoad').css('background-color',my.playersTurnColor);
  } else if (my.radioButtonRoad == 'bottomRight') {
    $tile = $(this);
    $tile.append('<div class="bottomRightRoad"></div>');
    $tile.find('.bottomRightRoad').css('background-color',my.playersTurnColor);
  } else {
    alert('You did not select a road to add, please select a road and try again.')
  }

}
