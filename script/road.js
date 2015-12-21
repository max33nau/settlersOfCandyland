var road = {};

road.buildLeftRoad = function($tile) {
  $tile.append('<div class="leftRoad"></div>');
  $tile.find('.leftRoad').css('background-color',playerInfo[my.currentPlayer].color);
  playerInfo[my.currentPlayer].numberOfChurros--;
}

road.buildRightRoad = function($tile) {
  $tile.append('<div class="rightRoad"></div>');
  $tile.find('.rightRoad').css('background-color',playerInfo[my.currentPlayer].color);
  playerInfo[my.currentPlayer].numberOfChurros--;
}

road.buildTopRightRoad = function($tile) {
  $tile.append('<div class="topRightRoad"></div>');
  $tile.find('.topRightRoad').css('background-color',playerInfo[my.currentPlayer].color);
  playerInfo[my.currentPlayer].numberOfChurros--;
}

road.buildTopLeftRoad = function($tile) {
  $tile.append('<div class="topLeftRoad"></div>');
  $tile.find('.topLeftRoad').css('background-color',playerInfo[my.currentPlayer].color);
  playerInfo[my.currentPlayer].numberOfChurros--;
}

road.buildBottomRightRoad = function($tile) {
  $tile.append('<div class="bottomRightRoad"></div>');
  $tile.find('.bottomRightRoad').css('background-color',playerInfo[my.currentPlayer].color);
  playerInfo[my.currentPlayer].numberOfChurros--;
}

road.buildBottomLeftRoad = function($tile) {
  $tile.append('<div class="bottomLeftRoad"></div>');
  $tile.find('.bottomLeftRoad').css('background-color',playerInfo[my.currentPlayer].color);
  playerInfo[my.currentPlayer].numberOfChurros--;
}

road.middleLeft = function($specificTile, $previousTile, $nextTile, $upperLeftTile, $upperRightTile, $bottomLeftTile, $bottomRightTile, playerColor) {
  $tileMiddleLeftRoad = $specificTile.find('.leftRoad');
  $tilePreviousRightRode = $previousTile.find('.rightRoad');
// CHECK IF ROAD ALREADY EXISTS IN THAT SPOT
  if ($tileMiddleLeftRoad.length > 0 || $tilePreviousRightRode.length > 0) {
    alert('Cannot build road, there is one already there');
    return;
  } else {
    $tilePreviousBottomRightBuilding = $previousTile.find('.bottomRightBuilding');
    $tileBottomLeftBuilding = $specificTile.find('.bottomLeftBuilding');
    $tileBottomLeftUpperBuilding = $bottomLeftTile.find('.upperBuilding');

    $tileUpperLeftBottomBuilding = $upperLeftTile.find('.bottomBuilding');
    $tileTopLeftBuilding = $specificTile.find('.topLeftBuilding');
    $tilePreviousTopRightBuilding = $previousTile.find('.topRightBuilding');


    $tileBottomLeftRoad = $specificTile.find('.bottomLeftRoad');
    $tileBottomLeftUpperRightRoad = $bottomLeftTile.find('.topRightRoad');

    $tileTopLeftRoad = $specificTile.find('.topLeftRoad');
    $tileUpperLeftBottomRightRoad = $upperLeftTile.find('.bottomRightRoad');

    $tilePreviousTopRightRoad = $previousTile.find('.topRightRoad');
    $tileUpperLeftBottomLeftRoad = $upperLeftTile.find('.bottomLeftRoad');

    $tilePreviousBottomRightRoad = $previousTile.find('.bottomRightRoad');
    $tileBottomLeftUpperLeftRoad = $bottomLeftTile.find('.topLeftRoad');
  }
// CHECK TOP LEFT BUILDING SPOT AND TOP RIGHT BUILDING SPOT OF PREVIOUS TILE AND UPPLER LEFT TILE BOTTOM BUILDING SPOT
  if ($tileTopLeftBuilding.length > 0) {
    $tileTopLeftBuildingColor = $tileTopLeftBuilding.css('background-color');
    if ($tileTopLeftBuildingColor == playerColor) {
      road.buildLeftRoad($specificTile);
      return;
    }
  }
 if( $tilePreviousTopRightBuilding.length > 0) {
    $tilePreviousTopRightBuildingColor = $tilePreviousTopRightBuilding.css('background-color');
    if ($tilePreviousTopRightBuildingColor == playerColor) {
      road.buildLeftRoad($specificTile);
      return;
    }
  }
 if ($tileUpperLeftBottomBuilding.length > 0) {
    $tileUpperLeftBottomBuildingColor = $tileUpperLeftBottomBuilding.css('background-color');
    if ($tileUpperLeftBottomBuildingColor == playerColor) {
      road.buildLeftRoad($specificTile);
      return;
    }
  }
// CHECK BOTTOM LEFT BUILDING SPOT AND PREVIOUS TILE BOTTOM RIGHT SPOT AND BOTTOM LEFT UPPER BUILDING SPOT
  if ($tileBottomLeftBuilding.length > 0 ) {
    $tileBottomLeftBuildingColor = $tileBottomLeftBuilding.css('background-color');
    if($tileBottomLeftBuildingColor == playerColor) {
      road.buildLeftRoad($specificTile);
      return;
    }
  }
 if($tilePreviousBottomRightBuilding.length > 0) {
      $tilePreviousBottomRightBuildingColor = $tilePreviousBottomRightBuilding.css('background-color');
      if ($tilePreviousBottomRightBuildingColor == playerColor) {
        road.buildLeftRoad($specificTile);
        return;
      }
  }
 if($tileBottomLeftUpperBuilding.length > 0) {
      $tileBottomLeftUpperBuildingColor = $tileBottomLeftUpperBuilding.css('background-color');
      if ($tileBottomLeftUpperBuildingColor == playerColor) {
        road.buildLeftRoad($specificTile);
        return;
      }
  }
  if($tileTopLeftRoad.length > 0) {
    $tileTopLeftRoadColor = $tileTopLeftRoad.css('background-color');
    if ($tileTopLeftRoadColor == playerColor) {
      road.buildLeftRoad($specificTile);
      return;
    }
  }
  if ($tileUpperLeftBottomRightRoad.length > 0) {
    $tileUpperLeftBottomRightRoadColor = $tileUpperLeftBottomRightRoad.css('background-color');
    if($tileUpperLeftBottomRightRoadColor == playerColor) {
      road.buildLeftRoad($specificTile);
      return;
    }
  }
  if ($tilePreviousTopRightRoad.length > 0) {
    $tilePreviousTopRightRoadColor = $tilePreviousTopRightRoad.css('background-color');
    if ($tilePreviousTopRightRoadColor == playerColor) {
      road.buildLeftRoad($specificTile);
      return;
    }
  }
  if ($tileUpperLeftBottomLeftRoad.length > 0) {
    $tileUpperLeftBottomLeftRoadColor = $tileUpperLeftBottomLeftRoad.css('background-color');
    if($tileUpperLeftBottomLeftRoadColor == playerColor) {
      road.buildLeftRoad($specificTile);
      return;
    }
  }
  if ($tilePreviousBottomRightRoad.length > 0) {
    $tilePreviousBottomRightRoadColor = $tilePreviousBottomRightRoad.css('background-color');
    if ($tilePreviousBottomRightRoadColor == playerColor) {
      road.buildLeftRoad($specificTile);
      return;
    }
  }
  if ($tileBottomLeftUpperLeftRoad.length > 0) {
    $tileBottomLeftUpperLeftRoadColor = $tileBottomLeftUpperLeftRoad.css('background-color');
    if($tileBottomLeftUpperLeftRoadColor == playerColor) {
      road.buildLeftRoad($specificTile);
      return;
    }
  }
  if ($tileBottomLeftRoad.length > 0) {
    $tileBottomLeftRoadColor = $tileBottomLeftRoad.css('background-color');
    if ($tileBottomLeftRoadColor == playerColor) {
      road.buildLeftRoad($specificTile);
      return;
    }
  }
  if ($tileBottomLeftUpperRightRoad.length > 0) {
    $tileBottomLeftUpperRightRoadColor = $tileBottomLeftUpperRightRoad.css('background-color');
    if($tileBottomLeftUpperRightRoadColor == playerColor) {
      road.buildLeftRoad($specificTile);
      return;
    }
  }
}

