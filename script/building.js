var building = {};

building.buildUpperBuilding = function($tile) {
  $tile.append('<div class="upperBuilding cupcake"></div>');
  $tile.find('.upperBuilding').css('background-color',playerInfo[my.currentPlayer].color);
  playerInfo[my.currentPlayer].numberOfCupcakes--;
}

building.buildUpperLeftBuilding = function($tile) {
  $tile.append('<div class="topLeftBuilding cupcake"></div>');
  $tile.find('.topLeftBuilding').css('background-color',playerInfo[my.currentPlayer].color);
  playerInfo[my.currentPlayer].numberOfCupcakes--;
}

building.buildUpperRightBuilding = function($tile) {
  $tile.append('<div class="topRightBuilding cupcake"></div>');
  $tile.find('.topRightBuilding').css('background-color',playerInfo[my.currentPlayer].color);
  playerInfo[my.currentPlayer].numberOfCupcakes--;
}

building.buildBottomBuilding = function($tile) {
  $tile.append('<div class="bottomBuilding cupcake"></div>');
  $tile.find('.bottomBuilding').css('background-color',playerInfo[my.currentPlayer].color);
  playerInfo[my.currentPlayer].numberOfCupcakes--;
}

building.buildBottomLeftBuilding = function($tile) {
  $tile.append('<div class="bottomLeftBuilding cupcake"></div>');
  $tile.find('.bottomLeftBuilding').css('background-color',playerInfo[my.currentPlayer].color);
  playerInfo[my.currentPlayer].numberOfCupcakes--;
}

building.buildBottomRightBuilding = function($tile) {
  $tile.append('<div class="bottomRightBuilding cupcake"></div>');
  $tile.find('.bottomRightBuilding').css('background-color',playerInfo[my.currentPlayer].color);
  playerInfo[my.currentPlayer].numberOfCupcakes--;
}

building.buildBottomRightIceCreamSundae = function($tile) {
  $tile.find('.bottomRightBuilding').removeClass('cupcake').addClass('iceCreamSundae');
  playerInfo[my.currentPlayer].numberOfIceCreamSundaes--;
}

building.buildBottomLeftIceCreamSundae = function($tile) {
  $tile.find('.bottomLeftBuilding').removeClass('cupcake').addClass('iceCreamSundae');
  playerInfo[my.currentPlayer].numberOfIceCreamSundaes--;
}

building.buildBottomIceCreamSundae = function($tile) {
  $tile.find('.bottomBuilding').removeClass('cupcake').addClass('iceCreamSundae');
  playerInfo[my.currentPlayer].numberOfIceCreamSundaes--;
}

building.buildUpperIceCreamSundae = function($tile) {
  $tile.find('.upperBuilding').removeClass('cupcake').addClass('iceCreamSundae');
  playerInfo[my.currentPlayer].numberOfIceCreamSundaes--;
}

building.buildTopRightIceCreamSundae = function($tile) {
  $tile.find('.topRightBuilding').removeClass('cupcake').addClass('iceCreamSundae');
  playerInfo[my.currentPlayer].numberOfIceCreamSundaes--;
}

building.buildTopLeftIceCreamSundae = function($tile) {
  $tile.find('.topLeftBuilding').removeClass('cupcake').addClass('iceCreamSundae');
  playerInfo[my.currentPlayer].numberOfIceCreamSundaes--;
}



