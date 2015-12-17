
$(function() {

$building = $('.building');
$road = $('.road');

$building.click(function() {
  $specificBuilding = $(this);
  $specificBuilding.css('background-color','red');
});

$road.click(function() {
  $specificRoad = $(this);
  $specificRoad.css('background-color','red');
});


})