road.middleRight = function($specificTile, $previousTile, $nextTile, $upperLeftTile, $upperRightTile, $bottomLeftTile, $bottomRightTile, playerColor) {
  $tileMiddleRightRoad = $specificTile.find('.rightRoad');
  $tileNextMiddleLeftRode = $nextTile.find('.leftRoad');
// CHECK IF ROAD ALREADY EXISTS IN THAT SPOT
  if ($tileMiddleRightRoad.length > 0 || $tileNextMiddleLeftRode.length > 0) {
    alert('Cannot build road, there is one already there');
    return;
  } else {
    $tileTopRightBuilding = $specificTile.find('.topRightBuilding');
    $tileNextTopLeftBuilding = $nextTile.find('.topLeftBuilding');
    $tileUpperRightBottomBuilding = $upperRightTile.find('.bottomBuilding');

    $tileBottomRightBuilding = $specificTile.find('.bottomRightBuilding');
    $tileNextBottomLeftBuilding = $nextTile.find('.bottomLeftBuilding');
    $tileBottomRightUpperBuilding = $bottomRightTile.find('.upperBuilding');

    $tileBottomRightRoad = $specificTile.find('.bottomRightRoad');
    $tileBottomRightUpperLeftRoad = $bottomRightTile.find('.topLeftRoad');

    $tileTopRightRoad = $specificTile.find('.topRightRoad');
    $tileUpperRightBottomLeftRoad = $upperRightTile.find('.bottomLeftRoad');

    $tileNextTopLeftRoad = $nextTile.find('.topLeftRoad');
    $tileUpperRightBottomRightRoad = $upperRightTile.find('.bottomRightRoad');

    $tileNextBottomLeftRoad = $nextTile.find('.bottomLeftRoad');
    $tileBottomRightUpperRightRoad = $bottomRightTile.find('.topRightRoad');
  }
// CHECK TOP LEFT BUILDING SPOT AND TOP RIGHT BUILDING SPOT OF PREVIOUS TILE AND UPPLER LEFT TILE BOTTOM BUILDING SPOT
  if ($tileTopRightBuilding.length > 0) {
    $tileTopRightBuildingColor = $tileTopRightBuilding.css('background-color');
    if ($tileTopRightBuildingColor == playerColor) {
      road.buildRightRoad($specificTile);
      return;
    }
  }
 if( $tileNextTopLeftBuilding.length > 0) {
    $tileNextTopLeftBuildingColor = $tileNextTopLeftBuilding.css('background-color');
    if ($tileNextTopLeftBuildingColor == playerColor) {
      road.buildRightRoad($specificTile);
      return;
    }
  }
 if ($tileUpperRightBottomBuilding.length > 0) {
    $tileUpperRightBottomBuildingColor = $tileUpperRightBottomBuilding.css('background-color');
    if ($tileUpperRightBottomBuildingColor == playerColor) {
      road.buildRightRoad($specificTile);
      return;
    }
  }
// CHECK BOTTOM LEFT BUILDING SPOT AND PREVIOUS TILE BOTTOM RIGHT SPOT AND BOTTOM LEFT UPPER BUILDING SPOT
  if ($tileBottomRightBuilding.length > 0 ) {
    $tileBottomRightBuildingColor = $tileBottomRightBuilding.css('background-color');
    if($tileBottomRightBuildingColor == playerColor) {
      road.buildRightRoad($specificTile);
      return;
    }
  }
 if($tileNextBottomLeftBuilding.length > 0) {
      $tileNextBottomLeftBuildingColor = $tileNextBottomLeftBuilding.css('background-color');
      if ($tileNextBottomLeftBuildingColor == playerColor) {
        road.buildRightRoad($specificTile);
        return;
      }
  }
 if($tileBottomRightUpperBuilding.length > 0) {
      $tileBottomRightUpperBuildingColor = $tileBottomRightUpperBuilding.css('background-color');
      if ($tileBottomRightUpperBuildingColor == playerColor) {
        road.buildRightRoad($specificTile);
        return;
      }
  }

  // TOP RIGHT SPOT
  if($tileTopRightRoad.length > 0) {
    $tileTopRightRoadColor = $tileTopRightRoad.css('background-color');
    if ($tileTopRightRoadColor == playerColor) {
      road.buildRightRoad($specificTile);
      return;
    }
  }
  if ($tileUpperRightBottomLeftRoad.length > 0) {
    $tileUpperRightBottomLeftRoadColor = $tileUpperRightBottomLeftRoad.css('background-color');
    if($tileUpperRightBottomLeftRoadColor == playerColor) {
      road.buildRightRoad($specificTile);
      return;
    }
  }

  // BOTTOM RIGHT SPOT
  if ($tileBottomRightRoad.length > 0) {
    $tileBottomRightRoadColor = $tileBottomRightRoad.css('background-color');
    if ($tileBottomRightRoadColor == playerColor) {
      road.buildRightRoad($specificTile);
      return;
    }
  }
  if ($tileBottomRightUpperLeftRoad.length > 0) {
    $tileBottomRightUpperLeftRoadColor = $tileBottomRightUpperLeftRoad.css('background-color');
    if($tileBottomRightUpperLeftRoadColor == playerColor) {
      road.buildRightRoad($specificTile);
      return;
    }
  }

// NEXT TOP LEFT SPOT
  if ($tileNextTopLeftRoad.length > 0) {
    $tileNextTopLeftRoadColor = $tileNextTopLeftRoad.css('background-color');
    if ($tileNextTopLeftRoadColor == playerColor) {
      road.buildRightRoad($specificTile);
      return;
    }
  }
  if ($tileUpperRightBottomRightRoad.length > 0) {
    $tileUpperRightBottomRightRoadColor = $tileUpperRightBottomRightRoad.css('background-color');
    if($tileUpperRightBottomRightRoadColor == playerColor) {
      road.buildRightRoad($specificTile);
      return;
    }
  }

  // NEXT BOTTOM LEFT SPOT
  if ($tileNextBottomLeftRoad.length > 0) {
    $tileNextBottomLeftRoadColor = $tileNextBottomLeftRoad.css('background-color');
    if ($tileNextBottomLeftRoadColor == playerColor) {
      road.buildRightRoad($specificTile);
      return;
    }
  }
  if ($tileBottomRightUpperRightRoad.length > 0) {
    $tileBottomRightUpperRightRoadColor = $tileBottomRightUpperRightRoad.css('background-color');
    if($tileBottomRightUpperRightRoadColor == playerColor) {
      road.buildRightRoad($specificTile);
      return;
    }
  }
}