building.upper = function($specificTile, $previousTile, $nextTile, $upperLeftTile, $upperRightTile, $bottomLeftTile, $bottomRightTile,$straightAboveTile, playerColor) {
  // CHECKS TOP BUILDING SPOT
  $tileTopBuilding = $specificTile.find('.upperBuilding');
  $tileTopLeftBottomRightBuilding = $upperLeftTile.find('.bottomRightBuilding');
  $tileTopRightBottomLeftBuilding = $upperRightTile.find('.bottomLeftBuilding');

  if ($tileTopBuilding.length > 0) {
    building.buildUpperIceCreamSundae($specificTile);
    return;
  } else if($tileTopLeftBottomRightBuilding.length > 0) {
    building.buildBottomRightIceCreamSundae($upperLeftTile);
    return;
  } else if ($tileTopRightBottomLeftBuilding.length > 0) {
    building.buildBottomLeftIceCreamSundae($upperRightTile);
    return;
  } else {
    $tileUpperLeftUpperRightBuilding = $upperLeftTile.find('.topRightBuilding');
    $tileUpperRightUpperLeftBuilding = $upperRightTile.find('.topLeftBuilding');
    $tileAboveUpperLeftRightBottomBuilding = $straightAboveTile.find('.bottomBuilding');

    $tileTopRightBuilding = $specificTile.find('.topRightBuilding');
    $tileNextTopLeftBuilding = $nextTile.find('.topLeftBuilding');
    $tileUpperRightBottomBuilding = $upperRightTile.find('.bottomBuilding');

    $tileUpperLeftBottomBuilding = $upperLeftTile.find('.bottomBuilding');
    $tileTopLeftBuilding = $specificTile.find('.topLeftBuilding');
    $tilePreviousTopRightBuilding = $previousTile.find('.topRightBuilding');
  }

  if ($tileUpperLeftUpperRightBuilding.length > 0 || $tileUpperRightUpperLeftBuilding.length > 0 || $tileAboveUpperLeftRightBottomBuilding.length > 0 ) {
    alert('cant put a building there it is not two spots away from another building');
    return;
  } else if ($tileTopRightBuilding.length > 0 || $tileNextTopLeftBuilding.length > 0 || $tileUpperRightBottomBuilding.length > 0 ) {
    alert('cant put a building there it is not two spots away from another building');
    return;
  } else if ($tileUpperLeftBottomBuilding.length > 0 || $tileTopLeftBuilding.length > 0 || $tilePreviousTopRightBuilding.length > 0) {
    alert('cant put a building there it is not two spots away from another building');
    return;
  } else {
    building.buildUpperBuilding($specificTile);
    return;
  }
}

building.topLeft = function($specificTile, $previousTile, $nextTile, $upperLeftTile, $upperRightTile, $bottomLeftTile, $bottomRightTile,$previousUpperLeftTile, playerColor) {
  // CHECKS TOP LEFT BUILDING SPOT
  $tileUpperLeftBottomBuilding = $upperLeftTile.find('.bottomBuilding');
  $tileTopLeftBuilding = $specificTile.find('.topLeftBuilding');
  $tilePreviousTopRightBuilding = $previousTile.find('.topRightBuilding');

  if ($tileTopLeftBuilding.length > 0) {
    building.buildTopLeftIceCreamSundae($specificTile);
    return;
  } else if ($tileUpperLeftBottomBuilding.length > 0) {
    building.buildBottomIceCreamSundae($upperLeftTile);
    return;
  } else if($tilePreviousTopRightBuilding.length > 0) {
    building.buildTopRightIceCreamSundae($previousTile);
    return;
  } else {

    // CHECKS TOP BUILDING SPOT
    $tileTopBuilding = $specificTile.find('.upperBuilding');
    $tileTopLeftBottomRightBuilding = $upperLeftTile.find('.bottomRightBuilding');
    $tileTopRightBottomLeftBuilding = $upperRightTile.find('.bottomLeftBuilding');

    // CHECKS BOTTOM LEFT BUILDING SPOT
    $tilePreviousBottomRightBuilding = $previousTile.find('.bottomRightBuilding');
    $tileBottomLeftBuilding = $specificTile.find('.bottomLeftBuilding');
    $tileBottomLeftUpperBuilding = $bottomLeftTile.find('.upperBuilding');

    $tilePreviousUpperBuilding = $previousTile.find('.upperBuilding');
    $tileTopLeftBottomLeftBuilding = $upperLeftTile.find('.bottomLeftBuilding');
    $tilePreviousUpperLeftBottomRightBuilding = $previousUpperLeftTile.find('.bottomRightBuilding');
  }

  if ($tileTopBuilding.length > 0 || $tileTopLeftBottomRightBuilding.length > 0 || $tileTopRightBottomLeftBuilding.length > 0 ) {
    alert('cant put a building there it is not two spots away from another building');
    return;
  } else if ($tilePreviousBottomRightBuilding.length > 0 || $tileBottomLeftBuilding.length > 0 || $tileBottomLeftUpperBuilding.length > 0 ) {
    alert('cant put a building there it is not two spots away from another building');
    return;
  } else if ($tilePreviousUpperBuilding.length > 0 || $tileTopLeftBottomLeftBuilding.length > 0 || $tilePreviousUpperLeftBottomRightBuilding.length > 0) {
    alert('cant put a building there it is not two spots away from another building');
    return;
  } else {
    building.buildUpperLeftBuilding($specificTile);
    return;
  }
}

