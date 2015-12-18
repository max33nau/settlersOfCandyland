var road = {};

road.buildLeftRoad = function($tile) {
  $tile.append('<div class="leftRoad"></div>');
  $tile.find('.leftRoad').css('background-color',playerInfo[my.currentPlayer].color);
  playerInfo[my.currentPlayer].numberOfChurros--;
}
road.middleLeft = function($specificTile, playerColor) {
  $tileMiddleLeftRoad = $specificTile.find('.leftRoad');
  $tilePreviousRightRode = $specificTile.prev().find('.rightRoad');

// CHECK IF ROAD ALREADY EXISTS IN THAT SPOT
  if ($tileMiddleLeftRoad.length > 0 || $tilePreviousRightRode.length > 0) {
    alert('Cannot build road, there is one already there');
  } else {
    $tileTopLeftBuilding = $specificTile.find('.topLeftBuilding');
    $tilePreviousTopRightBuilding = $specificTile.prev().find('.topRightBuilding');
  }

// CHECK TOP LEFT BUILDING SPOT AND TOP RIGHT BUILDING SPOT OF PREVIOUS TILE
  if ($tileTopLeftBuilding.length > 0) {
    $tileTopLeftBuildingColor = $tileTopLeftBuildingColor.css('background-color');
    if ($tileTopLeftBuildingColor == playerColor) {

    }
    return;
  } else if( $tilePreviousTopRightBuilding.length > 0) {
    $tilePreviousTopRightBuildingColor = $tilePreviousTopRightBuilding.css('background-color');
    if ($tilePreviousTopRightBuildingColor == playerColor) {
      $tile.append('<div class="leftRoad"></div>');
      $tile.find('.leftRoad').css('background-color',playerInfo[my.currentPlayer].color);
      playerInfo[my.currentPlayer].numberOfChurros--;
    }
    return;
  } else {
    $tileBottomLeftBuilding = $specificTile.find('.bottomLeftBuilding');
    $tilePreviousBottomRightBuilding = $specificTile.prev().find('.bottomRightBuilding');
  }

// CHECK BOTTOM LEFT BUILDING SPOT AND PREVIOUS TILE BOTTOM RIGHT SPOT
  if ($tileBottomLeftBuilding.length > 0 ) {
    $tileBottomLeftBuildingColor = $tileBottomLeftBuilding.css('background-color');
    if($tileBottomLeftBuildingColor == playerColor) {
      $tile.append('<div class="leftRoad"></div>');
      $tile.find('.leftRoad').css('background-color',playerInfo[my.currentPlayer].color);
      playerInfo[my.currentPlayer].numberOfChurros--;
    }
    return;
  } else if ($tilePreviousBottomRightBuilding.length > 0) {
      $tilePreviousBottomRightBuildingColor = $tilePreviousBottomRightBuilding.css('background-color');
      if ($tilePreviousBottomRightBuildingColor == playerColor) {
        $tile.append('<div class="leftRoad"></div>');
        $tile.find('.leftRoad').css('background-color',playerInfo[my.currentPlayer].color);
        playerInfo[my.currentPlayer].numberOfChurros--;
      }
      return;
  } else {
    $tileTopLeftRoad = $specificTile.find('.topLeftRoad');
    $tilePreviousTopRightRoad = $specificTile.prev().find('.topRightRoad');
  }

  if (($tileTopLeftRoad.length > 0 && $tileTopLeftRoadColor == playerColor) || ($tilePreviousTopRightRoad.length > 0 && $tilePreviousTopRightRoadColor == playerColor)) {
    $tile.append('<div class="leftRoad"></div>');
    $tile.find('.leftRoad').css('background-color',playerInfo[my.currentPlayer].color);
    playerInfo[my.currentPlayer].numberOfChurros--;
  } else {
    $tileBottomLeftRoad = $specificTile.find('.bottomLeftRoad');
    $tilePreviousBottomRightRoad = $specificTile.prev().find('.bottomRightRoad');
    $tileBottomLeftRoadColor = $tileBottomLeftRoad.css('background-color');
    $tilePreviousBottomRightRoadColor = $tilePreviousBottomRightRoad.css('background-color');
  }

  if (($tileBottomLeftRoad.length > 0 && $tileBottomLeftRoadColor == playerColor) || ($tilePreviousBottomRightRoad.length > 0 && $tilePreviousBottomRightRoadColor == playerColor)) {
    $tile.append('<div class="leftRoad"></div>');
    $tile.find('.leftRoad').css('background-color',playerInfo[my.currentPlayer].color);
    playerInfo[my.currentPlayer].numberOfChurros--;
  } else {
    alert('YOU CANNOT BUILD A ROAD HERE CHEATER');
  }
}