road.upperRight = function($specificTile, $previousTile, $nextTile, $upperLeftTile, $upperRightTile, $bottomLeftTile, $bottomRightTile, playerColor) {
  $tileTopRightRoad = $specificTile.find('.topRightRoad');
  $tileUpperRightBottomLeftRoad = $upperRightTile.find('.bottomLeftRoad');
// CHECK IF ROAD ALREADY EXISTS IN THAT SPOT
  if ($tileTopRightRoad.length > 0 || $tileUpperRightBottomLeftRoad.length > 0) {
    alert('Cannot build road, there is one already there');
    return;
  } else {
    $tileTopBuilding = $specificTile.find('.upperBuilding');
    $tileTopLeftBottomRightBuilding = $upperLeftTile.find('.bottomRightBuilding');
    $tileTopRightBottomLeftBuilding = $upperRightTile.find('.bottomLeftBuilding');

    $tileTopRightBuilding = $specificTile.find('.topRightBuilding');
    $tileNextTopLeftBuilding = $nextTile.find('.topLeftBuilding');
    $tileTopRightBottomBuilding = $upperRightTile.find('.bottomBuilding');

    $tileMiddleRightRoad = $specificTile.find('.rightRoad');
    $tileNextMiddleLeftRode = $nextTile.find('.leftRoad');

    $tileTopLeftMiddleRightRoad = $upperLeftTile.find('.rightRoad');
    $tileTopRightLeftRode = $upperRightTile.find('.leftRoad');

    $tileTopLeftRoad = $specificTile.find('.topLeftRoad');
    $tileUpperLeftBottomRightRoad = $upperLeftTile.find('.bottomRightRoad');

    $tileNextUpperLeftRoad = $nextTile.find('.topLeftRoad');
    $tileTopRightBottomRightRoad = $upperRightTile.find('.bottomRightRoad');
  }
// CHECK TOP BUILDING SPOT
  if ($tileTopBuilding.length > 0) {
    $tileTopBuildingColor = $tileTopBuilding.css('background-color');
    if ($tileTopBuildingColor == playerColor) {
      road.buildTopRightRoad($specificTile);
      return;
    }
  }
 if( $tileTopLeftBottomRightBuilding.length > 0) {
    $tileTopLeftBottomRightBuildingColor = $tileTopLeftBottomRightBuilding.css('background-color');
    if ($tileTopLeftBottomRightBuildingColor == playerColor) {
      road.buildTopRightRoad($specificTile);
      return;
    }
  }
 if ($tileTopRightBottomLeftBuilding.length > 0) {
    $tileTopRightBottomLeftBuildingColor = $tileTopRightBottomLeftBuilding.css('background-color');
    if ($tileTopRightBottomLeftBuildingColor == playerColor) {
      road.buildTopRightRoad($specificTile);
      return;
    }
  }
// CHECK TOP RIGHT BUILDING SPOT
  if ($tileTopRightBuilding.length > 0 ) {
    $tileTopRightBuildingColor = $tileTopRightBuilding.css('background-color');
    if($tileTopRightBuildingColor == playerColor) {
      road.buildTopRightRoad($specificTile);
      return;
    }
  }
 if($tileNextTopLeftBuilding.length > 0) {
      $tileNextTopLeftBuildingColor = $tileNextTopLeftBuilding.css('background-color');
      if ($tileNextTopLeftBuildingColor == playerColor) {
        road.buildTopRightRoad($specificTile);
        return;
      }
  }
 if($tileTopRightBottomBuilding.length > 0) {
      $tileTopRightBottomBuildingColor = $tileTopRightBottomBuilding.css('background-color');
      if ($tileTopRightBottomBuildingColor == playerColor) {
        road.buildTopRightRoad($specificTile);
        return;
      }
  }

  // Middle RIGHT SPOT
  if($tileMiddleRightRoad.length > 0) {
    $tileMiddleRightRoadColor = $tileMiddleRightRoad.css('background-color');
    if ($tileMiddleRightRoadColor == playerColor) {
      road.buildTopRightRoad($specificTile);
      return;
    }
  }
  if ($tileNextMiddleLeftRode.length > 0) {
    $tileNextMiddleLeftRodeColor = $tileNextMiddleLeftRode.css('background-color');
    if($tileNextMiddleLeftRodeColor == playerColor) {
      road.buildTopRightRoad($specificTile);
      return;
    }
  }

  // MIDDLE ROAD ABOVE CHECK
  if ($tileTopLeftMiddleRightRoad.length > 0) {
    $tileTopLeftMiddleRightRoadColor = $tileTopLeftMiddleRightRoad.css('background-color');
    if ($tileTopLeftMiddleRightRoadColor == playerColor) {
      road.buildTopRightRoad($specificTile);
      return;
    }
  }
  if ($tileTopRightLeftRode.length > 0) {
    $tileTopRightLeftRodeColor = $tileTopRightLeftRode.css('background-color');
    if($tileTopRightLeftRodeColor == playerColor) {
      road.buildTopRightRoad($specificTile);
      return;
    }
  }

// SPECIFIC TILE TOP LEFT ROAD CHECK
  if ($tileTopLeftRoad.length > 0) {
    $tileTopLeftRoadColor = $tileTopLeftRoad.css('background-color');
    if ($tileTopLeftRoadColor == playerColor) {
      road.buildTopRightRoad($specificTile);
      return;
    }
  }
  if ($tileUpperLeftBottomRightRoad.length > 0) {
    $tileUpperLeftBottomRightRoadColor = $tileUpperLeftBottomRightRoad.css('background-color');
    if($tileUpperLeftBottomRightRoadColor == playerColor) {
      road.buildTopRightRoad($specificTile);
      return;
    }
  }

  // NEXT TILE TOP LEFT SPOT
  if ($tileNextUpperLeftRoad.length > 0) {
    $tileNextUpperLeftRoadColor = $tileNextUpperLeftRoad.css('background-color');
    if ($tileNextUpperLeftRoadColor == playerColor) {
      road.buildTopRightRoad($specificTile);
      return;
    }
  }
  if ($tileTopRightBottomRightRoad.length > 0) {
    $tileTopRightBottomRightRoadColor = $tileTopRightBottomRightRoad.css('background-color');
    if($tileTopRightBottomRightRoadColor == playerColor) {
      road.buildTopRightRoad($specificTile);
      return;
    }
  }
}

