$tiles = $('.tiles');
console.log($tiles);
$tiles.click(bottomRightRoad)

function leftRoad() {
  $tile = $(this);
  $tile.append('<div class="leftRoad"></div>');
}
function rightRoad() {
  $tile = $(this);
  $tile.append('<div class="rightRoad"></div>');
}
function topLeftRoad() {
  $tile = $(this);
  $tile.append('<div class="topLeftRoad"></div>');
}
function topRightRoad() {
  $tile = $(this);
  $tile.append('<div class="topRightRoad"></div>');
}
function bottomLeftRoad() {
  $tile = $(this);
  $tile.append('<div class="bottomLeftRoad"></div>');
}
function bottomRightRoad() {
  $tile = $(this);
  $tile.append('<div class="bottomRightRoad"></div>');
}
