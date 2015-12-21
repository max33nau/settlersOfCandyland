$(function(){

$('#rollDiceButton').click(function() {
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
  my.currentPlayerFieldset.css('background-color',playerInfo[my.currentPlayer].color);
  my.currentPlayerFieldset.append('<img src='+playerInfo[my.currentPlayer].imageUrl+'>');
  });
})
