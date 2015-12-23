var building = {};

building.buildUpperBuilding = function($tile) {
  $tile.append('<img class="upperBuilding building" src='+playerInfo[my.currentPlayer].cupCake+'>');
  $tile.find('.upperBuilding').css('color',playerInfo[my.currentPlayer].color);
  playerInfo[my.currentPlayer].numberOfCupcakes--;
}

building.buildUpperLeftBuilding = function($tile) {
  $tile.append('<img class="topLeftBuilding building" src='+playerInfo[my.currentPlayer].cupCake+'>');
  $tile.find('.topLeftBuilding').css('color',playerInfo[my.currentPlayer].color);
  playerInfo[my.currentPlayer].numberOfCupcakes--;
}

building.buildUpperRightBuilding = function($tile) {
  $tile.append('<img class="topRightBuilding building" src='+playerInfo[my.currentPlayer].cupCake+'>');
  $tile.find('.topRightBuilding').css('color',playerInfo[my.currentPlayer].color);
  playerInfo[my.currentPlayer].numberOfCupcakes--;
}

building.buildBottomBuilding = function($tile) {
  $tile.append('<img class="bottomBuilding building" src='+playerInfo[my.currentPlayer].cupCake+'>');
  $tile.find('.bottomBuilding').css('color',playerInfo[my.currentPlayer].color);
  playerInfo[my.currentPlayer].numberOfCupcakes--;
}

building.buildBottomLeftBuilding = function($tile) {
  $tile.append('<img class="bottomLeftBuilding building" src='+playerInfo[my.currentPlayer].cupCake+'>');
  $tile.find('.bottomLeftBuilding').css('color',playerInfo[my.currentPlayer].color);
  playerInfo[my.currentPlayer].numberOfCupcakes--;
}

building.buildBottomRightBuilding = function($tile) {
  $tile.append('<img class="bottomRightBuilding building" src='+playerInfo[my.currentPlayer].cupCake+'>');
  $tile.find('.bottomRightBuilding').css('color',playerInfo[my.currentPlayer].color);
  playerInfo[my.currentPlayer].numberOfCupcakes--;
}

building.buildBottomRightIceCreamSundae = function($tile) {
  $tile.find('.bottomRightBuilding').remove();
  $tile.append('<img class="bottomRightBuilding building" src='+playerInfo[my.currentPlayer].iceCream+'>');
  $tile.find('.bottomRightBuilding').css('color',playerInfo[my.currentPlayer].color);
  playerInfo[my.currentPlayer].numberOfIceCreamSundaes--;
}

building.buildBottomLeftIceCreamSundae = function($tile) {
  $tile.find('.bottomLeftBuilding').remove();
  $tile.append('<img class="bottomLeftBuilding building" src='+playerInfo[my.currentPlayer].iceCream+'>');
  $tile.find('.bottomLeftBuilding').css('color',playerInfo[my.currentPlayer].color);
  playerInfo[my.currentPlayer].numberOfIceCreamSundaes--;
}

building.buildBottomIceCreamSundae = function($tile) {
  $tile.find('.bottomBuilding').remove();
  $tile.append('<img class="bottomBuilding building" src='+playerInfo[my.currentPlayer].iceCream+'>');
  $tile.find('.bottomBuilding').css('color',playerInfo[my.currentPlayer].color);
  playerInfo[my.currentPlayer].numberOfIceCreamSundaes--;
}

building.buildUpperIceCreamSundae = function($tile) {
  $tile.find('.upperBuilding').remove();
  $tile.append('<img class="upperBuilding building" src='+playerInfo[my.currentPlayer].iceCream+'>');
  $tile.find('.upperBuilding').css('color',playerInfo[my.currentPlayer].color);
  playerInfo[my.currentPlayer].numberOfIceCreamSundaes--;
}

building.buildTopRightIceCreamSundae = function($tile) {
  $tile.find('.topRightBuilding').remove();
  $tile.append('<img class="topRightBuilding building" src='+playerInfo[my.currentPlayer].iceCream+'>');
  $tile.find('.topRightBuilding').css('color',playerInfo[my.currentPlayer].color);
  playerInfo[my.currentPlayer].numberOfIceCreamSundaes--;
}

building.buildTopLeftIceCreamSundae = function($tile) {
  $tile.find('.topLeftBuilding').remove();
  $tile.append('<img class="topLeftBuilding building" src='+playerInfo[my.currentPlayer].iceCream+'>');
  $tile.find('.topLeftBuilding').css('color',playerInfo[my.currentPlayer].color);
  playerInfo[my.currentPlayer].numberOfIceCreamSundaes--;
}

