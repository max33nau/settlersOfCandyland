/* * * * * * * * * * * * *
 * Settlers of Candyland *
 * hexgrid.js            *
 * Codefellows 301       *
 * Fall 2015             *
 * * * * * * * * * * * * */

var oddHours =  [ 1, 3, 5, 7, 9, 11 ];
var evenHours = [ 0, 2, 4, 6, 8, 10 ];
var allHours =  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ];
var tileIndex = new TileIndex();

// Note for directions: odd hours are adjacent tiles,
// but even hours are actually "two" steps away.
// This comes in handy, eventually.
var direction = [ new Coordinate(1,-2),
		  new Coordinate(1,-1),
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
    return  ( Number(hour) + 6 )  % 12;
} 

function TileIndex() {
    var my = [ ];
    
    my.findTileByCoord = function(coord) {
	var foundTile = my.filter( function(tile) {
	    return ( coord.x === tile.coord.x && coord.z === tile.coord.z );
	});
	
	if ( foundTile.length === 0 ) {
	    //console.log("Tile at (" + coord.x + ", " + coord.z + ") not found.");
	    return null;
	}
	else if ( foundTile.length === 1 ) {
	    //console.log("Tile found at (" + coord.x + ", " + coord.z + ")");
	    return foundTile[0];
	} else {
	    console.log("ERROR: More than one tile found at (" + coord.x + ", " + coord.z + ")");
	    return null;
	}
    };

    my.logTiles = function(){
	var output =
	    "TileIndex: " +
	    my.map(function(tile){
		return "(" + tile.coord.x + ", " + tile.coord.z + ")";
	    })
	    .join(", ");
	console.log(output);
    };
    return my;
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
	//console.log( "q: " + q + ", r: " + r );
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

    self.setNeighbor = function(tile) {
	var hour = self.findMyself(tile);
	self.neighbors[ hour ].tile = tile;
    }

    self.logNeighbors = function() {
	var output =  "At (" + self.coord.x + ", "
	                  + self.coord.z + "): \n" +
	    self.neighbors
	    .map( function(neighbor, hour){
		if( Number(hour) % 2 == 0 ) {
		    return "";
		} else { return hour + ": ("
		       + neighbor.tile.coord.x + ", "
		       + neighbor.tile.coord.z + ")   "; } })
	    .join("");
	console.log(output);
    };

    
    // Put existing neighbor detection code here.
    oddHours.forEach( function(hour) {
	// Check to see if we've already set neighbor relationships for tiles
	// at adjacent coords. If not, and neighboring tiles exist in the index,
	// set neighboring tile, edge, and vertex relationships.
	if( self.neighbors[hour].tile === null) {
	    // If null, then the tile key exists, but no relationship has been set
	    
	    var tile = tileIndex.findTileByCoord( self.coord.move(direction[hour]) );

	    // We may be redundantly setting vertex and edge relationships,
	    // but it's okay
	    if( tile != null ) {
		self.neighbors[hour].tile = tile;
		self.neighbors[hour].edge = tile.neighbors[invert(hour)].edge;
		self.neighbors[ (hour + 1) % 12 ].edge =
		    tile.neighbors[ (invert(hour) + 11) % 12 ].edge;
		self.neighbors[ (hour + 1) % 12].vertex =
		    tile.neighbors[ (invert(hour) + 11) % 12].vertex;
		self.neighbors[ (hour + 11) % 12 ].edge =
		    tile.neighbors[ (invert(hour) + 1) % 12 ].edge;
		self.neighbors[ (hour + 11) % 12].vertex =
		    tile.neighbors[ (invert(hour) + 1) % 12].vertex;
		tile.setNeighbor(self);
	    }
	}
    });

    
    
    // Add remaining adjacent vertices and edges to tile.
    oddHours.forEach( function(hour){
	if( self.neighbors[hour].isNull("edge") ) {
	    self.neighbors[hour].edge = new Edge();
	    self.neighbors[hour].edge.setNeighbor(self);
	}
    });
    evenHours.forEach( function(hour){
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
	var hour = self.findMyself(tile);
	//console.log("ed");
	self.neighbors[ hour ].edge = tile.neighbors[invert(hour)].edge;
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
	var hour = self.findMyself(tile);
	//console.log("vert");
	self.neighbors[ hour ].vertex = tile.neighbors[invert(hour)].vertex;
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
    tileIndex.push(self.center);

    
    self.init = function(){
	// see: http://www.redblobgames.com/grids/hexagons/#rings
	var currentTile = self.center;  //temp
	for ( var i = 1; i < 2; i++ ) {
	    oddHours.forEach(function(hour) {

		//console.log( tileIndex.findTileByCoord( currentTile.coord.move(direction[hour]) ) );
		if ( tileIndex.findTileByCoord( currentTile.coord.move(direction[hour]) ) == null ) {
		    var currentCoord = currentTile.coord.move(direction[hour]);
		    currentTile.neighbors[hour].tile =
			new Tile(currentCoord.x, currentCoord.z);
		    tileIndex.push(currentTile.neighbors[hour].tile);
		}
	    });
	}

	self.center.logNeighbors();
	tileIndex.logTiles();
    }
}

var findMyself  = function( their ) {
    var self = this;
    for ( var hour in their.neighbors ) {
	if ( self === their.neighbors[hour][self.whatAmI] ) {
	    //console.log(hour + " -> " + invert(hour));
	    return invert(hour);
	}
    }
    console.log( "ERROR: ", self, " couldn't find itself in ", their.neighbors );
    return null;
}


var HEX_BOARD_MODULE = (function() {
    var my = {};
    var radius = 2;
    
    my.board = new HexBoard( radius );
    my.board.init();

    
    return my;
})();