building.topRight = function($specificTile, $previousTile, $nextTile, $upperLeftTile, $upperRightTile, $bottomLeftTile, $bottomRightTile,$nextUpperRightTile, playerColor) {
  // CHECKS TOP RIGHT BUILDING SPOT
  $tileTopRightBuilding = $specificTile.find('.topRightBuilding');
  $tileNextTopLeftBuilding = $nextTile.find('.topLeftBuilding');
  $tileUpperRightBottomBuilding = $upperRightTile.find('.bottomBuilding');

  if ($tileTopRightBuilding.length > 0) {
    building.buildTopRightIceCreamSundae($specificTile);
    return;
  } else if($tileNextTopLeftBuilding.length > 0) {
    building.buildTopLeftIceCreamSundae($nextTile);
    return;
  } else if($tileUpperRightBottomBuilding.length > 0) {
    building.buildBottomIceCreamSundae($upperRightTile);
    return;
  } else {

    // CHECKS TOP BUILDING SPOT
    $tileTopBuilding = $specificTile.find('.upperBuilding');
    $tileTopLeftBottomRightBuilding = $upperLeftTile.find('.bottomRightBuilding');
    $tileTopRightBottomLeftBuilding = $upperRightTile.find('.bottomLeftBuilding');

    // CHECKS BOTTOM RIGHT BUILDING SPOT
    $tileBottomRightBuilding = $specificTile.find('.bottomRightBuilding');
    $tileNextBottomLeftBuilding = $nextTile.find('.bottomLeftBuilding');
    $tileBottomRightUpperBuilding = $bottomRightTile.find('.upperBuilding');

    $tileNextUpperBuilding = $nextTile.find('.upperBuilding');
    $tileTopRightBottomRightBuilding = $upperRightTile.find('.bottomRightBuilding');
    $tileNextUpperRightBottomLeftBuilding = $nextUpperRightTile.find('.bottomLeftBuilding');
  }

  if ($tileTopBuilding.length > 0 || $tileTopLeftBottomRightBuilding.length > 0 || $tileTopRightBottomLeftBuilding.length > 0 ) {
    alert('cant put a building there it is not two spots away from another building');
    return;
  } else if ($tileBottomRightBuilding.length > 0 || $tileNextBottomLeftBuilding.length > 0 || $tileBottomRightUpperBuilding.length > 0 ) {
    alert('cant put a building there it is not two spots away from another building');
    return;
  } else if ($tileNextUpperBuilding.length > 0 || $tileTopRightBottomRightBuilding.length > 0 || $tileNextUpperRightBottomLeftBuilding.length > 0) {
    alert('cant put a building there it is not two spots away from another building');
    return;
  } else {
    building.buildUpperRightBuilding($specificTile);
    return;
  }
}

