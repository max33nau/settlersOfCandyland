
my = {};
var gameBoardData = [
  {
    xy31: 'graphics/sugar-tile.gif',
    xy31Number: 'numberIMG/number2.gif',
    xy41: 'graphics/batter-tile.gif',
    xy41Number:'numberIMG/number9.gif',
    xy51: 'graphics/sprinkles-tile.gif',
    xy51Number:'numberIMG/number4.gif',
    xy22: 'graphics/frosting-tile.gif',
    xy22Number:'numberIMG/number5.gif',
    xy32:'graphics/sprinkles-tile.gif',
    xy32Number:'numberIMG/number8.gif',
    xy42:'graphics/sugar-tile.gif',
    xy42Number:'numberIMG/number3.gif',
    xy52: 'graphics/icecream-tile.gif',
    xy52Number: 'numberIMG/number10.gif',
    xy13: 'graphics/icecream-tile.gif',
    xy13Number: 'numberIMG/number11.gif',
    xy23: 'graphics/sugar-tile.gif',
    xy23Number: 'numberIMG/number5.gif',
    xy33: 'graphics/batter-tile.gif',
    xy33Number: 'numberIMG/number4.gif',
    xy43: 'graphics/sugar-tile.gif',
    xy43Number: 'numberIMG/number12.gif',
    xy53: 'graphics/frosting-tile.gif',
    xy53Number:'numberIMG/number6.gif',
    xy14: 'graphics/fudge-tile.gif',
    xy24: 'graphics/icecream-tile.gif',
    xy24Number:'numberIMG/number9.gif',
    xy34: 'graphics/sprinkles-tile.gif',
    xy34Number: 'numberIMG/number6.gif',
    xy44: 'graphics/frosting-tile.gif',
    xy44Number: 'numberIMG/number11.gif',
    xy15: 'graphics/frosting-tile.gif',
    xy15Number: 'numberIMG/number8.gif',
    xy25: 'graphics/sprinkles-tile.gif',
    xy25Number: 'numberIMG/number3.gif',
    xy35: 'graphics/batter-tile.gif',
    xy35Number: 'numberIMG/number10.gif'
  },
  {
    xy31: 'graphics/frosting-tile.gif',
    xy31Number: 'numberIMG/number8.gif',
    xy41: 'graphics/icecream-tile.gif',
    xy41Number:'numberIMG/number4.gif',
    xy51: 'graphics/sprinkles-tile.gif',
    xy51Number:'numberIMG/number5.gif',
    xy22: 'graphics/sugar-tile.gif',
    xy22Number:'numberIMG/number2.gif',
    xy32:'graphics/batter-tile.gif',
    xy32Number:'numberIMG/number9.gif',
    xy42:'graphics/sugar-tile.gif',
    xy42Number:'numberIMG/number11.gif',
    xy52: 'graphics/sprinkles-tile.gif',
    xy52Number: 'numberIMG/number6.gif',
    xy13: 'graphics/frosting-tile.gif',
    xy13Number: 'numberIMG/number8.gif',
    xy23: 'graphics/icecream-tile.gif',
    xy23Number: 'numberIMG/number10.gif',
    xy33: 'graphics/fudge-tile.gif',
    xy43: 'graphics/icecream-tile.gif',
    xy43Number: 'numberIMG/number3.gif',
    xy53: 'graphics/batter-tile.gif',
    xy53Number:'numberIMG/number10.gif',
    xy14: 'graphics/sugar-tile.gif',
    xy14Number: 'numberIMG/number3.gif',
    xy24: 'graphics/sprinkles-tile.gif',
    xy24Number:'numberIMG/number6.gif',
    xy34: 'graphics/batter-tile.gif',
    xy34Number: 'numberIMG/number4.gif',
    xy44: 'graphics/frosting-tile.gif',
    xy44Number: 'numberIMG/number11.gif',
    xy15: 'graphics/frosting-tile.gif',
    xy15Number: 'numberIMG/number12.gif',
    xy25: 'graphics/sugar-tile.gif',
    xy25Number: 'numberIMG/number5.gif',
    xy35: 'graphics/sprinkles-tile.gif',
    xy35Number: 'numberIMG/number9.gif',
  },
  {
    xy31: 'graphics/frosting-tile.gif',
    xy31Number: 'numberIMG/number8.gif',
    xy41: 'graphics/icecream-tile.gif',
    xy41Number:'numberIMG/number6.gif',
    xy51: 'graphics/sprinkles-tile.gif',
    xy51Number:'numberIMG/number8.gif',
    xy22: 'graphics/sugar-tile.gif',
    xy22Number:'numberIMG/number6.gif',
    xy32:'graphics/batter-tile.gif',
    xy32Number:'numberIMG/number8.gif',
    xy42:'graphics/sugar-tile.gif',
    xy42Number:'numberIMG/number6.gif',
    xy52: 'graphics/sprinkles-tile.gif',
    xy52Number: 'numberIMG/number8.gif',
    xy13: 'graphics/frosting-tile.gif',
    xy13Number: 'numberIMG/number8.gif',
    xy23: 'graphics/icecream-tile.gif',
    xy23Number: 'numberIMG/number6.gif',
    xy33: 'graphics/fudge-tile.gif',
    xy43: 'graphics/icecream-tile.gif',
    xy43Number: 'numberIMG/number8.gif',
    xy53: 'graphics/batter-tile.gif',
    xy53Number:'numberIMG/number6.gif',
    xy14: 'graphics/sugar-tile.gif',
    xy14Number: 'numberIMG/number6.gif',
    xy24: 'graphics/sprinkles-tile.gif',
    xy24Number:'numberIMG/number6.gif',
    xy34: 'graphics/batter-tile.gif',
    xy34Number: 'numberIMG/number8.gif',
    xy44: 'graphics/frosting-tile.gif',
    xy44Number: 'numberIMG/number8.gif',
    xy15: 'graphics/frosting-tile.gif',
    xy15Number: 'numberIMG/number6.gif',
    xy25: 'graphics/sugar-tile.gif',
    xy25Number: 'numberIMG/number8.gif',
    xy35: 'graphics/sprinkles-tile.gif',
    xy35Number: 'numberIMG/number6.gif',
  }
];

