//var totalPlayers = Number(prompt('How many players are playing?'))-1;
function PlayerInfo (name, color,imageUrl, cupCakeSVG, iceCreamSVG,userName) {
  this.name = name;
  this.color = color;
  this.imageUrl = imageUrl;
  this.numberOfChurros = 15;
  this.numberOfCupcakes = 5;
  this.numberOfIceCreamSundaes = 4;
  this.cupCake = cupCakeSVG;
  this.iceCream = iceCreamSVG;
  this.userName = userName;
}

var gameInfo = {};
var playerInfo = [];
gameInfo.player1name = '';
gameInfo.player2name = '';
gameInfo.player3name = '';
gameInfo.player4name = '';
gameInfo.totalPlayers = 0;

function resetGame() {
  localStorage.clear();
  location.reload();
}

function checkNumberOfPlayers() {
  $thisNumber = $(this);
  if($thisNumber.text() =='3') {
    $('#player4name').hide();
    $('#gloppy').hide();
  } else if ($thisNumber.text() =='4') {
    $('#player4name').show();
    $('#gloppy').show();
  } else {
    console.log('something is wrong');
  }
  gameInfo.totalPlayers = Number($thisNumber.text());
}

function checkPlayerNames() {
  gameInfo.player1name = $('#player1name').val();
  gameInfo.player2name = $('#player2name').val();
  gameInfo.player3name = $('#player3name').val();
  gameInfo.player4name = $('#player4name').val();

  if(gameInfo.totalPlayers == 3) {
    if(gameInfo.player1name && gameInfo.player2name && gameInfo.player3name) {
      var player1 = new PlayerInfo('King Kandy', 'rgb(250, 161, 17)','graphics/KingKandy.png','cupCakesAndSundaes/cupCakeOrange.svg','cupCakesAndSundaes/sundeaOrange.svg',gameInfo.player1name);
      var player2 = new PlayerInfo('Lord Licorice', 'rgb(202, 55, 55)','graphics/lordLicorice.png','cupCakesAndSundaes/cupCakeRed.svg','cupCakesAndSundaes/sundeaRed.svg',gameInfo.player2name);
      var player3 = new PlayerInfo('Queen Frostine', 'rgb(102, 173, 229)','graphics/queenFrostine.png','cupCakesAndSundaes/cupCakeBlue.svg','cupCakesAndSundaes/sundeaBlue.svg',gameInfo.player3name);
      playerInfo = [player1,player2,player3];
      localStorage.setItem('currentPlayerInfo',JSON.stringify(playerInfo));
      localStorage.setItem('totalPlayers',JSON.stringify(gameInfo.totalPlayers));
      window.location = 'gamePlay.html';
    } else {
      alert('Please enter a name for each player');
    }

  } else if (gameInfo.totalPlayers == 4) {
    if(gameInfo.player1name && gameInfo.player2name && gameInfo.player3name && gameInfo.player4name) {
      var player1 = new PlayerInfo('King Kandy', 'rgb(250, 161, 17)','graphics/KingKandy.png','cupCakesAndSundaes/cupCakeOrange.svg','cupCakesAndSundaes/sundeaOrange.svg',gameInfo.player1name);
      var player2 = new PlayerInfo('Lord Licorice', 'rgb(202, 55, 55)','graphics/lordLicorice.png','cupCakesAndSundaes/cupCakeRed.svg','cupCakesAndSundaes/sundeaRed.svg',gameInfo.player2name);
      var player3 = new PlayerInfo('Queen Frostine', 'rgb(102, 173, 229)','graphics/queenFrostine.png','cupCakesAndSundaes/cupCakeBlue.svg','cupCakesAndSundaes/sundeaBlue.svg',gameInfo.player3name);
      var player4 = new PlayerInfo('Gloppy', 'rgb(121, 82, 51)','graphics/gloppy.png','cupCakesAndSundaes/cupCakeBrown.svg','cupCakesAndSundaes/sundeaBrown.svg',gameInfo.player4name);
      playerInfo = [player1,player2,player3,player4];
      localStorage.setItem('currentPlayerInfo',JSON.stringify(playerInfo));
      localStorage.setItem('totalPlayers',JSON.stringify(gameInfo.totalPlayers));
      window.location = 'gamePlay.html';
    } else {
      alert('Please enter a name for each player');
    }
  } else {
    alert('Please select a total number of players by tapping or clicking the numbers');
  }
}


$(function() {
var hasTouch = 'ontouchstart' in window;

if (hasTouch) {
  $('#startNewGame').on('touchend',resetGame);

  $('.playerNumber').on('touchend',checkNumberOfPlayers);

  $('#submit').click('touchend',checkPlayerNames);

} else {

  $('#startNewGame').click(resetGame);

  $('.playerNumber').click(checkNumberOfPlayers);

  $('#submit').click(checkPlayerNames);

}
})