building.upper = function($specificTile, $previousTile, $nextTile, $upperLeftTile, $upperRightTile, $bottomLeftTile, $bottomRightTile,$straightAboveTile, playerColor) {
  // CHECKS TOP BUILDING SPOT
  $tileTopBuilding = $specificTile.find('.upperBuilding');
  $tileTopLeftBottomRightBuilding = $upperLeftTile.find('.bottomRightBuilding');
  $tileTopRightBottomLeftBuilding = $upperRightTile.find('.bottomLeftBuilding');

  if ($tileTopBuilding.length > 0) {
    var $tileTopBuildingColor = $tile.find('.upperBuilding').css('color');
    if($tileTopBuildingColor == playerColor) {
      building.buildUpperIceCreamSundae($specificTile);
      return;
    } else {
      return;
    }
  } else if($tileTopLeftBottomRightBuilding.length > 0) {
    var $tileTopLeftBottomRightBuildingColor = $upperLeftTile.find('.bottomRightBuilding').css('color');
    if ($tileTopLeftBottomRightBuildingColor == playerColor) {
      building.buildBottomRightIceCreamSundae($upperLeftTile);
      return;
    } else {
      return;
    }
  } else if ($tileTopRightBottomLeftBuilding.length > 0) {
    var tileTopRightBottomLeftBuildingColor = $upperRightTile.find('.bottomLeftBuilding').css('color');
    if(tileTopRightBottomLeftBuildingColor == playerColor) {
      building.buildBottomLeftIceCreamSundae($upperRightTile);
      return;
    } else {
      return;
    }
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
    var $tileTopLeftBuildingColor = $specificTile.find('.topLeftBuilding').css('color');
    if($tileTopLeftBuildingColor == playerColor) {
      building.buildTopLeftIceCreamSundae($specificTile);
      return;
    } else {
      return;
    }
  } else if ($tileUpperLeftBottomBuilding.length > 0) {
    var $tileUpperLeftBottomBuildingColor = $upperLeftTile.find('.bottomBuilding').css('color');
    if ($tileUpperLeftBottomBuildingColor == playerColor) {
      building.buildBottomIceCreamSundae($upperLeftTile);
      return;
    } else {
      return;
    }
  } else if($tilePreviousTopRightBuilding.length > 0) {
    var $tilePreviousTopRightBuildingColor= $previousTile.find('.topRightBuilding').css('color');
    if($tilePreviousTopRightBuildingColor == playerColor) {
      building.buildTopRightIceCreamSundae($previousTile);
      return;
    } else {
      return;
    }
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
    var $tileTopRightBuildingColor = $specificTile.find('.topRightBuilding').css('color');
    if ($tileTopRightBuildingColor == playerColor) {
      building.buildTopRightIceCreamSundae($specificTile);
      return;
    } else {
      return;
    }
  } else if($tileNextTopLeftBuilding.length > 0) {
    var $tileNextTopLeftBuildingColor = $nextTile.find('.topLeftBuilding').css('color');
    if ($tileNextTopLeftBuildingColor == playerColor) {
      building.buildTopLeftIceCreamSundae($nextTile);
      return;
    } else {
      return;
    }
  } else if($tileUpperRightBottomBuilding.length > 0) {
    var $tileUpperRightBottomBuildingColor = $upperRightTile.find('.bottomBuilding').css('color');
    if($tileUpperRightBottomBuildingColor == playerColor) {
      building.buildBottomIceCreamSundae($upperRightTile);
      return;
    } else {
      return;
    }
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
    var $tileBottomBuildingColor = $specificTile.find('.bottomBuilding').css('color');
    if ($tileBottomBuildingColor == playerColor) {
      building.buildBottomIceCreamSundae($specificTile);
      return;
    } else {
      return;
    }
  } else if ($tileBottomLeftUpperRightBuilding.length > 0) {
    var $tileBottomLeftUpperRightBuildingColor = $bottomLeftTile.find('.topRightBuilding').css('color');
    if ($tileBottomLeftUpperRightBuildingColor == playerColor) {
      building.buildTopRightIceCreamSundae($bottomLeftTile);
      return;
    } else {
      return;
    }
  } else if ($tileBottomRightUpperLeftBuilding.length > 0) {
    var $tileBottomRightUpperLeftBuildingColor = $bottomRightTile.find('.topLeftBuilding');
    if($tileBottomRightUpperLeftBuildingColor == playerColor) {
      building.buildTopLeftIceCreamSundae($bottomRightTile);
      return;
    } else {
      return;
    }
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
    var $tilePreviousBottomRightBuildingColor = $previousTile.find('.bottomRightBuilding').css('color');
    if($tilePreviousBottomRightBuildingColor == playerColor) {
      building.buildBottomRightIceCreamSundae($previousTile);
      return;
    } else {
      return;
    }
  } else if ($tileBottomLeftBuilding.length > 0) {
    var $tileBottomLeftBuildingColor = $specificTile.find('.bottomLeftBuilding').css('color');
    if ($tileBottomLeftBuildingColor == playerColor) {
      building.buildBottomLeftIceCreamSundae($specificTile);
      return;
    } else {
      return;
    }
  } else if ($tileBottomLeftUpperBuilding.length > 0) {
    var $tileBottomLeftUpperBuildingColor = $bottomLeftTile.find('.upperBuilding').css('color');
    if($tileBottomLeftUpperBuildingColor == playerColor) {
      building.buildUpperIceCreamSundae($bottomLeftTile);
      return;
    } else {
      return;
    }
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

  if ($tileBottomRightBuilding.length > 0) {
    var $tileBottomRightBuildingColor = $specificTile.find('.bottomRightBuilding').css('color');
    if($tileBottomRightBuildingColor == playerColor) {
      building.buildBottomRightIceCreamSundae($specificTile);
      return;
    } else {
      return;
    }
  } else if ($tileNextBottomLeftBuilding.length > 0) {
    var $tileNextBottomLeftBuildingColor = $nextTile.find('.bottomLeftBuilding').css('color');
    if($tileNextBottomLeftBuildingColor == playerColor) {
      building.buildBottomLeftIceCreamSundae($nextTile);
      return;
    } else {
      return;
    }
  } else if ($tileBottomRightUpperBuilding.length > 0) {
    var $tileBottomRightUpperBuildingColor = $bottomRightTile.find('.upperBuilding').css('color');
    if($tileBottomRightUpperBuildingColor == playerColor) {
      building.buildUpperIceCreamSundae($bottomRightTile);
      return;
    } else {
      return;
    }
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
