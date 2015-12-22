/* * * * * * * * * * * * *
 * Settlers of Candyland *
 * hexgrid.js            *
 * Codefellows 301       *
 * Fall 2015             *
 * * * * * * * * * * * * */

var oddHours =  [ 1, 3, 5, 7, 9, 11 ];
var evenHours = [ 0, 2, 4, 6, 8, 10 ];
var allHours = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ];

// Note for directions: odd hours are adjacent tiles,
// but even hours are actually "two" away.
var direction = [ new Coordinate(1,-2),
		  new Coordinate(1,1),
		  new Coordinate(2,-1),
		  new Coordinate(1,0),
		  new Coordinate(1,1),
		  new Coordinate(0,1),
		  new Coordinate(-1,2),
		  new Coordinate(-1,1),
		  new Coordinate(-2,1),
		  new Coordinate(-1,0),
		  new Coordinate(-1,-1),
		  new Coordinate(0,-1) ];

var isNull = function( x ) {
    return x === null;
}

var invert = function( hour ) {
    return  ( hour + 6 )  % 12;
} 

function Neighbor() {
    var self = this;
    self.edge = null;
    self.isNull = function(key) { return (key in self) && isNull(self[key]); };
}


function NeighborSet() {
    var my = [ null, null, null, null, null, null,
	       null, null, null, null, null, null ];
    // Using stringified integers as keys is abusive syntax
    // but it makes our life so much easier later.
    allHours.forEach( function(hour){
	var neighbor = new Neighbor;
	if( hour % 2 ) { neighbor.tile = null;}   // hour is odd
	else { neighbor.vertex = null; }          // hour is even
	return my[hour] = neighbor; });
     
    return my;
}

function Coordinate( q, r ) {
    // We're using axial coordinated as described here:
    // http://www.redblobgames.com/grids/hexagons/#coordinates
    var self = this;
    self.x = q;
    self.y = null; // this is just so x, y, z show in correct order in the inspector
    self.z = r;
    self.y =  0 - ( self.x + self.z );
    
    self.move = function(direction) {
	var q = self.x + direction.x;
	var r = self.z + direction.z;
	return new Coordinate(q, r);
    }

    self.isNull = function(self) { return ( isNull(x) || isNull(y) || isNull(z) ); };
}

function Tile( q, r ) {
    var self = this;
    self.whatAmI = "tile";
    self.hasRobber = false;
    self.coord = new Coordinate( q, r );
    self.neighbors = new NeighborSet();
    self.type = null;
    self.findMyself = findMyself;

    self.setNeighbor = function(tile){
	self.neighbors[ self.findMyself(tile) ] = tile;
    }

    // Put existing element detection code here.
    
    oddHours.forEach(function(hour){
	if( self.neighbors[hour].isNull("edge") ) {
	    self.neighbors[hour].edge = new Edge();
	    self.neighbors[hour].edge.setNeighbor(self);
	}
    });

    evenHours.forEach(function(hour){
	if( self.neighbors[hour].isNull("vertex") ) {
	    self.neighbors[hour].vertex = new Vertex();
	    self.neighbors[hour].vertex.setNeighbor(self);
	}
    });
    
}

function Edge() {
    var self = this;
    self.whatAmI = "edge";
    self.hasRobber = false;             // this never changes
    self.neighbors = new NeighborSet();
    self.findMyself = findMyself;
    self.road = null;

    self.setNeighbor = function(tile) {
	self.neighbors[ self.findMyself(tile) ] = tile;
    }
}

function Vertex() {
    var self = this;
    self.whatAmI = "vertex";
    self.hasRobber = false;             // this never changes
    self.neighbors = new NeighborSet();
    self.findMyself = findMyself;
    self.building = { type: null,
		      color: null };
    self.setNeighbor = function(tile) {
	self.neighbors[ self.findMyself(tile) ] = tile;
    }
}

function Robber( tile ) {
    var self = this;
    self.location = tile;
    self.moveTo = function( newTile ) {
	self.location.hasRobber = false;
	self.location = newTile;
	self.location.hasRobber = true;
    }
}

function HexBoard(radius) {
    var self = this;
    self.radius = radius;
    self.center = new Tile( 0, 0 );
    self.tileIndex = [];
    self.tileIndex.push(self.center);
    self.findTileByCoord = function(q, r) {
	return self.tileIndex
	         .filter(function(tile) { return q === tile.coord.x
					  && r === tile.coord.z; } );
    }
    
    self.init = function(){
	// is this good indexing?
	// see: http://www.redblobgames.com/grids/hexagons/#rings
	//for ( var i = 0 < radius ) {  } //later

	// Brute force: this sucks, needs fix
	// Make first ring
	self.center.neighbors[1].tile = new Tile( 1, -1 );
	self.center.neighbors[1].tile.setNeighbor(self.center);
	self.center.neighbors[3].tile = new Tile( 1, 0 );
	self.center.neighbors[3].tile.setNeighbor(self.center);
	self.center.neighbors[5].tile = new Tile( 0, 1 );
	self.center.neighbors[5].tile.setNeighbor(self.center);
	self.center.neighbors[7].tile = new Tile( -1, 1 );
	self.center.neighbors[7].tile.setNeighbor(self.center);
	self.center.neighbors[9].tile = new Tile( -1, 0 );
	self.center.neighbors[9].tile.setNeighbor(self.center);
	self.center.neighbors[11].tile = new Tile( 0, -1 );
	self.center.neighbors[11].tile.setNeighbor(self.center);

	console.log(self);
    }
}

var findMyself  = function( their ) {
    var self = this;
    
    for ( var angle in their.neighbors ) {
	if ( self === their.neighbors[angle][self.whatAmI] ) {
	    return invert(angle);
	}
    }
    console.log( "ERROR: ", self, " couldn't find itself in ", their.neighbors );
    return null;
}


var HEX_BOARD_MODULE = (function() {
    var my = {};
    var radius = 3;
    
    my.board = new HexBoard( radius );
    my.board.init();

    
    return my;
})();