road.upperLeft = function($specificTile, $previousTile, $nextTile, $upperLeftTile, $upperRightTile, $bottomLeftTile, $bottomRightTile, playerColor) {
  $tileTopLeftRoad = $specificTile.find('.topLeftRoad');
  $tileUpperLeftBottomRightRoad = $upperLeftTile.find('.bottomRightRoad');
// CHECK IF ROAD ALREADY EXISTS IN THAT SPOT
  if ($tileTopLeftRoad.length > 0 || $tileUpperLeftBottomRightRoad.length > 0) {
    alert('Cannot build road, there is one already there');
    return;
  } else {
    $tileTopBuilding = $specificTile.find('.upperBuilding');
    $tileTopLeftBottomRightBuilding = $upperLeftTile.find('.bottomRightBuilding');
    $tileTopRightBottomLeftBuilding = $upperRightTile.find('.bottomLeftBuilding');

    $tileTopLeftBuilding = $specificTile.find('.topLeftBuilding');
    $tilePreviousTopRightBuilding = $previousTile.find('.topRightBuilding');
    $tileTopLeftBottomBuilding = $upperLeftTile.find('.bottomBuilding');

    $tileMiddleLeftRoad = $specificTile.find('.leftRoad');
    $tilePreviousRightRode = $previousTile.find('.rightRoad');

    $tileTopLeftMiddleRightRoad = $upperLeftTile.find('.rightRoad');
    $tileTopRightLeftRode = $upperRightTile.find('.leftRoad');

    $tileTopRightRoad = $specificTile.find('.topRightRoad');
    $tileUpperRightBottomLeftRoad = $upperRightTile.find('.bottomLeftRoad');

    $tilePreviousTopRightRoad = $previousTile.find('.topRightRoad');
    $tileUpperLeftBottomLeftRoad = $upperLeftTile.find('.bottomLeftRoad');
  }
// CHECK TOP BUILDING SPOT
  if ($tileTopBuilding.length > 0) {
    $tileTopBuildingColor = $tileTopBuilding.css('background-color');
    if ($tileTopBuildingColor == playerColor) {
      road.buildTopLeftRoad($specificTile);
      return;
    }
  }
 if( $tileTopLeftBottomRightBuilding.length > 0) {
    $tileTopLeftBottomRightBuildingColor = $tileTopLeftBottomRightBuilding.css('background-color');
    if ($tileTopLeftBottomRightBuildingColor == playerColor) {
      road.buildTopLeftRoad($specificTile);
      return;
    }
  }
 if ($tileTopRightBottomLeftBuilding.length > 0) {
    $tileTopRightBottomLeftBuildingColor = $tileTopRightBottomLeftBuilding.css('background-color');
    if ($tileTopRightBottomLeftBuildingColor == playerColor) {
      road.buildTopLeftRoad($specificTile);
      return;
    }
  }
// CHECK TOP LEFT BUILDING SPOT
  if ($tileTopLeftBuilding.length > 0 ) {
    $tileTopLeftBuildingColor = $tileTopLeftBuilding.css('background-color');
    if($tileTopLeftBuildingColor == playerColor) {
      road.buildTopLeftRoad($specificTile);
      return;
    }
  }
 if($tilePreviousTopRightBuilding.length > 0) {
      $tilePreviousTopRightBuildingColor = $tilePreviousTopRightBuilding.css('background-color');
      if ($tilePreviousTopRightBuildingColor == playerColor) {
        road.buildTopLeftRoad($specificTile);
        return;
      }
  }
 if($tileTopLeftBottomBuilding.length > 0) {
      $tileTopLeftBottomBuildingColor = $tileTopLeftBottomBuilding.css('background-color');
      if ($tileTopLeftBottomBuildingColor == playerColor) {
        road.buildTopLeftRoad($specificTile);
        return;
      }
  }

  // Middle Left ROAD SPOT
  if($tileMiddleLeftRoad.length > 0) {
    $tileMiddleLeftRoadColor = $tileMiddleLeftRoad.css('background-color');
    if ($tileMiddleLeftRoadColor == playerColor) {
      road.buildTopLeftRoad($specificTile);
      return;
    }
  }
  if ($tilePreviousRightRode.length > 0) {
    $tilePreviousRightRodeColor = $tilePreviousRightRode.css('background-color');
    if($tilePreviousRightRodeColor == playerColor) {
      road.buildTopLeftRoad($specificTile);
      return;
    }
  }

  // MIDDLE ROAD ABOVE CHECK
  if ($tileTopLeftMiddleRightRoad.length > 0) {
    $tileTopLeftMiddleRightRoadColor = $tileTopLeftMiddleRightRoad.css('background-color');
    if ($tileTopLeftMiddleRightRoadColor == playerColor) {
      road.buildTopLeftRoad($specificTile);
      return;
    }
  }
  if ($tileTopRightLeftRode.length > 0) {
    $tileTopRightLeftRodeColor = $tileTopRightLeftRode.css('background-color');
    if($tileTopRightLeftRodeColor == playerColor) {
      road.buildTopLeftRoad($specificTile);
      return;
    }
  }

// SPECIFIC TILE TOP Right ROAD CHECK
  if ($tileTopRightRoad.length > 0) {
    $tileTopRightRoadColor = $tileTopRightRoad.css('background-color');
    if ($tileTopRightRoadColor == playerColor) {
      road.buildTopLeftRoad($specificTile);
      return;
    }
  }
  if ($tileUpperRightBottomLeftRoad.length > 0) {
    $tileUpperRightBottomLeftRoadColor = $tileUpperRightBottomLeftRoad.css('background-color');
    if($tileUpperRightBottomLeftRoadColor == playerColor) {
      road.buildTopLeftRoad($specificTile);
      return;
    }
  }

  // Previous TILE TOP RIGHT ROAD SPOT
  if ($tilePreviousTopRightRoad.length > 0) {
    $tilePreviousTopRightRoadColor = $tilePreviousTopRightRoad.css('background-color');
    if ($tilePreviousTopRightRoadColor == playerColor) {
      road.buildTopLeftRoad($specificTile);
      return;
    }
  }
  if ($tileUpperLeftBottomLeftRoad.length > 0) {
    $tileUpperLeftBottomLeftRoadColor = $tileUpperLeftBottomLeftRoad.css('background-color');
    if($tileUpperLeftBottomLeftRoadColor == playerColor) {
      road.buildTopLeftRoad($specificTile);
      return;
    }
  }
}