$(function(){
  var handleBarTemplate = Handlebars.compile($('#gameBoardTemplate').html());
  var insertTemplate = handleBarTemplate(gameBoardData[0]);
  $('#gameBoard').append(insertTemplate);

  my.currentPlayer = 0;
  my.thiefButton = '';
  my.dessertLocationClick = '';
  my.churroLocationClick = '';
  my.playersTurnColor = '';
  my.playersTurnName = '';
  my.currentPlayerFieldset = $('#currentPlayer');
  my.churroLocation = $('.churroLocation');
  my.dessertLocation = $('.dessertLocation');
  my.$gameBoard = $('#gameBoard');
  my.totalPlayers = JSON.parse(localStorage.getItem('totalPlayers'))-1;
  playerInfo = JSON.parse(localStorage.getItem('currentPlayerInfo'));

var hasTouch = 'ontouchstart' in window;

my.currentPlayerFieldset.empty();
my.currentPlayerFieldset.css('background-color',playerInfo[my.currentPlayer].color);
my.currentPlayerFieldset.append('<h6 id="playerName">Current Player:  '+ playerInfo[my.currentPlayer].userName +'</h6');
my.currentPlayerFieldset.append('<ul> <li class="gameData"> churros left: '+ playerInfo[my.currentPlayer].numberOfChurros+'</li> <li class="gameData"> cupcakes left: '+ playerInfo[my.currentPlayer].numberOfCupcakes+'</li><li class="gameData"> sundaes left: '+ playerInfo[my.currentPlayer].numberOfIceCreamSundaes+'</li>');
my.currentPlayerFieldset.append('<img class="currentPlayerImage" src='+playerInfo[my.currentPlayer].imageUrl+'>');
my.churroLocation.css('background-color',playerInfo[my.currentPlayer].color);
my.dessertLocation.css('background-color',playerInfo[my.currentPlayer].color);

my.currentGame = localStorage.getItem('currentGame');

if(my.currentGame) {
  my.$gameBoard.html(my.currentGame);
  playerInfo = [];
  playerInfo = JSON.parse(localStorage.getItem('currentPlayerInfo'));
  my.currentPlayer = localStorage.getItem('currentPlayer');
  my.currentPlayerFieldset.empty();
  my.currentPlayerFieldset.append('<h6 id="playerName">Current Player:  '+ playerInfo[my.currentPlayer].userName +'</h6');
  my.currentPlayerFieldset.append('<ul> <li class="gameData"> churros left: '+ playerInfo[my.currentPlayer].numberOfChurros+'</li> <li class="gameData"> cupcakes left: '+ playerInfo[my.currentPlayer].numberOfCupcakes+'</li><li class="gameData"> sundaes left: '+ playerInfo[my.currentPlayer].numberOfIceCreamSundaes+'</li>');
  my.churroLocation.css('background-color',playerInfo[my.currentPlayer].color);
  my.dessertLocation.css('background-color',playerInfo[my.currentPlayer].color);
  my.currentPlayerFieldset.css('background-color',playerInfo[my.currentPlayer].color);
  my.currentPlayerFieldset.append('<img class="currentPlayerImage" src='+playerInfo[my.currentPlayer].imageUrl+'>');
}

var $tiles = $('.check');
// Checks if on a touch screen device
if (hasTouch) {
  $('.churroLocation').on('touchstart', function() {
    $thisLocation = $(this);
    my.churroLocationClick = $thisLocation.attr('id');
  });
  $('.dessertLocation').on('touchstart', function() {
    $thisLocation = $(this);
    my.dessertLocationClick = $thisLocation.attr('id');
  });
  $tiles.on('touchstart',checkButton);
  $('#rollDiceButton').on('touchstart',diceRolled);
  $('#moveThiefButton').on('touchstart', function(){
    my.thiefButton=$(this).attr('id');
  });
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
  $('#moveThiefButton').on('click', function(){
    my.thiefButton=$(this).attr('id');
  });
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
  my.currentPlayerFieldset.append('<h6 id="playerName">Current Player:  '+ playerInfo[my.currentPlayer].userName +'</h6');
  my.currentPlayerFieldset.append('<ul> <li class="gameData"> churros left: '+ playerInfo[my.currentPlayer].numberOfChurros+'</li> <li class="gameData"> cupcakes left: '+ playerInfo[my.currentPlayer].numberOfCupcakes+'</li><li class="gameData"> sundaes left: '+ playerInfo[my.currentPlayer].numberOfIceCreamSundaes+'</li>');
  my.churroLocation.css('background-color',playerInfo[my.currentPlayer].color);
  my.dessertLocation.css('background-color',playerInfo[my.currentPlayer].color);
  my.currentPlayerFieldset.css('background-color',playerInfo[my.currentPlayer].color);
  my.currentPlayerFieldset.append('<img class="currentPlayerImage" src='+playerInfo[my.currentPlayer].imageUrl+'>');
}
function checkButton() {

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
  if (playerInfo[my.currentPlayer].numberOfCupcakes == 0 && playerInfo[my.currentPlayer].numberOfIceCreamSundaes ==0 ) {
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

} else if (my.thiefButton == 'moveThiefButton') {
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