building.bottom = function($specificTile, $previousTile, $nextTile, $upperLeftTile, $upperRightTile, $bottomLeftTile, $bottomRightTile,$straightBelowTile, playerColor) {
  // CHECKS BOTTOM BUILDING SPOT
  $tileBottomBuilding = $specificTile.find('.bottomBuilding');
  $tileBottomLeftUpperRightBuilding = $bottomLeftTile.find('.topRightBuilding');
  $tileBottomRightUpperLeftBuilding = $bottomRightTile.find('.topLeftBuilding');

  if ($tileBottomBuilding.length > 0 ) {
    building.buildBottomIceCreamSundae($specificTile);
    return;
  } else if ($tileBottomLeftUpperRightBuilding.length > 0) {
    building.buildTopRightIceCreamSundae($bottomLeftTile);
    return;
  } else if ($tileBottomRightUpperLeftBuilding.length > 0) {
    building.buildTopLeftIceCreamSundae($bottomRightTile);
    return;
  } else {

    // CHECKS BOTTOM RIGHT BUILDING SPOT
    $tileBottomRightBuilding = $specificTile.find('.bottomRightBuilding');
    $tileNextBottomLeftBuilding = $nextTile.find('.bottomLeftBuilding');
    $tileBottomRightUpperBuilding = $bottomRightTile.find('.upperBuilding');

    // CHECKS BOTTOM LEFT BUILDING SPOT
    $tilePreviousBottomRightBuilding = $previousTile.find('.bottomRightBuilding');
    $tileBottomLeftBuilding = $specificTile.find('.bottomLeftBuilding');
    $tileBottomLeftUpperBuilding = $bottomLeftTile.find('.upperBuilding');

    $tileBottomLeftBottomRightBuilding = $bottomLeftTile.find('.bottomRightBuilding');
    $tileBottomRightBottomLeftBuilding = $bottomRightTile.find('.bottomLeftBuilding');
    $tileBelowBottomLeftRightUpperBuilding = $straightBelowTile.find('.upperBuilding');
  }

  if ($tileBottomRightBuilding.length > 0 || $tileNextBottomLeftBuilding.length > 0 || $tileBottomRightUpperBuilding.length > 0 ) {
    alert('cant put a building there it is not two spots away from another building');
    return;
  } else if ($tilePreviousBottomRightBuilding.length > 0 || $tileBottomLeftBuilding.length > 0 || $tileBottomLeftUpperBuilding.length > 0 ) {
    alert('cant put a building there it is not two spots away from another building');
    return;
  } else if ($tileBottomLeftBottomRightBuilding.length > 0 || $tileBottomRightBottomLeftBuilding.length > 0 || $tileBelowBottomLeftRightUpperBuilding.length > 0) {
    alert('cant put a building there it is not two spots away from another building');
    return;
  } else {
    building.buildBottomBuilding($specificTile);
    return;
  }
}

building.bottomLeft = function($specificTile, $previousTile, $nextTile, $upperLeftTile, $upperRightTile, $bottomLeftTile, $bottomRightTile,$bottomLeftPreviousTile, playerColor) {
  // CHECKS BOTTOM LEFT BUILDING SPOT
  $tilePreviousBottomRightBuilding = $previousTile.find('.bottomRightBuilding');
  $tileBottomLeftBuilding = $specificTile.find('.bottomLeftBuilding');
  $tileBottomLeftUpperBuilding = $bottomLeftTile.find('.upperBuilding');

  if ($tilePreviousBottomRightBuilding.length > 0) {
    building.buildBottomRightIceCreamSundae($previousTile);
    return;
  } else if ($tileBottomLeftBuilding.length > 0) {
    building.buildBottomLeftIceCreamSundae($specificTile);
    return;
  } else if ($tileBottomLeftUpperBuilding.length > 0) {
    building.buildUpperIceCreamSundae($bottomLeftTile);
    return;
  } else {

    // CHECKS TOP LEFT BUILDING SPOT
    $tileUpperLeftBottomBuilding = $upperLeftTile.find('.bottomBuilding');
    $tileTopLeftBuilding = $specificTile.find('.topLeftBuilding');
    $tilePreviousTopRightBuilding = $previousTile.find('.topRightBuilding');

    // CHECKS BOTTOM BUILDING SPOT
    $tileBottomBuilding = $specificTile.find('.bottomBuilding');
    $tileBottomLeftUpperRightBuilding = $bottomLeftTile.find('.topRightBuilding');
    $tileBottomRightUpperLeftBuilding = $bottomRightTile.find('.topLeftBuilding');

    $tilePreviousBottomBuilding = $previousTile.find('.bottomBuilding');
    $tileBottomLeftUpperLeftBuilding = $bottomLeftTile.find('.topLeftBuilding');
    $tileBottomLeftPreviousUpperRightBuilding = $bottomLeftPreviousTile.find('.topRightBuilding');
  }

  if ($tileUpperLeftBottomBuilding.length > 0 || $tileTopLeftBuilding.length > 0 || $tilePreviousTopRightBuilding.length > 0 ) {
    alert('cant put a building there it is not two spots away from another building');
    return;
  } else if ($tileBottomBuilding.length > 0 || $tileBottomLeftUpperRightBuilding.length > 0 || $tileBottomRightUpperLeftBuilding.length > 0 ) {
    alert('cant put a building there it is not two spots away from another building');
    return;
  } else if ($tilePreviousBottomBuilding.length > 0 || $tileBottomLeftUpperLeftBuilding.length > 0 || $tileBottomLeftPreviousUpperRightBuilding.length > 0) {
    alert('cant put a building there it is not two spots away from another building');
    return;
  } else {
    building.buildBottomLeftBuilding($specificTile);
    return;
  }
}