road.bottomLeft = function($specificTile, $previousTile, $nextTile, $upperLeftTile, $upperRightTile, $bottomLeftTile, $bottomRightTile, playerColor) {
  $tileBottomLeftRoad = $specificTile.find('.bottomLeftRoad');
  $tileBottomLeftUpperRightRoad = $bottomLeftTile.find('.topRightRoad');
// CHECK IF ROAD ALREADY EXISTS IN THAT SPOT
  if ($tileBottomLeftRoad.length > 0 || $tileBottomLeftUpperRightRoad.length > 0) {
    alert('Cannot build road, there is one already there');
    return;
  } else {
    $tilePreviousBottomRightBuilding = $previousTile.find('.bottomRightBuilding');
    $tileBottomLeftBuilding = $specificTile.find('.bottomLeftBuilding');
    $tileBottomLeftUpperBuilding = $bottomLeftTile.find('.upperBuilding');

    $tileBottomBuilding = $specificTile.find('.bottomBuilding');
    $tileBottomLeftUpperRightBuilding = $bottomLeftTile.find('.topRightBuilding');
    $tileBottomRightUpperLeftBuilding = $upperRightTile.find('.topLeftBuilding');

    $tileMiddleLeftRoad = $specificTile.find('.leftRoad');
    $tilePreviousRightRode = $previousTile.find('.rightRoad');

    $tileBottomLeftMiddleRightRoad = $bottomLeftTile.find('.rightRoad');
    $tileBottomRightLeftRode = $bottomRightTile.find('.leftRoad');

    $tileBottomRightRoad = $specificTile.find('.bottomRightRoad');
    $tileBottomRightUpperLeftRoad = $bottomRightTile.find('.upperLeftRoad');

    $tilePreviousBottomRightRoad = $previousTile.find('.bottomRightRoad');
    $tileBottomLeftUpperLeftRoad = $bottomLeftTile.find('.upperLeftRoad');
  }
// CHECK BOTTOM LEFT BUILDING SPOT
  if ($tilePreviousBottomRightBuilding.length > 0) {
    $tilePreviousBottomRightBuildingColor = $tilePreviousBottomRightBuilding.css('background-color');
    if ($tilePreviousBottomRightBuildingColor == playerColor) {
      road.buildBottomLeftRoad($specificTile);
      return;
    }
  }
 if( $tileBottomLeftBuilding.length > 0) {
    $tileBottomLeftBuildingColor = $tileBottomLeftBuilding.css('background-color');
    if ($tileBottomLeftBuildingColor == playerColor) {
      road.buildBottomLeftRoad($specificTile);
      return;
    }
  }
 if ($tileBottomLeftUpperBuilding.length > 0) {
    $tileBottomLeftUpperBuildingColor = $tileBottomLeftUpperBuilding.css('background-color');
    if ($tileBottomLeftUpperBuildingColor == playerColor) {
      road.buildBottomLeftRoad($specificTile);
      return;
    }
  }
// CHECK BOTTOM BUILDING SPOT
  if ($tileBottomBuilding.length > 0 ) {
    $tileBottomBuildingColor = $tileBottomBuilding.css('background-color');
    if($tileBottomBuildingColor == playerColor) {
      road.buildBottomLeftRoad($specificTile);
      return;
    }
  }
 if($tileBottomLeftUpperRightBuilding.length > 0) {
      $tileBottomLeftUpperRightBuildingColor = $tileBottomLeftUpperRightBuilding.css('background-color');
      if ($tileBottomLeftUpperRightBuildingColor == playerColor) {
        road.buildBottomLeftRoad($specificTile);
        return;
      }
  }
 if($tileBottomRightUpperLeftBuilding.length > 0) {
      $tileBottomRightUpperLeftBuildingColor = $tileBottomRightUpperLeftBuilding.css('background-color');
      if ($tileBottomRightUpperLeftBuildingColor == playerColor) {
        road.buildBottomLeftRoad($specificTile);
        return;
      }
  }

  // Middle Left ROAD SPOT
  if($tileMiddleLeftRoad.length > 0) {
    $tileMiddleLeftRoadColor = $tileMiddleLeftRoad.css('background-color');
    if ($tileMiddleLeftRoadColor == playerColor) {
      road.buildBottomLeftRoad($specificTile);
      return;
    }
  }
  if ($tilePreviousRightRode.length > 0) {
    $tilePreviousRightRodeColor = $tilePreviousRightRode.css('background-color');
    if($tilePreviousRightRodeColor == playerColor) {
      road.buildBottomLeftRoad($specificTile);
      return;
    }
  }

  // MIDDLE ROAD Below CHECK
  if ($tileBottomLeftMiddleRightRoad.length > 0) {
    $tileBottomLeftMiddleRightRoadColor = $tileBottomLeftMiddleRightRoad.css('background-color');
    if ($tileBottomLeftMiddleRightRoadColor == playerColor) {
      road.buildBottomLeftRoad($specificTile);
      return;
    }
  }
  if ($tileBottomRightLeftRode.length > 0) {
    $tileBottomRightLeftRodeColor = $tileBottomRightLeftRode.css('background-color');
    if($tileBottomRightLeftRodeColor == playerColor) {
      road.buildBottomLeftRoad($specificTile);
      return;
    }
  }

// SPECIFIC TILE Bottom Right ROAD CHECK
  if ($tileBottomRightRoad.length > 0) {
    $tileBottomRightRoadColor = $tileBottomRightRoad.css('background-color');
    if ($tileBottomRightRoadColor == playerColor) {
      road.buildBottomLeftRoad($specificTile);
      return;
    }
  }
  if ($tileBottomRightUpperLeftRoad.length > 0) {
    $tileBottomRightUpperLeftRoadColor = $tileBottomRightUpperLeftRoad.css('background-color');
    if($tileBottomRightUpperLeftRoadColor == playerColor) {
      road.buildBottomLeftRoad($specificTile);
      return;
    }
  }

  // Previous TILE Bottom RIGHT ROAD SPOT
  if ($tilePreviousBottomRightRoad.length > 0) {
    $tilePreviousBottomRightRoadColor = $tilePreviousBottomRightRoad.css('background-color');
    if ($tilePreviousBottomRightRoadColor == playerColor) {
      road.buildBottomLeftRoad($specificTile);
      return;
    }
  }
  if ($tileBottomLeftUpperLeftRoad.length > 0) {
    $tileBottomLeftUpperLeftRoadColor = $tileBottomLeftUpperLeftRoad.css('background-color');
    if($tileBottomLeftUpperLeftRoadColor == playerColor) {
      road.buildBottomLeftRoad($specificTile);
      return;
    }
  }
}

