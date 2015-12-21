// var diceRollNumber = {};
//
// diceRollNumber.tiles = $('.tiles');
//
// diceRollNumber.checkBuildingSpots = function(tileNumber) {
//   var $specificTile = tileNumber;
//   var typeOfIngridient = $specificTile.className.split(' ')[1];
//
//   var xCoord = Number($specificTile.id.slice(2,3));
//   var yCoord = Number($specificTile.id.slice(3,4));
//   var upperY = yCoord - 1;
//   var rightX = xCoord + 1;
//   var leftX = xCoord - 1;
//   var bottomY = yCoord + 1;
//   var $thisTile = $('#xy'+xCoord.toString()+yCoord.toString());
//   var $upperLeftTile = $('#xy'+xCoord.toString()+upperY.toString());
//   var $upperRightTile = $('#xy'+rightX.toString()+upperY.toString());
//   var $previousTile = $('#xy'+leftX.toString()+yCoord.toString());
//   var $nextTile = $('#xy'+rightX.toString()+yCoord.toString());
//   var $bottomLeftTile = $('#xy'+leftX.toString()+bottomY.toString());
//   var $bottomRightTile = $('#xy'+xCoord.toString()+bottomY.toString());
//
//   // CHECKS TOP BUILDING SPOT
//   $tileTopBuilding = $thisTile.find('.upperBuilding');
//   $tileTopLeftBottomRightBuilding = $upperLeftTile.find('.bottomRightBuilding');
//   $tileTopRightBottomLeftBuilding = $upperRightTile.find('.bottomLeftBuilding');
//
//   // CHECKS TOP LEFT BUILDING SPOT
//   $tileUpperLeftBottomBuilding = $upperLeftTile.find('.bottomBuilding');
//   $tileTopLeftBuilding = $thisTile.find('.topLeftBuilding');
//   $tilePreviousTopRightBuilding = $previousTile.find('.topRightBuilding');
//
//   // CHECKS TOP RIGHT BUILDING SPOT
//   $tileTopRightBuilding = $thisTile.find('.topRightBuilding');
//   $tileNextTopLeftBuilding = $nextTile.find('.topLeftBuilding');
//   $tileUpperRightBottomBuilding = $upperRightTile.find('.bottomBuilding');
//
//   // CHECKS BOTTOM BUILDING SPOT
//   $tileBottomBuilding = $thisTile.find('.bottomBuilding');
//   $tileBottomLeftUpperRightBuilding = $bottomLeftTile.find('.topRightBuilding');
//   $tileBottomRightUpperLeftBuilding = $bottomRightTile.find('.topLeftBuilding');
//
//   // CHECKS BOTTOM LEFT BUILDING SPOT
//   $tilePreviousBottomRightBuilding = $previousTile.find('.bottomRightBuilding');
//   $tileBottomLeftBuilding = $thisTile.find('.bottomLeftBuilding');
//   $tileBottomLeftUpperBuilding = $bottomLeftTile.find('.upperBuilding');
//
//   // CHECKS BOTTOM RIGHT BUILDING SPOT
//   $tileBottomRightBuilding = $thisTile.find('.bottomRightBuilding');
//   $tileNextBottomLeftBuilding = $nextTile.find('.bottomLeftBuilding');
//   $tileBottomRightUpperBuilding = $bottomRightTile.find('.upperBuilding');
//
// // BOTTOM RIGHT CARD CHECK
//   if ($tileBottomRightBuilding.length > 0) {
//
//   } else if ($tileNextBottomLeftBuilding.length > 0) {
//
//   } else if ($tileBottomRightUpperBuilding.length > 0) {
//
//   } else {
//     console.log('no building');
//   }
//
// // BOTTOM LEFT CARD CHECK
//   if ($tilePreviousBottomRightBuilding.length > 0) {
//
//   } else if ($tileBottomLeftBuilding.length > 0) {
//
//   } else if ($tileBottomLeftUpperBuilding.length > 0) {
//
//   } else {
//     console.log('no building');
//   }
//
// // BOTTOM BUILDING CHECK
//   if ($tileBottomBuilding.length > 0 ) {
//
//   } else if ($tileBottomLeftUpperRightBuilding.length > 0) {
//
//   } else if ($tileBottomRightUpperLeftBuilding.length > 0) {
//
//   } else {
//     console.log('no building');
//   }
//
// // TOP RIGHT CHECK
//   if ($tileTopRightBuilding.length > 0) {
//
//   } else if($tileNextTopLeftBuilding.length > 0) {
//
//   } else if($tileUpperRightBottomBuilding.length > 0) {
//
//   } else {
//     console.log('no building');
//   }
//
// // TOP LEFT BUILDING
//   if ($tileTopLeftBuilding.length > 0) {
//
//   } else if ($tileUpperLeftBottomBuilding.length > 0) {
//
//   } else if($tilePreviousTopRightBuilding.length > 0) {
//
//   } else {
//     console.log('no building');
//   }
//
//   if ($tileTopBuilding.length > 0) {
//
//   } else if($tileTopLeftBottomRightBuilding.length > 0) {
//
//   } else if ($tileTopRightBottomLeftBuilding.length > 0) {
//
//   } else {
//     console.log('no building');
//   }
// }
//
// diceRollNumber.findNumberTiles = function(diceNumber) {
//   if(diceNumber == 2) {
//     var numberTile2 = diceRollNumber.gameBoard.find('.number2');
//   } else if (diceNumber == 3) {
//     var numberTile3 =  diceRollNumber.tiles.find('.number3').parent();
//     diceRollNumber.checkBuildingSpots(numberTile3[0]);
//   } else if (diceNumber == 4) {
//     var numberTile4first =  diceRollNumber.gameBoard.find('.number4')[0];
//     var numberTile4second = diceRollNumber.gameBoard.find('.number4')[1];
//   } else if (diceNumber == 5) {
//     var numberTile5first =  diceRollNumber.gameBoard.find('.number5')[0];
//     var numberTile5second = diceRollNumber.gameBoard.find('.number5')[1];
//   } else if (diceNumber == 6) {
//     var numberTile6first =  diceRollNumber.gameBoard.find('.number6')[0];
//     var numberTile6second = diceRollNumber.gameBoard.find('.number6')[1];
//   } else if (diceNumber == 7) {
//     var thiefTile = diceRollNumber.gameBoard.find('#thief');
//   } else if (diceNumber == 8) {
//     var numberTile8first =  diceRollNumber.gameBoard.find('.number8')[0];
//     var numberTile8second = diceRollNumber.gameBoard.find('.number8')[1];
//   } else if (diceNumber == 9) {
//     var numberTile9first =  diceRollNumber.gameBoard.find('.number9')[0];
//     var numberTile9second = diceRollNumber.gameBoard.find('.number9')[1];
//   } else if (diceNumber == 10) {
//     var numberTile10first =  diceRollNumber.gameBoard.find('.number10')[0];
//     var numberTile10second = diceRollNumber.gameBoard.find('.number10')[1];
//   } else if (diceNumber == 11) {
//     var numberTile11first =  diceRollNumber.gameBoard.find('.number11')[0];
//     var numberTile11second = diceRollNumber.gameBoard.find('.number11')[1];
//   } else if (diceNumber == 12) {
//     var numberTile12first =  diceRollNumber.gameBoard.find('.number12');
//
//   } else {
//     console.log('something went wrong');
//   }
// }
