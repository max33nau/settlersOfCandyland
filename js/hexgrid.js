/* * * * * * * * * * * * *
 * Settlers of Candyland *
 * hexgrid.js            *
 * Codefellows 301       *
 * Fall 2015             *
 * * * * * * * * * * * * */

var oddHours =  [ 1, 3, 5, 7, 9, 11 ];
var evenHours = [ 0, 2, 4, 6, 8, 10 ];
var allHours = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]

var isNull = function( x ) {
    return x === null;
}

var invert = function( hour ) {
    return  ( hour + 6 )  % 12;
} 


function NeighborSet() {
    var my = [ null, null, null, null, null, null,
	       null, null, null, null, null, null ];
    // Using stringified integers as keys is abusive syntax
    // but it makes our life so much easier later.
    evenHours.forEach(function(hour){return my[hour]={edge:null,vertex:null};});
    oddHours.forEach(function(hour){return my[hour]={edge:null,tile:null};});

    return my;

}

function Coordinate( x, y ) {
    // We're using axial coordinated as described here:
    // http://www.redblobgames.com/grids/hexagons/#coordinates
    var self = this;
    this.x = x;
    this.y = y;
    this.z = 0 - ( x + y );
}

function Tile( x, y ) {
    var self = this;
    self.whatAmI = "tile";
    self.hasRobber = false;
    self.coord = new Coordinate( x, y );
    self.neighbors = new NeighborSet();
    self.type = null;
    self.findMyself = findMyself;

    self.setNeighbor = function(tile) {
	self.neighbors[ self.findMyself(tile) ] = tile;
    }

    // I know that for each tile I create, I can safely add all
    // these neighbors without accidentally creating duplicates.
    self.neighbors[1].edge = new Edge();
    self.neighbors[1].edge.setNeighbor(self);
    self.neighbors[5].edge = new Edge();
    self.neighbors[5].edge.setNeighbor(self);
    self.neighbors[9].edge = new Edge();
    self.neighbors[9].edge.setNeighbor(self);
    self.neighbors[0].vertex = new Vertex();
    self.neighbors[0].vertex.setNeighbor(self);
    self.neighbors[6].vertex = new Vertex();
    self.neighbors[6].vertex.setNeighbor(self);

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
    
    self.init = function(){
	// is this good indexing?
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