road.bottomRight = function($specificTile, $previousTile, $nextTile, $upperLeftTile, $upperRightTile, $bottomLeftTile, $bottomRightTile, playerColor) {
  $tileBottomRightRoad = $specificTile.find('.bottomRightRoad');
  $tileBottomRightUpperLeftRoad = $bottomRightTile.find('.topLeftRoad');
// CHECK IF ROAD ALREADY EXISTS IN THAT SPOT
  if ($tileBottomRightRoad.length > 0 || $tileBottomRightUpperLeftRoad.length > 0) {
    alert('Cannot build road, there is one already there');
    return;
  } else {
    $tileNextBottomLeftBuilding = $nextTile.find('.bottomLeftBuilding');
    $tileBottomRightBuilding = $specificTile.find('.bottomRightBuilding');
    $tileBottomRightUpperBuilding = $bottomRightTile.find('.upperBuilding');

    $tileBottomBuilding = $specificTile.find('.bottomBuilding');
    $tileBottomLeftUpperRightBuilding = $bottomLeftTile.find('.topRightBuilding');
    $tileBottomRightUpperLeftBuilding = $upperRightTile.find('.topLeftBuilding');

    $tileMiddleRightRoad = $specificTile.find('.rightRoad');
    $tileNextLeftRode = $nextTile.find('.leftRoad');

    $tileBottomLeftMiddleRightRoad = $bottomLeftTile.find('.rightRoad');
    $tileBottomRightLeftRode = $bottomRightTile.find('.leftRoad');

    $tileBottomLeftRoad = $specificTile.find('.bottomLeftRoad');
    $tileBottomLeftUpperRightRoad = $bottomLeftTile.find('.upperRightRoad');

    $tileNextBottomLeftRoad = $nextTile.find('.bottomLeftRoad');
    $tileBottomRightUpperRightRoad = $bottomRightTile.find('.upperRightRoad');
  }
// CHECK BOTTOM RIGHT BUILDING SPOT
  if ($tileNextBottomLeftBuilding.length > 0) {
    $tileNextBottomLeftBuildingColor = $tileNextBottomLeftBuilding.css('background-color');
    if ($tileNextBottomLeftBuildingColor == playerColor) {
      road.buildBottomRightRoad($specificTile);
      return;
    }
  }
 if( $tileBottomRightBuilding.length > 0) {
    $tileBottomRightBuildingColor = $tileBottomRightBuilding.css('background-color');
    if ($tileBottomRightBuildingColor == playerColor) {
      road.buildBottomRightRoad($specificTile);
      return;
    }
  }
 if ($tileBottomRightUpperBuilding.length > 0) {
    $tileBottomRightUpperBuildingColor = $tileBottomRightUpperBuilding.css('background-color');
    if ($tileBottomRightUpperBuildingColor == playerColor) {
      road.buildBottomRightRoad($specificTile);
      return;
    }
  }
// CHECK BOTTOM BUILDING SPOT
  if ($tileBottomBuilding.length > 0 ) {
    $tileBottomBuildingColor = $tileBottomBuilding.css('background-color');
    if($tileBottomBuildingColor == playerColor) {
      road.buildBottomRightRoad($specificTile);
      return;
    }
  }
 if($tileBottomLeftUpperRightBuilding.length > 0) {
      $tileBottomLeftUpperRightBuildingColor = $tileBottomLeftUpperRightBuilding.css('background-color');
      if ($tileBottomLeftUpperRightBuildingColor == playerColor) {
        road.buildBottomRightRoad($specificTile);
        return;
      }
  }
 if($tileBottomRightUpperLeftBuilding.length > 0) {
      $tileBottomRightUpperLeftBuildingColor = $tileBottomRightUpperLeftBuilding.css('background-color');
      if ($tileBottomRightUpperLeftBuildingColor == playerColor) {
        road.buildBottomRightRoad($specificTile);
        return;
      }
  }

  // Middle RIGHT SPOT
  if($tileMiddleRightRoad.length > 0) {
    $tileMiddleRightRoadColor = $tileMiddleRightRoad.css('background-color');
    if ($tileMiddleRightRoadColor == playerColor) {
      road.buildBottomRightRoad($specificTile);
      return;
    }
  }
  if ($tileNextLeftRode.length > 0) {
    $tileNextLeftRodeColor = $tileNextLeftRode.css('background-color');
    if($tileNextLeftRodeColor == playerColor) {
      road.buildBottomRightRoad($specificTile);
      return;
    }
  }

  // BOTTOM LEFT MIDDLE ROAD SPOT
  if ($tileBottomLeftMiddleRightRoad.length > 0) {
    $tileBottomLeftMiddleRightRoadColor = $tileBottomLeftMiddleRightRoad.css('background-color');
    if ($tileBottomLeftMiddleRightRoadColor == playerColor) {
      road.buildBottomRightRoad($specificTile);
      return;
    }
  }
  if ($tileBottomRightLeftRode.length > 0) {
    $tileBottomRightLeftRodeColor = $tileBottomRightLeftRode.css('background-color');
    if($tileBottomRightLeftRodeColor == playerColor) {
      road.buildBottomRightRoad($specificTile);
      return;
    }
  }

// SPECIFIC TILE BOTTOM LEFT ROAD CHECK
  if ($tileBottomLeftRoad.length > 0) {
    $tileBottomLeftRoadColor = $tileBottomLeftRoad.css('background-color');
    if ($tileBottomLeftRoadColor == playerColor) {
      road.buildBottomRightRoad($specificTile);
      return;
    }
  }
  if ($tileBottomLeftUpperRightRoad.length > 0) {
    $tileBottomLeftUpperRightRoadColor = $tileBottomLeftUpperRightRoad.css('background-color');
    if($tileBottomLeftUpperRightRoadColor == playerColor) {
      road.buildBottomRightRoad($specificTile);
      return;
    }
  }

  // NEXT TILE Bottom LEFT SPOT
  if ($tileNextBottomLeftRoad.length > 0) {
    $tileNextBottomLeftRoadColor = $tileNextBottomLeftRoad.css('background-color');
    if ($tileNextBottomLeftRoadColor == playerColor) {
      road.buildBottomRightRoad($specificTile);
      return;
    }
  }
  if ($tileBottomRightUpperRightRoad.length > 0) {
    $tileBottomRightUpperRightRoadColor = $tileBottomRightUpperRightRoad.css('background-color');
    if($tileBottomRightUpperRightRoadColor == playerColor) {
      road.buildBottomRightRoad($specificTile);
      return;
    }
  }
}
