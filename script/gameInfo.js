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

}

player1 = new PlayerInfo('King Kandy', 'rgb(250, 161, 17)','graphics/KingKandy.png','cupCakesAndSundaes/cupCakeOrange.svg','cupCakesAndSundaes/sundeaOrange.svg');
player2 = new PlayerInfo('Lord Licorice', 'rgb(202, 55, 55)','graphics/lordLicorice.png','cupCakesAndSundaes/cupCakeRed.svg','cupCakesAndSundaes/sundeaRed.svg');
player3 = new PlayerInfo('Queen Frostine', 'rgb(102, 173, 229)','graphics/queenFrostine.png','cupCakesAndSundaes/cupCakeBlue.svg','cupCakesAndSundaes/sundeaBlue.svg');
player4 = new PlayerInfo('Gloppy', 'rgb(121, 82, 51)','graphics/gloppy.png','cupCakesAndSundaes/cupCakeBrown.svg','cupCakesAndSundaes/sundeaBrown.svg');


var playerInfo = [player1,player2,player3,player4];