building.bottomRight = function($specificTile, $previousTile, $nextTile, $upperLeftTile, $upperRightTile, $bottomLeftTile, $bottomRightTile,$bottomRightNextTile, playerColor) {
  // CHECKS BOTTOM RIGHT BUILDING SPOT
  $tileBottomRightBuilding = $specificTile.find('.bottomRightBuilding');
  $tileNextBottomLeftBuilding = $nextTile.find('.bottomLeftBuilding');
  $tileBottomRightUpperBuilding = $bottomRightTile.find('.upperBuilding');

  if ($tileBottomRightBuilding.length > 0 || $tileNextBottomLeftBuilding.length > 0 ||   $tileBottomRightUpperBuilding.length > 0 ) {
    building.buildBottomRightIceCreamSundae($specificTile);
    return;
  } else {

    // CHECKS TOP RIGHT BUILDING SPOT
    $tileTopRightBuilding = $specificTile.find('.topRightBuilding');
    $tileNextTopLeftBuilding = $nextTile.find('.topLeftBuilding');
    $tileUpperRightBottomBuilding = $upperRightTile.find('.bottomBuilding');

    // CHECKS BOTTOM BUILDING SPOT
    $tileBottomBuilding = $specificTile.find('.bottomBuilding');
    $tileBottomLeftUpperRightBuilding = $bottomLeftTile.find('.topRightBuilding');
    $tileBottomRightUpperLeftBuilding = $bottomRightTile.find('.topLeftBuilding');

    $tileNextBottomBuilding = $nextTile.find('.bottomBuilding');
    $tileBottomRightUpperRightBuilding = $bottomRightTile.find('.topRightBuilding');
    $tileBottomRightNextUpperLeftBuilding = $bottomRightNextTile.find('.topLeftBuilding');
  }

  if ($tileTopRightBuilding.length > 0 || $tileNextTopLeftBuilding.length > 0 || $tileUpperRightBottomBuilding.length > 0 ) {
    alert('cant put a building there it is not two spots away from another building');
    return;
  } else if ($tileBottomBuilding.length > 0 || $tileBottomLeftUpperRightBuilding.length > 0 || $tileBottomRightUpperLeftBuilding.length > 0 ) {
    alert('cant put a building there it is not two spots away from another building');
    return;
  } else if ($tileNextBottomBuilding.length > 0 || $tileBottomRightUpperRightBuilding.length > 0 || $tileBottomRightNextUpperLeftBuilding.length > 0) {
    alert('cant put a building there it is not two spots away from another building');
    return;
  } else {
    building.buildBottomRightBuilding($specificTile);
    return;
  }
}
